"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CardData {
  id: number;
  imageSrc: string;
  altText: string;
  imageTitle: string;
  imageDate: string;
}

interface FolderWithPolaroidsProps {
  color?: string;
  size?: number;
  cards: CardData[];
  className?: string;
  kalamFont?: any; // For the font class
}

const darkenColor = (hex: string, percent: number): string => {
  let color = hex.startsWith("#") ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return (
    "#" +
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
  );
};

const PolaroidCard: React.FC<{
  card: CardData;
  kalamFont?: any;
  style?: React.CSSProperties;
  className?: string;
  onMouseMove?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}> = ({ card, kalamFont, style, className = "", onMouseMove, onMouseLeave }) => {
  return (
    <div
      className={`relative bg-white p-2 shadow-lg rounded-md transform transition-all duration-300 ease-in-out ${className}`}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="w-full h-full flex flex-col items-center justify-start">
        <div className="w-full overflow-hidden mb-1">
          <Image
            width={192}
            height={192}
            src={card.imageSrc}
            alt={card.altText}
            className="w-full h-full object-cover select-none pointer-events-none"
          />
        </div>
        <div className={`w-full pt-1 flex flex-col gap-0 select-none pointer-events-none ${kalamFont?.className || ""}`}>
          <h2 className="text-sm text-black font-semibold leading-tight truncate">{card.imageTitle}</h2>
          <p className="text-xs text-zinc-600">{card.imageDate}</p>
        </div>
      </div>
    </div>
  );
};

