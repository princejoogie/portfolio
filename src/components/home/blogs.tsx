import Link from "next/link";
import { type AllBlogsMeta, formatBlogDate } from "@/lib/mdx";

type AboutProps = {
  blogs: AllBlogsMeta;
};

export const Blogs = ({ blogs }: AboutProps) => {
  return (
    <div>
      {blogs.map((blog) => (
        <Link
          className="group flex items-start justify-start gap-2 px-2 py-1"
          href={`/blog/${blog.slug}`}
          key={blog.slug}
        >
          <span className="w-20 flex-shrink-0 text-gray-500 text-xs leading-7">
            {formatBlogDate(blog.date ?? "")}
          </span>
          <span className="text-lg group-hover:underline">{blog.title}</span>
        </Link>
      ))}
    </div>
  );
};
