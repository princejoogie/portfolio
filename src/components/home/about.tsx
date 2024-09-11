import { AllBlogsMeta, formatBlogDate } from "@/lib/mdx";
import Link from "next/link";
import { Timeline } from "@/components/timeline";

type AboutProps = {
  blogs: AllBlogsMeta;
};

export const About = ({ blogs }: AboutProps) => {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div className="mt-12">
        <h3 className="text-lg">Experience</h3>
        <Timeline />
      </div>

      <div className="mt-12">
        <h3 className="text-lg">Latest Blogs</h3>
        <div className="py-2">
          {blogs.map((blog) => (
            <Link
              className="group flex items-start justify-start gap-2 px-2 py-1"
              href={`/blog/${blog.slug}`}
              key={blog.slug}
            >
              <span className="w-20 flex-shrink-0 text-xs leading-7 text-gray-500">
                {formatBlogDate(blog.date ?? "")}
              </span>
              <span className="text-lg group-hover:underline">
                {blog.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
