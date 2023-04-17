import { Jumbotron, Projects, TechStack } from "@/components/home";
import { getAllBlogsMeta } from "@/lib/mdx";

const HomePage = async () => {
  const blogs = await getAllBlogsMeta();
  return (
    <>
      <div id="about" className="pt-8 lg:pt-12" />
      <Jumbotron blogs={blogs} />
      <div className="h-14" />

      <TechStack />
      <div className="h-14" />

      <div id="projects" className="pt-4 lg:pt-12" />
      <Projects />
      <div className="h-14" />
    </>
  );
};

export default HomePage;
