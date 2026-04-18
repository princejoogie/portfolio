"use client";

import {
  AnimatePresence,
  type HTMLMotionProps,
  motion,
  useAnimationControls,
} from "motion/react";
import type { ReactNode } from "react";
import { useEffect, useEffectEvent, useState } from "react";

import { cn } from "@/lib/utils";

type WordRotateProps = {
  words: string[];
  duration?: number;
  framerProps?: HTMLMotionProps<"span">;
  className?: string;
  leading?: ReactNode;
};

export default function WordRotate({
  words,
  duration = 2500,
  framerProps = {
    initial: { opacity: 0, y: -12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 12 },
    transition: { duration: 0.18, ease: "easeOut" },
  },
  className,
  leading,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);
  const waveControls = useAnimationControls();
  const currentWord = words[index];
  const animateWave = useEffectEvent(() => {
    if (!leading) return;

    waveControls.start({
      rotate: [0, 18, -10, 18, -6, 10, 0],
      transition: {
        duration: 0.7,
        ease: "easeInOut",
        times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 1],
      },
    });
  });

  useEffect(() => {
    animateWave();

    const interval = setInterval(() => {
      animateWave();
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <div className="inline-flex min-h-[1lh] items-center gap-2 overflow-hidden">
      {leading ? (
        <motion.span
          aria-hidden="true"
          className="inline-flex"
          animate={waveControls}
          initial={{ rotate: 0 }}
          style={{ originX: 0.7, originY: 0.7 }}
        >
          {leading}
        </motion.span>
      ) : null}
      <AnimatePresence initial={false} mode="wait">
        <motion.span
          key={currentWord}
          className={cn("inline-block leading-none", className)}
          initial={false}
          {...framerProps}
        >
          {currentWord}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
