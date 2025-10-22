"use client";

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScrollWrapper({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      // you can tweak these options:
      smooth: true,             // (default) enable smoothing
      // wrapper: window,        // default
      // content: document.documentElement, // default
      // lerp: 0.1,
      // duration: 1.2,
      // easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // ...other options as needed
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
