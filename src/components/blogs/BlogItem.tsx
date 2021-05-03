import React from "react";
import Link from "next/link";
import dp from "../../assets/blog/dp.jpg";
import Tag, { TagProps } from "./Tag";

interface BlogItemProps {
  link: string;
  title: string;
  description: string;
  date: string;
  tags?: Array<TagProps>;
  image: string;
}

const BlogItem: React.FC<BlogItemProps> = ({
  image,
  link,
  title,
  description,
  tags,
  date,
}) => {
  return (
    <Link href={`/blog/${link}`}>
      <a className="relative flex flex-col transition-all duration-300 ease-out rounded-md bg-red hover:bg-gray-800 focus:bg-gray-800">
        <div className="absolute inset-0 rounded-md opacity-50 hover:shadow-2xl bg-gradient-to-tr from-startpoint via-green-900 to-startpoint"></div>

        <div className="z-10 flex flex-col">
          <img
            src={image}
            alt=""
            className="object-cover w-full h-40 md:h-52 rounded-t-md"
          />

          <div className="flex flex-col p-4 space-y-2">
            <div className="flex space-x-2">
              {tags && tags.map((tag) => <Tag {...tag} />)}
            </div>

            <h1 className="pt-4 font-semibold line-clamp-2">{title}</h1>

            <p className="text-xs text-gray-400 md:text-sm line-clamp-4">
              {description}
            </p>

            <p className="pt-4 text-xs font-semibold text-gray-400 uppercase">
              {date}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BlogItem;
