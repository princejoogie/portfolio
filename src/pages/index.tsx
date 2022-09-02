import React from "react";
import Jumbotron from "src/components/about/jumbotron";
import Layout from "src/components/layouts/layout";
import Projects from "src/components/projects/projects";
import TechStack from "src/components/about/tech-stack";

const index: React.FC = () => {
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

export default index;
