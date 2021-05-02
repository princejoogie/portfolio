import React from "react";
import Contact from "src/components/Contact";
import Jumbotron from "src/components/Jumbotron";
import NavBar from "src/components/NavBar";
import Projects from "src/components/Projects";

const index: React.FC = () => {
  return (
    <div className="w-full h-screen overflow-y-scroll">
      {/* Content */}

      <div className="flex flex-col flex-1 w-full max-w-screen-xl mx-auto">
        <div id="about" />

        <NavBar />
        <div className="pt-12" />
        <Jumbotron />

        <div id="projects" className="pt-12" />
        <Projects />

        <div id="contact" className="pt-12" />
        <Contact />
      </div>
    </div>
  );
};

export default index;
