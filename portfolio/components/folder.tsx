"use client";
import React from "react";
import FolderWithPolaroids from "./ui/polaroid-folder";
import { Kalam } from "next/font/google";

// Initialize the Kalam font
const kalamFont = Kalam({
  weight: ["400"],
  subsets: ["latin"],
});

const cardData = [
  {
    id: 1, imageSrc: "/images/victoria_park.webp",
    altText: "Victoria Park, University of Sydney's gardens",
    imageTitle: "Sydney Uni Gardens",
    imageDate: "Aug 2023 at 3:20PM"
  },
  {
    id: 2, imageSrc: "/images/hyde_park.webp",
    altText: "Hyde Park in Sydney",
    imageTitle: "Hyde Park",
    imageDate: "Dec 2023 at 7:56PM"
  },
  {
    id: 3, imageSrc: "/images/uni_jacaranda.webp",
    altText: "Jacaranda tree in University of Sydney",
    imageTitle: "Jacarandas in Sydney Uni",
    imageDate: "Nov 2023 at 3:16PM"
  },
  {
    id: 4, imageSrc: "/images/penguin.webp",   
    altText: "Penguins in Sydney Aquarium, Sea Life",
    imageTitle: "Penguins",
    imageDate: "Aug 2023 at 2:38PM"
  },
  {
    id: 5, imageSrc: "/images/koala.webp",
    altText: "Koalas in Wild Life Sydney Zoo",
    imageTitle: "Koalas",
    imageDate: "Sep 2023 at 8:36AM"
  },
  {
    id: 6, imageSrc: "/images/kangaroo.webp",
    altText: "Kangaroo in Wild Life Sydney Zoo",
    imageTitle: "Kangaroos",
    imageDate: "Sep 2023 at 9:46AM"
  },
  {
    id: 7, imageSrc: "/images/coogee_walk.webp",
    altText: "Coogee to Bondi Walk, Tamarama Beach",
    imageTitle: "Coogee Walk",
    imageDate: "Sep 2023 at 4:25PM"
  },
  {
    id: 8, imageSrc: "/images/bronte_beach.webp",
    altText: "Sunrise in Bronte Beach in Sydney",
    imageTitle: "Bronte Beach",
    imageDate: "Dec 2023 at 5:40AM"
  },
  {
    id: 9, imageSrc: "/images/bondi_beach.webp",
    altText: "Bondi Beach in Sydney",
    imageTitle: "Bondi Beach",
    imageDate: "Aug 2023 at 3:25PM"
  },
  {
    id: 10,
    imageSrc: "/images/wc_final.webp",
    altText: "Women's World Cup Final in Sydney at ANZ Stadium",
    imageTitle: "Women's World Cup Final",
    imageDate: "Aug 2023 at 7:39PM"
  },
  { 
    id: 11,
    imageSrc: "/images/opera_night.webp",
    altText: "Sydney Opera House view by night",
    imageTitle: "Opera House",
    imageDate: "Aug 2023 at 8:17PM"
  },
];

const PhotoGallery = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        <FolderWithPolaroids
          cards={cardData}
          color="#4299e1" // A nice blue color
          size={1.8}
          kalamFont={kalamFont}
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default PhotoGallery;