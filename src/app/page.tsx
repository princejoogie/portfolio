import { Suspense } from "react";
import { Contact } from "@/components/home";
import { About } from "@/components/home/about";
import { Blogs } from "@/components/home/blogs";
import { Setup } from "@/components/home/setup";
import { Tabs } from "@/components/tabs";
import { getAllBlogsMeta } from "@/lib/mdx";

export default async function Home() {
  const blogs = await getAllBlogsMeta();

  return (
    <Suspense fallback={null}>
      <Tabs
        tabs={["About", "Blogs", "Setup", "Contact", "Newsletter"] as const}
        defaultTab="About"
        tabContent={{
          About: <About blogs={blogs.slice(0, 2)} />,
          Blogs: <Blogs blogs={blogs} />,
          Setup: <Setup />,
          Contact: <Contact />,
          Newsletter: <div>Working on it, stay tuned!</div>,
        }}
      />
    </Suspense>
  );
}
