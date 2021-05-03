import React from "react";

export interface TagProps {
  tag: string;
  classes?: string;
}

const Tag: React.FC<TagProps> = ({
  tag,
  classes = " bg-red-400 text-gray-800 ",
}) => {
  return (
    <div className="relative px-3 py-1 text-xs capitalize rounded-2xl">
      <div
        className={`absolute rounded-2xl inset-0 ${classes} opacity-20 hover:opacity-30`}
      />
      <p className="z-10 flex">{tag}</p>
    </div>
  );
};

export default Tag;
