"use client";

// HotjarTracking.js
import { useEffect } from 'react';
import Hotjar from '@hotjar/browser';

const HotjarTracking = ({ siteId, hotjarVersion }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') { // Ensure this runs in a browser environment
      Hotjar.init(siteId, hotjarVersion);
    }
  }, [siteId, hotjarVersion]);

  return null; // This component does not render anything
};

export default HotjarTracking;
