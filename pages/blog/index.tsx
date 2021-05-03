import React from "react";
import BlogItem from "src/components/blogs/BlogItem";
import Layout from "src/components/layouts/Layout";

const blogs: React.FC = () => {
  return (
    <Layout
      seo={{
        title: "Blog - Prince Carlo",
        description:
          "In-depth explanation of the technologies I use in my projects.",
      }}
    >
      <div className="flex flex-col w-full">
        <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-300 lg:text-6xl">
          Blogs.
        </h1>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {Array(15)
            .fill(0)
            .map((_, i) => (
              <BlogItem key={`blog${i}`} title={`Blog Title ${i}`} />
            ))}
        </div>
        <div className="h-24 md:h-32" />
      </div>
    </Layout>
  );
};

export default blogs;
