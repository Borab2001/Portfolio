'use client';

import React, { useEffect } from "react";
import Lenis from "lenis";

interface ScrollProviderProps {
    children: React.ReactNode;
}

const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
    
    useEffect(() => {
        const lenis = new Lenis();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function raf(time: any) {
            lenis.raf((time));
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }, []);

    return (
       <>
            {children}
        </>
    );
}
 
export default ScrollProvider;