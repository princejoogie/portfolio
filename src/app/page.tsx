import type { Metadata } from "next";
import { Suspense } from "react";
import { Contact } from "@/components/home";
import { About } from "@/components/home/about";
import { Blogs } from "@/components/home/blogs";
import { Setup } from "@/components/home/setup";
import { Tabs } from "@/components/tabs";
import { getAllBlogsMeta } from "@/lib/mdx";
import { constants } from "@/lib/utils";

const homeTabs = ["About", "Blogs", "Setup", "Contact"] as const;

export const metadata: Metadata = {
  title: constants.defaultSeo.title,
  description: constants.defaultSeo.description,
};

type HomeProps = {
  searchParams: Promise<{
    tab?: string | string[];
  }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const [{ tab }, blogs] = await Promise.all([searchParams, getAllBlogsMeta()]);
  const requestedTab = Array.isArray(tab) ? tab[0] : tab;
  const defaultTab = homeTabs.includes(
    requestedTab as (typeof homeTabs)[number],
  )
    ? (requestedTab as (typeof homeTabs)[number])
    : "About";

  return (
    <Suspense fallback={null}>
      <Tabs
        tabs={homeTabs}
        defaultTab={defaultTab}
        tabContent={{
          About: <About />,
          Blogs: <Blogs blogs={blogs} />,
          Setup: <Setup />,
          Contact: <Contact />,
        }}
      />
    </Suspense>
  );
}
