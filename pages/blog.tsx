import React from "react";
import Layout from "src/components/Layout";

const blogs: React.FC = () => {
  return (
    <Layout
      seo={{
        title: "Blog - Prince Carlo",
        description:
          "In-depth explanation and technologies used in the projects.",
      }}
    >
      <div className="flex flex-col w-full h-screen">
        <h1 className="text-3xl font-bold tracking-tight text-gray-300 lg:text-6xl">
          Blogs.
        </h1>

        <div>
          <h2 className="text-gray-400">Coming soon.</h2>
        </div>
      </div>
    </Layout>
  );
};

export default blogs;
