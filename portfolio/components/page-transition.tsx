"use client";

import { useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { gsap } from "gsap";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const pathname = usePathname();
    const overlayRef = useRef<HTMLDivElement>(null);
    const blocksRef = useRef<HTMLDivElement[]>([]);
    const isTransitioning = useRef(false);

    useEffect(() => {
        const createBlocks = () => {
            if (!overlayRef.current) return;
            overlayRef.current.innerHTML = "";
            blocksRef.current = [];

            let blockCount: number;
            if (typeof window !== 'undefined') {
                const screenWidth = window.innerWidth;
                if (screenWidth < 480) {
                    blockCount = 8;
                } else if (screenWidth < 768) {
                    blockCount = 12;
                } else if (screenWidth < 1024) {
                    blockCount = 16;
                } else {
                    blockCount = 20;
                }
            } else {
                blockCount = 20;
            }

            for (let i: number = 0; i < blockCount; i++) {
                const block: HTMLDivElement = document.createElement("div");
                block.className = "flex-1 w-full bg-foreground transform scale-x-0 origin-left";
                overlayRef.current.appendChild(block);
                blocksRef.current.push(block);
            }
        };

        createBlocks();

        const handleResize = () => {
            createBlocks();
            gsap.set(blocksRef.current, { scaleX: 0, transformOrigin: "left center" });
        };

        window.addEventListener('resize', handleResize);

        gsap.set(blocksRef.current, { scaleX: 0, transformOrigin: "left center" });

        revealPage();

        const handleRouteChange = (url: string) => {
            if (isTransitioning.current) return;
            isTransitioning.current = true;
            coverPage(url);
        };

        const clickHandlers = new Map<Element, (e: Event) => void>();

        const links = document.querySelectorAll('a[href^="/"]');
        links.forEach((link) => {
            const clickHandler = (e: Event) => {
                e.preventDefault();
                if (!e.currentTarget) return;
                const href = (e.currentTarget as HTMLAnchorElement).href;
                const url = new URL(href).pathname;
                if (url !== pathname) {
                    handleRouteChange(url);
                }
            };
            clickHandlers.set(link, clickHandler);
            link.addEventListener("click", clickHandler);
        });

        return () => {
            window.removeEventListener('resize', handleResize);
            links.forEach((link) => {
                const handler = clickHandlers.get(link);
                if (handler) {
                    link.removeEventListener("click", handler);
                }
            });
        };
    }, [router, pathname]);


    const coverPage = (url: string) => {
        const tl = gsap.timeline({
            onComplete: () => { router.push(url);},
        });

        tl.to(blocksRef.current, {
            scaleX: 1,
            duration: 0.4,
            stagger: 0.02,
            ease: "power2.out",
            transformOrigin: "left center",
        })
    };

    const revealPage = () => {
        gsap.set(blocksRef.current, { scaleX: 1, transformOrigin: "right" });

        gsap.to(blocksRef.current, {
            scaleX: 0,
            duration: 0.4,
            delay: 0.4,
            stagger: 0.02,
            ease: "power2.out",
            transformOrigin: "right",
            onComplete: () => {
                isTransitioning.current = false;
            },
        });
    }

    return (
        <>
            <div id="transition-overlay" ref={overlayRef} className="fixed inset-0 w-screen h-[100svh] flex pointer-events-none z-50" />
            {children}
        </>
    );
};

export default PageTransition;