import Link from "next/link";
import { Timeline } from "@/components/timeline";
import { type AllBlogsMeta, formatBlogDate } from "@/lib/mdx";
import WordRotate from "../magicui/word-rotate";

type AboutProps = {
  blogs: AllBlogsMeta;
};

export const About = ({ blogs }: AboutProps) => {
  return (
    <div>
      <div className="flex items-center gap-2 text-2xl">
        <span>👋</span>
        <WordRotate
          words={[
            "Hi!",
            "Kamusta!",
            'console.log("Hello")',
            'echo "Hello"',
            'print("Hello")',
          ]}
        />
      </div>
      <p className="mt-2">
        I’m Prince, a passionate Senior Software Engineer with a knack for
        crafting innovative solutions and a love for clean, efficient code. My
        journey in software development has been fueled by a curiosity for
        technology and a desire to create impactful applications that enhance
        user experiences.
      </p>

      <div className="mt-12">
        <h3 className="text-lg">Projects</h3>
        <p className="mt-2">Working on it!</p>
      </div>

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
              <span className="w-20 flex-shrink-0 text-gray-500 text-xs leading-7">
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
