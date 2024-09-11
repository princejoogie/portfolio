import { Contact } from "@/components/home";
import { About } from "@/components/home/about";
import { Blogs } from "@/components/home/blogs";
import { Header } from "@/components/home/header";
import { Tabs } from "@/components/tabs";
import { getAllBlogsMeta } from "@/lib/mdx";
import { Suspense } from "react";

export default async function Home() {
  const blogs = await getAllBlogsMeta();

  return (
    <div className="mt-8">
      <Header />

      <hr className="my-8" />

      <Suspense fallback={null}>
        <Tabs
          tabs={["About", "Blogs", "Setup", "Contact", "Newsletter"] as const}
          defaultTab="About"
          tabContent={{
            /* for about, only include 3 blogs */
            About: <About blogs={blogs.slice(0, 2)} />,
            Blogs: <Blogs blogs={blogs} />,
            Setup: <div>Setup.</div>,
            Contact: <Contact />,
            Newsletter: <div>Working on it, stay tuned!</div>,
          }}
        />
      </Suspense>
    </div>
  );
}
