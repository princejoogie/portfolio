import Link from "next/link";
import { Contact } from "./contact";
import { BlogItem } from "@/components/blogs";

import { type TBlogs } from "@/utils/helpers";

export const Jumbotron = ({ blogs }: TBlogs) => {
  return (
    <div>
      <div className="flex flex-col items-start">
        <h1 className="pb-8 text-4xl font-extrabold lg:text-7xl">
          Prince Carlo <br />
          <span>Juguilon</span>
        </h1>

        <Contact />
        {/* <p className="text-2xl font-bold">Developer × Neovim</p> */}
      </div>

      <div className="mt-12 flex w-full items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-gray-700 lg:text-6xl">
          Latest blog posts.
        </h2>

        <span>
          <Link href="/blogs">
            <p className="text-sm text-blue-500 transition-opacity hover:opacity-70">
              See more →
            </p>
          </Link>
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        {blogs.slice(0, 6).map(({ frontMatter, slug }, i) => (
          <BlogItem
            key={slug}
            description={frontMatter.description}
            title={frontMatter.title}
            date={frontMatter.date}
            href={`/blogs/${slug}`}
          />
        ))}
      </div>
    </div>
  );
};
