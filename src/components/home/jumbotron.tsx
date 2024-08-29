import Link from "next/link";
import { Contact } from "./contact";
import { BlogItem } from "@/components/blog-item";
import { type AllBlogsMeta } from "@/lib/mdx";

export interface JumbotronProps {
  blogs: AllBlogsMeta;
}

export const Jumbotron = ({ blogs }: JumbotronProps) => {
  return (
    <div>
      <div className="flex flex-col items-start">
        <h1 className="text-4xl font-extrabold md:text-5xl xl:text-7xl">
          Prince Carlo Juguilon
        </h1>
        <p className="mb-6 mt-1 font-mono text-xl text-gray-300">
          Software Engineer
        </p>

        <Contact />
      </div>

      <div className="mt-12 flex w-full items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-gray-500 lg:text-6xl">
          Latest blog posts.
        </h2>

        <span>
          <Link href="/blogs" aria-label="Blogs page">
            <p className="text-sm text-blue-400 transition-opacity hover:opacity-70">
              See more →
            </p>
          </Link>
        </span>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {blogs.slice(0, 6).map(({ slug, description, title, date }) => (
          <BlogItem
            key={slug}
            description={description ?? ""}
            title={title ?? ""}
            date={date ?? ""}
            href={`/blogs/${slug}`}
          />
        ))}
      </div>
    </div>
  );
};
