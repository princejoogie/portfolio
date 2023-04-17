import type { Metadata } from "next";
import { BlogItem } from "@/components/blog-item";
import { getAllBlogsMeta } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "A Software Engineer based in the Philippines, React enthusiast, fond of creating interactive and responsive layouts for web and mobile applications.",
};

const BlogPage = async () => {
  const blogs = await getAllBlogsMeta();
  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight text-gray-700 lg:text-6xl">
        Blogs.
      </h2>

      <div className="mt-4 grid gap-4 grid-cols-1 md:grid-cols-2">
        {blogs.map(({ slug, description, title, date }) => (
          <BlogItem
            key={slug}
            description={description ?? ""}
            title={title ?? ""}
            date={date ?? ""}
            href={`/blogs/${slug}`}
          />
        ))}
      </div>
    </>
  );
};

export default BlogPage;
