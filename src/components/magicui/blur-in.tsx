"use client";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

type BlurIntProps = {
  word: string;
  className?: string;
  variant?: {
    hidden: { opacity: number; y?: number; scale?: number };
    visible: { opacity: number; y?: number; scale?: number };
  };
  duration?: number;
  delay?: number;
};
const BlurIn = ({
  word,
  className,
  variant,
  duration = 0.45,
  delay = 0,
}: BlurIntProps) => {
  const defaultVariants = {
    hidden: { opacity: 0, y: 12, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration, delay, ease: "easeOut" }}
      variants={combinedVariants}
      className={cn(
        className,
        "text-center font-bold font-display text-4xl tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]",
      )}
    >
      {word}
    </motion.h1>
  );
};

export default BlurIn;
