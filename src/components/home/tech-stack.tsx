import BlurIn from "../magicui/blur-in";
import IconCloud from "../magicui/icon-cloud";

const slugs = [
  "linear",
  "react",
  "nodedotjs",
  "postgresql",
  "graphql",
  "amazonaws",
  "docker",
  "terraform",
  "buildkite",
  "jira",
  "figma",
  "neovim",
  "lua",
  "sst",
  "prisma",
  "typescript",
  "git",
  "github",
  "vercel",
];

export const TechStack = () => {
  return (
    <div className="flex w-full flex-col">
      <BlurIn
        word="Technologies."
        className="!text-left text-3xl font-bold tracking-tight text-gray-500 lg:text-6xl"
      />
      <div className="relative mx-auto flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden">
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  );
};
