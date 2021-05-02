import React, { createContext, useEffect, useState } from "react";

interface Output {
  screen: Array<ScreenSize>;
  width: number;
}

export const ScreenContext = createContext<Output>({
  screen: [],
  width: 0,
});

type ScreenSize = "sm" | "md" | "lg" | "xl" | "2xl" | undefined;

export const ScreenProvider: React.FC = ({ children }) => {
  const [screen, setScreen] = useState<Array<ScreenSize>>([]);
  const [width, setWidth] = useState<number>(0);

  const handleResize = () => {
    const width = window.innerWidth;
    setWidth(width);

    if (width >= 1280) setScreen(() => ["2xl"]);
    else if (width >= 1024) setScreen(() => ["xl", "2xl"]);
    else if (width >= 758) setScreen(() => ["lg", "xl", "2xl"]);
    else if (width >= 640) setScreen(() => ["md", "lg", "xl", "2xl"]);
    else setScreen(() => ["sm"]);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ScreenContext.Provider value={{ screen, width }}>
      {children}
    </ScreenContext.Provider>
  );
};
