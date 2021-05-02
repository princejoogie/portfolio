import React from "react";
import Contact from "src/components/Contact";
import Jumbotron from "src/components/Jumbotron";
import Projects from "src/components/Projects";
import Layout from "src/components/Layout";

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

      <div id="projects" className="pt-8 lg:pt-12" />
      <Projects />

      <div id="contact" className="pt-8 lg:pt-12" />
      <Contact />
    </Layout>
  );
};

export default index;
