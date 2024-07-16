"use client";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export const lenis = new Lenis({
    smoothWheel: true,
    duration: 1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });
  
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);

const SmoothScroll = ( {children}) => {
  useEffect(() => {
    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      {children}
    </>
  )
}

export default SmoothScroll