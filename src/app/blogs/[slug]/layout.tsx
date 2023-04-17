import type { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

const BlogItemLayout = ({ children }: RootLayoutProps) => {
  return <div className="prose-sm prose-invert">{children}</div>;
};

export default BlogItemLayout;
