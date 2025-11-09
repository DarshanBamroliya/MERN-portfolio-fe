'use client';
import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Enable only on devices that support hover and fine pointer (non-touch)
    const media = window.matchMedia('(hover: hover) and (pointer: fine)');
    const apply = () => setEnabled(media.matches);
    apply();
    media.addEventListener?.('change', apply);
    return () => media.removeEventListener?.('change', apply);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const dot = dotRef.current;
    const ring = ringRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dot) {
        dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }

      // Check if hovering over an interactive element or footer
      const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
      
      if (elementUnderCursor && !elementUnderCursor.classList.contains('cursor')) {
        const isInteractive = elementUnderCursor.closest('a, button, [role="button"], input, select, textarea, [onclick], [data-clickable], .cursor-hover');
        const isFooter = elementUnderCursor.closest('footer');
        setIsHovering(!!(isInteractive || isFooter));
      } else {
        setIsHovering(false);
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) / 8;
      ringY += (mouseY - ringY) / 8;

      if (ring) {
        ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }

      requestAnimationFrame(animateRing);
    };

    const hideCursor = () => {
      if (dot) dot.style.opacity = '0';
      if (ring) ring.style.opacity = '0';
    };

    const showCursor = () => {
      if (dot) dot.style.opacity = '1';
      if (ring) ring.style.opacity = '1';
    };

    document.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseout', hideCursor);
    window.addEventListener('mouseover', showCursor);
    animateRing();

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseout', hideCursor);
      window.removeEventListener('mouseover', showCursor);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div 
        ref={dotRef} 
        className={`cursor cursor-style:dot ${isHovering ? 'cursor-hover' : ''}`}
      />
      <div 
        ref={ringRef} 
        className={`cursor cursor-style:ring ${isHovering ? 'cursor-hover' : ''}`} 
      />
    </>
  );
}
