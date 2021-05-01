import React from "react";
import Jumbotron from "src/components/Jumbotron";
import NavBar from "src/components/NavBar";

const index: React.FC = () => {
  return (
    <div className="w-full h-screen overflow-y-scroll">
      {/* Content */}
      <div className="flex flex-col flex-1 w-full max-w-screen-xl mx-auto">
        <NavBar />
        <Jumbotron />
      </div>
    </div>
  );
};

export default index;
