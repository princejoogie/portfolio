import { Jumbotron, Projects, TechStack } from "@/components/home";
import { getBlogs } from "@/utils/helpers";

const HomePage = () => {
  const blogs = getBlogs();
  return (
    <>
      <p>Home Page</p>
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
