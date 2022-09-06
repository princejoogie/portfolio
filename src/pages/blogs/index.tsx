import type { GetStaticProps } from "next";
import { Layout } from "@/components/layout";
import { type TBlogs, getBlogs } from "@/utils/helpers";
import { BlogItem } from "@/components/blogs";

const Blogs = ({ blogs }: TBlogs) => {
  return (
    <Layout>
      <h2 className="text-3xl font-bold tracking-tight text-gray-700 lg:text-6xl">
        Blogs.
      </h2>

      <div className="mt-4 grid grid-cols-2 gap-4">
        {blogs.map(({ frontMatter, slug }) => (
          <BlogItem
            key={slug}
            description={frontMatter.description}
            title={frontMatter.title}
            date={frontMatter.date}
            href={`/blogs/${slug}`}
          />
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<TBlogs> = async () => {
  return { props: { blogs: getBlogs() } };
};

export default Blogs;
