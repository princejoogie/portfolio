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
        <h1>Blogs</h1>
        <p>Coming soon.</p>
      </div>
    </Layout>
  );
};

export default blogs;
