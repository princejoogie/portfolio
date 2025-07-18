import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  }
  return "http://localhost:3000";
};

export const createSearchParams = (
  baseUrl: string,
  params: Record<string, string | undefined | null>,
) => {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value) searchParams.set(key, value);
  });

  return `${baseUrl}?${searchParams.toString()}`;
};

export const constants = {
  socials: {
    github: "https://github.com/princejoogie",
    linkedin: "https://www.linkedin.com/in/princejoogie",
    instagram: "https://www.instagram.com/princecaarlo",
    twitter: "https://twitter.com/princecaarlo",
    blog: "https://blog.princecaarlo.tech",
  },

  defaultSeo: {
    title: "Prince Carlo Juguilon",
    description:
      "A passionate Senior Software Engineer with a knack for crafting innovative solutions and a love for clean, efficient code. My journey in software development has been fueled by a curiosity for technology and a desire to create impactful applications that enhance user experiences.",
  },

  projects: [
    {
      enabled: true,
      icon: "/assets/logos/typescript.svg",
      src: "/assets/projects/chunktube.png",
      title: "ChunkTube",
      subtitle: "Web Application",
      description:
        "An AI-driven platform that summarizes YouTube videos in 5-minute segments.",
      href: "https://chunktube.tech/",
      github: "https://github.com/princejoogie/chunktube",
      date: "2023 - Present",
    },
    {
      enabled: true,
      icon: "/assets/logos/typescript.svg",
      src: "/assets/projects/umamin.png",
      title: "Umamin",
      subtitle: "Web Application",
      description:
        "An open-source platform for sending and receiving anonymous messages.",
      href: "https://umamin.link/",
      github: "https://github.com/omsimos/umamin",
      date: "2022 - Present",
    },
    {
      enabled: true,
      icon: "/assets/logos/typescript.svg",
      src: "/assets/projects/quickie-washie.png",
      title: "Quickie Washie",
      subtitle: "Mobile Application",
      description:
        "A cross-platform mobile app for all-in-one car service booking and management.",
      github: "https://github.com/qwashie/quickie-washie-v2",
      date: "2022 - 2022",
    },
    {
      enabled: false,
      icon: "/assets/logos/typescript.svg",
      src: "/assets/projects/paymongo.png",
      title: "Paymongo.js",
      subtitle: "Javascript Library",
      description:
        "A lightweight, fully-featured, modular, typescript-compatible javascript library for PayMongo.",
      href: null,
      github: "https://github.com/princejoogie/paymongo.js",
      date: "2021 - 2022",
    },
    {
      enabled: false,
      icon: "/assets/logos/typescript.svg",
      src: "/assets/projects/groundwork.png",
      title: "GroundWork PH",
      subtitle: "Web Application",
      description:
        "An online B2B platform designed to create and gather networks for business establishments in the Philippines!",
      href: "https://shop.groundworkph.com/",
      github: null,
      date: "2021 - 2021",
    },
    {
      enabled: false,
      icon: "/assets/logos/typescript.svg",
      src: "/assets/projects/genesis.png",
      title: "Genesis",
      subtitle: "Mobile Application",
      description:
        "A Mobile application that can detect different types of Dog ticks and provide vivid descriptions about them. This is created with react-native and python and applies transfer & continuous learning to further improve the accuracy.",
      href: null,
      github: "https://github.com/princejoogie/genesis-rn",
      date: "2020 - 2021",
    },
    {
      enabled: false,
      icon: "/assets/logos/typescript.svg",
      src: "/assets/projects/jookey.png",
      title: "Jookey",
      subtitle: "Web & Mobile Application",
      description:
        "A Fully encrypted Password Keeper app designed in React Native to keep track of your account passwords.",
      href: null,
      github: "https://github.com/princejoogie/jookey",
      date: "2020 - 2021",
    },
    {
      enabled: false,
      icon: "/assets/logos/typescript.svg",
      src: "/assets/projects/joog_uno.png",
      title: "Joog Uno",
      subtitle: "Web Application",
      description:
        "A free, fast, and customizable URL shortener created with React JS and tailwindcss.",
      href: "https://joog.uno/",
      github: "https://github.com/princejoogie/joog-uno",
      date: "2020 - 2021",
    },
    {
      enabled: false,
      icon: "/assets/logos/javascript.svg",
      src: "/assets/projects/pythagoras.png",
      title: "Pythagoras",
      subtitle: "Web Application",
      description:
        "A commissioned build for Pythagoras Coffee & Tea, an Ecommerce website that aims to provide their products online created with NextJS.",
      href: "https://pythagoras.netlify.app/",
      github: "https://github.com/princejoogie/pythagoras",
      date: "Oct 11, 2020",
    },
    {
      enabled: false,
      icon: "/assets/logos/javascript.svg",
      src: "/assets/projects/chamaeleon.png",
      title: "Chamaeleon",
      subtitle: "Web Application",
      description:
        "A commissioned build for a Startup IT Company, Chamaeleon Software, as their companies' website landing page and showcase of their products.",
      href: "https://chamaeleon.io/",
      github: "https://github.com/princejoogie/chamaeleon",
      date: "Sep 07, 2020",
    },
    {
      enabled: false,
      icon: "/assets/logos/java.svg",
      src: "/assets/projects/uApp.png",
      title: "uApp",
      subtitle: "Mobile Application",
      description:
        "Provides an interface that eases the process of recording fouls, violations, referees that called them and all other basketball related topics. It also provides excel data of the summary of reports",
      href: null,
      github: "https://github.com/princejoogie/uaap_app",
      date: "Oct 7, 2019",
    },
  ],
};
