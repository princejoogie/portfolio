import React from "react";

interface BlogProps {}

const Blog: React.FC<BlogProps> = () => {
  return <div>Main Blog</div>;
};

interface BlogProps {}

export const Heading: React.FC<BlogProps> = () => {
  return <div>Heading</div>;
};

export default Blog;
