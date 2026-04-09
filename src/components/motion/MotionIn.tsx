"use client";

import { motion, type MotionProps } from "framer-motion";
import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
} & MotionProps;

export function MotionIn({ children, delay = 0, className, ...props }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-20% 0px -10% 0px" }}
      transition={{ duration: 0.6, ease: [0.2, 0.9, 0.2, 1], delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

