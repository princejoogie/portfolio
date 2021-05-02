import React from "react";
import NavBar from "src/components/NavBar";

const blogs: React.FC = () => {
  return (
    <div className="w-full h-screen overflow-y-scroll">
      {/* Content */}

      <div className="flex flex-col flex-1 w-full max-w-screen-xl mx-auto">
        <NavBar />

        <div>BLOGS</div>
        <p>Coming soon.</p>
      </div>
    </div>
  );
};

export default blogs;
