import React from "react";
import Link from "next/link";
import dp from "../../assets/blog/dp.jpg";

interface BlogItemProps {
  title: string;
}

const dashenize = (x: string) => {
  if (x) return x.trim().replaceAll(" ", "-").toLocaleLowerCase();

  return "Loading...";
};

const BlogItem: React.FC<BlogItemProps> = ({ title }) => {
  return (
    <Link href="/blog/[id]" as={`/blog/${dashenize(title)}`}>
      <a className="relative flex h-24 p-2 transition-all duration-300 ease-out transform rounded-md md:p-4 md:h-36 bg-red hover:bg-gray-800 focus:bg-gray-800">
        <div className="absolute inset-0 rounded-md shadow-xl opacity-50 bg-gradient-to-br from-startpoint via-green-900 to-startpoint"></div>

        <div className="z-10 flex space-x-2 md:space-x-4 group ">
          <div className="flex-shrink-0 w-20 h-20 md:w-28 md:h-28">
            <img src={dp} alt="" className="" />
          </div>

          <div className="w-full">
            <h1 className="text-base font-semibold md:text-lg lg:text-xl">
              {title}
            </h1>
            <p className="text-xs md:text-sm line-clamp-3 md:line-clamp-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              ad nostrum provident sint corporis, incidunt dolore illum
              quibusdam perspiciatis deserunt excepturi deleniti laborum
              possimus neque modi tenetur porro minus debitis praesentium
              reiciendis ipsum cum voluptatibus, quam delectus! Consectetur,
              iure quidem.
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BlogItem;
