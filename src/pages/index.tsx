import React from "react";
import Contact from "src/components/contact/contact";
import Jumbotron from "src/components/about/jumbotron";
import Layout from "src/components/layouts/layout";
import Projects from "src/components/projects/projects";
import TechStack from "src/components/about/tech-stack";

const index: React.FC = () => {
  return (
    <Layout
      seo={{
        title: "Prince Juguilon | Software Engineer",
        description:
          "A Software Engineer based in the Philippines, React enthusiast, fond of creating interactive and responsive layouts for web and mobile applications.",
        twitter: {
          site: "https://princecaarlo.tech/",
          cardType: "summary_large_image",
          handle: "@princecaarlo",
        },
      }}
    >
      <div id="about" className="pt-8 lg:pt-12" />
      <Jumbotron />
      <div className="h-14" />

      <TechStack />
      <div className="h-14" />

      <div id="projects" className="pt-4 lg:pt-12" />
      <Projects />
      <div className="h-14" />

      <div id="contact" className="pt-4 lg:pt-12" />
      <Contact />
    </Layout>
  );
};

export default index;
