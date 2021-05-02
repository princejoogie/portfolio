import React from "react";
import Contact from "src/components/contact/Contact";
import Jumbotron from "src/components/about/Jumbotron";
import Projects from "src/components/projects/Projects";
import Layout from "src/components/Layout";
import TechStack from "src/components/about/TechStack";

const index: React.FC = () => {
  return (
    <Layout
      seo={{
        title: "Prince Carlo Juguilon",
        description:
          "A Software Developer based in the Philippines, React enthusiast, fond of creating interactive and responsive layouts for web and mobile applications.",
        twitter: {
          site: "https://princecaarlo.tech/",
          cardType: "summary_large_image",
          handle: "@princecaarlo",
        },
      }}
    >
      <div id="about" className="pt-8 lg:pt-12" />
      <Jumbotron />
      <TechStack />
      <div className="h-24 md:h-32" />

      <div id="projects" className="pt-8 lg:pt-12" />
      <Projects />
      <div className="h-24 md:h-32" />

      <div id="contact" className="pt-8 lg:pt-12" />
      <Contact />
    </Layout>
  );
};

export default index;
