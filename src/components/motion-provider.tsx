"use client";

import { domAnimation, LazyMotion, MotionConfig } from "motion/react";
import type { ReactNode } from "react";

type MotionProviderProps = {
  children: ReactNode;
};

export const MotionProvider = ({ children }: MotionProviderProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
};