const FolderWithPolaroids: React.FC<FolderWithPolaroidsProps> = ({
  color = "#00d8ff",
  size = 1,
  cards = [],
  className = "",
  kalamFont,
}) => {
  const [open, setOpen] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [cardOffsets, setCardOffsets] = useState<{ x: number; y: number }[]>(
    Array.from({ length: cards.length }, () => ({ x: 0, y: 0 }))
  );

  // Folder colors
  const folderBackColor = darkenColor(color, 0.08);
  const paper1 = darkenColor("#ffffff", 0.1);
  const paper2 = darkenColor("#ffffff", 0.05);
  const paper3 = "#ffffff";

  // Handle folder open/close
  const handleFolderClick = () => {
    setOpen((prev) => !prev);
    if (open) {
      setCardOffsets(Array.from({ length: cards.length }, () => ({ x: 0, y: 0 })));
    }
  };

  // Handle polaroid card hover effects
  const handleCardMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    if (!open) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * 0.1;
    const offsetY = (e.clientY - centerY) * 0.1;
    
    setCardOffsets((prev) => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: offsetX, y: offsetY };
      return newOffsets;
    });
  };

  // Reset card hover effects
  const handleCardMouseLeave = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setCardOffsets((prev) => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: 0, y: 0 };
      return newOffsets;
    });
  };

  // Navigation
  const handlePrevClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveCardIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const handleNextClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveCardIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  // Calculate position for each card in the circular arc
  const getCardPosition = (index: number) => {
    // Calculate the relative index position from the active card
    const totalCards = cards.length;
    let relativePosition = index - activeCardIndex;
    
    // Handle wrapping for circular effect
    if (relativePosition < 0) {
      relativePosition += totalCards;
    }
    
    // Limit to ±5 positions for performance
    if (relativePosition > totalCards / 2) {
      relativePosition = relativePosition - totalCards;
    }
    
    return relativePosition;
  };

  // Get card transform based on its position in the arc
  const getCardTransform = (index: number) => {
    const relativePosition = getCardPosition(index);
    const offsetX = cardOffsets[index]?.x || 0;
    const offsetY = cardOffsets[index]?.y || 0;
    
    // When folder is closed, stack cards inside folder
    if (!open) {
      // Only the first 3 cards are visible when closed
      if (relativePosition === 0) return "translate(-50%, 10%) scale(0.4)";
      if (relativePosition === 1) return "translate(-50%, 5%) scale(0.45)";
      if (relativePosition === 2) return "translate(-50%, 0%) scale(0.5)";
      return "translate(-50%, 0%) scale(0)"; // Hide other cards
    }
    
    // When folder is open, arrange in circular arc
    // Center card is at position 0
    // Angle covers about 180 degrees (-90° to +90°)
    const angle = relativePosition * 10; // 20 degrees per card
    const radius = 300; // Radius of the arc
    
    // Calculate position on the arc using trigonometry
    const x = Math.sin(angle * (Math.PI / 180)) * radius;
    const y = -Math.cos(angle * (Math.PI / 180)) * radius;
    const rotationAngle = angle;
    
    // Determine scale and z-index based on position
    const scale = relativePosition === 0 ? 1 :
                  Math.abs(relativePosition) === 1 ? 0.9 :
                  Math.abs(relativePosition) === 2 ? 0.8 : 0.7;
    
    return `translate(calc(-50% + ${x}px), ${y}px) rotate(${rotationAngle}deg) scale(${scale}) translate(${offsetX}px, ${offsetY}px)`;
  };

  // Get z-index for cards based on their position
  const getCardZIndex = (index: number) => {
    const relativePosition = getCardPosition(index);
    const absPosition = Math.abs(relativePosition);
    
    // Center card has highest z-index
    return 100 - absPosition * 10;
  };

  // Get visibility style for each card
  const getCardVisibility = (index: number) => {
    const relativePosition = getCardPosition(index);
    const absPosition = Math.abs(relativePosition);
    
    // Only show cards within a certain range in the arc 
    // (center card and 2 cards on each side)
    return absPosition <= 2 ? "visible" : "hidden";
  };

  // Set folder style variables
  const folderStyle: React.CSSProperties = {
    "--folder-color": color,
    "--folder-back-color": folderBackColor,
    "--paper-1": paper1,
    "--paper-2": paper2,
    "--paper-3": paper3,
  } as React.CSSProperties;

  // Outer scale style
  const scaleStyle = { transform: `scale(${size})` };

  return (
    <div style={scaleStyle} className={`relative ${className}`}>
      <div
        className={`group relative transition-all duration-200 ease-in cursor-pointer ${
          !open ? "hover:-translate-y-2" : ""
        }`}
        style={{
          ...folderStyle,
          transform: open ? "translateY(-8px)" : undefined,
        }}
        onClick={handleFolderClick}
      >
        {/* Main folder */}
        <div
          className="relative w-[100px] h-[80px] rounded-tl-0 rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]"
          style={{ backgroundColor: folderBackColor }}
        >
          {/* Folder tab */}
          <span
            className="absolute z-0 bottom-[98%] left-0 w-[30px] h-[10px] rounded-tl-[5px] rounded-tr-[5px] rounded-bl-0 rounded-br-0"
            style={{ backgroundColor: folderBackColor }}
          ></span>
          
          {/* Render all polaroid cards */}
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="absolute z-20 bottom-0 left-1/2 transition-all duration-500 ease-in-out"
              style={{
                transform: getCardTransform(index),
                zIndex: getCardZIndex(index),
                visibility: getCardVisibility(index),
                transformOrigin: "bottom center",
              }}
            >
              <PolaroidCard
                card={card}
                kalamFont={kalamFont}
                className={open ? "w-36 h-44" : "w-16 h-20"} // Smaller when folder is closed
                onMouseMove={(e) => handleCardMouseMove(e, index)}
                onMouseLeave={(e) => handleCardMouseLeave(e, index)}
              />
            </div>
          ))}

          {/* Folder front */}
          <div
            className={`absolute z-30 w-full h-full origin-bottom transition-all duration-300 ease-in-out ${
              !open ? "group-hover:[transform:skew(15deg)_scaleY(0.6)]" : ""
            }`}
            style={{
              backgroundColor: color,
              borderRadius: "5px 10px 10px 10px",
              ...(open && { transform: "skew(15deg) scaleY(0.6)" }),
            }}
          ></div>
          <div
            className={`absolute z-30 w-full h-full origin-bottom transition-all duration-300 ease-in-out ${
              !open ? "group-hover:[transform:skew(-15deg)_scaleY(0.6)]" : ""
            }`}
            style={{
              backgroundColor: color,
              borderRadius: "5px 10px 10px 10px",
              ...(open && { transform: "skew(-15deg) scaleY(0.6)" }),
            }}
          ></div>
        </div>
      </div>

      {/* Navigation buttons - only show when folder is open */}
      {open && (
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-40 flex justify-between w-96">
          <button
            onClick={handlePrevClick}
            className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNextClick}
            className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default FolderWithPolaroids;