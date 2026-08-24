"use client";

import {
  AnimatePresence,
  MotionConfig,
  m,
  useReducedMotion,
  type Variants,
} from "motion/react";
import { type ReactNode, useState } from "react";

import { useQueryParams } from "@/hooks/use-query-params";

type TabItemProps<T extends string> = {
  text: T;
  selected: boolean;
  reducedMotion: boolean;
  onSelect: (tab: T) => void;
};

const TabItem = <T extends string>({
  text,
  selected,
  reducedMotion,
  onSelect,
}: TabItemProps<T>) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(text)}
      className={`${
        selected
          ? "text-secondary-foreground"
          : "text-muted-foreground hover:text-foreground"
      } relative rounded-md px-2 py-1 text-sm transition-colors`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <m.span
          layoutId={reducedMotion ? undefined : "tab"}
          transition={
            reducedMotion
              ? { duration: 0 }
              : { type: "spring", duration: 0.25, bounce: 0.12 }
          }
          className="absolute inset-0 z-0 rounded-md bg-secondary"
        ></m.span>
      )}
    </button>
  );
};

type TabsProps<T extends readonly string[]> = {
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

export const Tabs = <T extends readonly string[]>({
  tabs,
  defaultTab,
  tabContent,
}: TabsProps<T>) => {
  const [currentTab, setCurrentTab] = useQueryParams("tab", defaultTab, {
    scroll: false,
  });
  const shouldReduceMotion = useReducedMotion() ?? false;
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const activeTab = tabs.includes(currentTab as T[number])
    ? (currentTab as T[number])
    : defaultTab;
  const tabIndex = tabs.indexOf(activeTab);

  return (
    <MotionConfig transition={{ duration: 0.2, ease: "easeInOut" }}>
      <div className="mb-8 flex flex-wrap items-center gap-2">
        {tabs.map((tab) => (
          <TabItem
            text={tab}
            selected={activeTab === tab}
            reducedMotion={shouldReduceMotion}
            onSelect={(selectedTab) => {
              if (!shouldReduceMotion && isAnimating) return;
              const newTabIndex = tabs.indexOf(selectedTab);
              setDirection(newTabIndex > tabIndex ? 1 : -1);
              setCurrentTab(selectedTab);
            }}
            key={tab}
          />
        ))}
      </div>

      <div className="relative overflow-x-clip">
        {shouldReduceMotion ? (
          <div className="w-full rounded-lg">{tabContent[activeTab]}</div>
        ) : (
          <AnimatePresence
            custom={direction}
            initial={false}
            onExitComplete={() => setIsAnimating(false)}
          >
            <m.div
              custom={direction}
              key={activeTab}
              variants={variants}
              initial="initial"
              animate="active"
              exit="exit"
              className="w-full rounded-lg"
              onAnimationStart={() => setIsAnimating(true)}
              onAnimationComplete={() => setIsAnimating(false)}
            >
              {tabContent[activeTab]}
            </m.div>
          </AnimatePresence>
        )}
      </div>
    </MotionConfig>
  );
};
