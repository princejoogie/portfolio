import React from "react";
import Jumbotron from "../components/home/jumbotron";
import Projects from "../components/home/projects";
import TechStack from "../components/home/tech-stack";
import Layout from "../components/layout";

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
