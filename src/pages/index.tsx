import { Layout } from "@/components/layout";
import type { GetStaticProps } from "next";

import { Projects, TechStack, Jumbotron } from "@/components/home";
import { getBlogs } from "@/utils/helpers";

interface GSP {
  blogs: ReturnType<typeof getBlogs>;
}

const Index = ({ blogs }: GSP) => {
  return (
    <Layout>
      <div id="about" className="pt-8 lg:pt-12" />
      <Jumbotron blogs={blogs} />
      <div className="h-14" />

      <TechStack />
      <div className="h-14" />

      <div id="projects" className="pt-4 lg:pt-12" />
      <Projects />
      <div className="h-14" />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<GSP> = async () => {
  return { props: { blogs: getBlogs() } };
};

export default Index;
