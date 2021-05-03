import React from "react";
import BlogLayout from "src/components/layouts/BlogLayout";
import { useRouter } from "next/router";

interface BlogPostProps {}

const undashenize = (x: string) => {
  if (x)
    return x
      .split("-")
      .map((c) => {
        const f = c[0].toUpperCase();
        return `${f}${c.substring(1)}`;
      })
      .join(" ");

  return "Loading...";
};

const BlogPost: React.FC<BlogPostProps> = () => {
  const route = useRouter();
  console.log(route.query.id);
  return (
    <BlogLayout seo={{ title: undashenize(route.query.id as string) }}>
      <div className="flex flex-col w-full pt-20">
        <h1 className="text-3xl font-bold text-center">
          {undashenize(route.query.id as string)}
        </h1>

        <p className="h-screen"></p>
      </div>
      <div className="h-24 md:h-32" />
    </BlogLayout>
  );
};

export default BlogPost;
