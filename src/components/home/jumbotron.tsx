import Link from "next/link";
import { Contact } from "./contact";
import { BlogItem } from "@/components/blogs";
import { type AllBlogsMeta } from "@/lib/mdx";

export interface JumbotronProps {
  blogs: AllBlogsMeta;
}

export const Jumbotron = ({ blogs }: JumbotronProps) => {
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

      <div className="mt-4 grid gap-4 grid-cols-1 md:grid-cols-2">
        {blogs.slice(0, 6).map(({ slug, description, title, date }, i) => (
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
