import { Layout } from "@/components/layout";
import { Projects, TechStack, Jumbotron } from "@/components/home";

const Index = () => {
  return (
    <Layout>
      <div id="about" className="pt-8 lg:pt-12" />
      <Jumbotron />
      <div className="h-14" />

      <TechStack />
      <div className="h-14" />

      <div id="projects" className="pt-4 lg:pt-12" />
      <Projects />
      <div className="h-14" />
    </Layout>
  );
};

export default Index;
