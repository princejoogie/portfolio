"use client";

import {
  AnimatePresence,
  MotionConfig,
  motion,
  type Variants,
} from "motion/react";
import { type ReactNode, useState } from "react";
import { useQueryParams } from "@/hooks/use-query-params";

type TabItemProps<T extends string> = {
  text: T;
  selected: boolean;
  // eslint-disable-next-line no-unused-vars
  onSelect: (tab: T) => void;
};

const TabItem = <T extends string>({
  text,
  selected,
  onSelect,
}: TabItemProps<T>) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(text)}
      className={`${
        selected
          ? "text-white"
          : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
      } relative rounded-md px-2 py-1 text-sm transition-colors`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="tab"
          transition={{ type: "spring", duration: 0.25, bounce: 0.12 }}
          className="absolute inset-0 z-0 rounded-md bg-secondary"
        ></motion.span>
      )}
    </button>
  );
};

type TabsProps<T extends string[]> = {
  tabs: T;
  tabContent: Record<T[number], ReactNode>;
  defaultTab: T[number];
};

const MULTIPLIER = 32;

const variants: Variants = {
  initial: (dir: number) => ({
    width: "100%",
    position: "absolute",
    x: MULTIPLIER * dir,
    opacity: 0,
  }),
  active: {
    width: "100%",
    position: "relative",
    x: 0,
    opacity: 1,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
  exit: (dir: number) => ({
    width: "100%",
    position: "absolute",
    x: -MULTIPLIER * dir,
    opacity: 0,
    transition: { duration: 0.16, ease: "easeInOut" },
  }),
};

export const Tabs = <T extends string[]>({
  tabs,
  defaultTab,
  tabContent,
}: TabsProps<T>) => {
  const [currentTab, setCurrentTab] = useQueryParams("tab", defaultTab, {
    scroll: false,
  });
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const tabIndex = tabs.indexOf(currentTab as string);

  return (
    <MotionConfig transition={{ duration: 0.2, ease: "easeInOut" }}>
      <div className="mb-8 flex flex-wrap items-center gap-2">
        {tabs.map((tab) => (
          <TabItem
            text={tab}
            selected={currentTab === tab}
            onSelect={(tab) => {
              if (isAnimating) return;
              const newTabIndex = tabs.indexOf(tab);
              setDirection(newTabIndex > tabIndex ? 1 : -1);
              setCurrentTab(tab);
            }}
            key={tab}
          />
        ))}
      </div>

      <div className="relative overflow-x-clip">
        <AnimatePresence
          custom={direction}
          initial={false}
          onExitComplete={() => setIsAnimating(false)}
        >
          <motion.div
            custom={direction}
            key={currentTab}
            variants={variants}
            initial="initial"
            animate="active"
            exit="exit"
            className="w-full rounded-lg"
            onAnimationStart={() => setIsAnimating(true)}
            onAnimationComplete={() => setIsAnimating(false)}
          >
            {tabContent[currentTab]}
          </motion.div>
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
};
