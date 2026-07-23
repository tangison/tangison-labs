/**
 * Shared animation variants for Tangison Labs.
 *
 * Only hero entrance variants are kept — scroll animation (whileInView)
 * has been removed per Gate 14. All other sections render statically.
 */

import type { Variants } from "framer-motion";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const heroFadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, delay, ease },
  }),
};

export const heroSlideIn: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay, ease },
  }),
};

export const heroSlideDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease },
  }),
};
