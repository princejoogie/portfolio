import React from "react";
import BlogLayout from "src/components/layouts/BlogLayout";
import cover from "../../src/assets/blog/a-little-more/cover.jpg";
import dp from "../../src/assets/blog/dp.jpg";

const Post: React.FC = () => {
  return (
    <BlogLayout seo={{ title: "A little more - Prince Carlo Juguilon" }}>
      <div className="flex flex-col w-full pt-16 lg:w-2/3">
        <p className="text-sm text-gray-400">May 3, 2021 4:24pm PST</p>

        <h1 className="mt-4 text-2xl font-bold md:text-3xl">
          A little bit more of who I am. My hobbies, education, sports, etc.
        </h1>

        <div className="flex items-center justify-start mt-8 space-x-2">
          <img
            src={dp}
            alt="author"
            className="w-16 h-16 border border-gray-700 rounded-full"
          />

          <div>
            <h4 className="text-sm">Prince Carlo Juguilon</h4>
            <p className="text-xs text-gray-400">Software Developer</p>
          </div>
        </div>

        <div className="w-full h-px my-8 bg-gray-700" />

        <img
          src={cover}
          className="object-cover w-full"
          alt="cover_photo"
          style={{ height: "450px" }}
        />

        <article className="flex flex-col mt-8 space-y-4 font-serif">
          <p className="font-serif">
            Yep, thats me. The person staring into the abyss.
          </p>
          <p className="font-serif">
            This blogs talks in depth more about my life, where I grew up,
            studied, the hobbies I do, the sports I play etc. Basically talking
            about not tech and coding stuff. Getting to know me in a personal
            level
          </p>
        </article>
      </div>

      <div className="flex flex-col w-full pt-16 lg:w-1/3">
        <div className="flex items-center justify-center">
          <p className="font-semibold uppercase">Read Next</p>
        </div>
      </div>
    </BlogLayout>
  );
};

export default Post;
