import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

/**
 * Custom hook that provides a GSAP context scoped to a container ref.
 * Automatically cleans up animations on unmount.
 */
export function useGsapContext() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {}, containerRef);
    return () => ctx.revert();
  }, []);

  return containerRef;
}

/**
 * Hook to run a GSAP animation with automatic cleanup.
 * @param animation - Function receiving gsap and the container element
 * @param deps - Dependency array
 */
export function useGsapAnimation(
  animation: (gsapInstance: typeof gsap, container: HTMLDivElement) => void,
  deps: React.DependencyList = []
) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      animation(gsap, containerRef.current!);
    }, containerRef);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return containerRef;
}
