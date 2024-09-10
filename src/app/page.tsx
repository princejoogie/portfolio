import { Contact } from "@/components/home";
import { About } from "@/components/home/about";
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
          tabs={["About", "Setup", "Blogs", "Contact", "Newsletter"] as const}
          defaultTab="About"
          tabContent={{
            About: <About blogs={blogs} />,
            Setup: <div>Setup.</div>,
            Blogs: <div>Blogs.</div>,
            Contact: <Contact />,
            Newsletter: <div>Working on it, stay tuned!</div>,
          }}
        />
      </Suspense>
    </div>
  );
}
