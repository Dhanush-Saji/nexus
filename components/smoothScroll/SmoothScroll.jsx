"use client"
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";


const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenisRef.current?.destroy();
    };
  }, []);
  return (
    <>
      {children}
    </>
  )
}

export default SmoothScroll