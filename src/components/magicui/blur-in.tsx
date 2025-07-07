"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type BlurIntProps = {
  word: string;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
  delay?: number;
};
const BlurIn = ({
  word,
  className,
  variant,
  duration = 1,
  delay = 0,
}: BlurIntProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration, delay }}
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
