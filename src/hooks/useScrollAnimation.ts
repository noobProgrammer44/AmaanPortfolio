import { useRef } from "react";
import { useInView, cubicBezier } from "framer-motion";

interface ScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const { threshold = 0.1, triggerOnce = true } = options;
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: triggerOnce, 
    amount: threshold 
  });

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const baseAnimationProps = {
    initial: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
    animate: (isInView && !prefersReducedMotion) ? { opacity: 1, y: 0 } : 
             prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
    transition: { 
      duration: prefersReducedMotion ? 0 : 0.7, 
      ease: cubicBezier(0.4, 0, 0.2, 1)
    }
  };

  const staggerAnimationProps = (index: number, delay: number = 0.15) => ({
    initial: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    animate: (isInView && !prefersReducedMotion) ? { opacity: 1, y: 0 } : 
             prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    transition: { 
      duration: prefersReducedMotion ? 0 : 0.6, 
      delay: prefersReducedMotion ? 0 : index * delay,
      ease: cubicBezier(0.4, 0, 0.2, 1)
    }
  });

  return {
    ref,
    isInView: prefersReducedMotion ? true : isInView,
    baseAnimationProps,
    staggerAnimationProps,
    prefersReducedMotion
  };
};