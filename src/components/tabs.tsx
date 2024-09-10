"use client";

import { useQueryParams } from "@/hooks/use-query-params";
import { motion } from "framer-motion";
import { ReactNode } from "react";

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
      onClick={() => onSelect(text)}
      className={`${
        selected
          ? "text-white"
          : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
      } relative rounded-md px-2 py-1 text-sm font-medium transition-colors`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="tab"
          transition={{ type: "spring", duration: 0.4 }}
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

export const Tabs = <T extends string[]>({
  tabs,
  defaultTab,
  tabContent,
}: TabsProps<T>) => {
  const [currentTab, setCurrentTab] = useQueryParams("tab", defaultTab);

  return (
    <>
      <div className="mb-8 flex flex-wrap items-center gap-2">
        {tabs.map((tab) => (
          <TabItem
            text={tab}
            selected={currentTab === tab}
            onSelect={setCurrentTab}
            key={tab}
          />
        ))}
      </div>

      <motion.div
        key={currentTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full rounded-lg"
      >
        {tabContent[currentTab]}
      </motion.div>
    </>
  );
};
