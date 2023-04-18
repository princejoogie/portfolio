import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

/* eslint-disable @next/next/no-img-element */
interface TechItemProps {
  title: string;
  icon: any;
}

const TechItem = ({ title, icon }: TechItemProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <img
            className="mr-6 flex h-16 w-16 items-center justify-center px-2 md:h-20 md:w-20"
            src={icon}
            alt={title}
          />
        </TooltipTrigger>
        <TooltipContent>{title}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export const TechStack = () => {
  return (
    <div className="flex w-full flex-col">
      <h2 className="text-3xl font-bold tracking-tight text-gray-700 lg:text-6xl">
        Technologies.
      </h2>

      <div className="mt-6 flex w-full flex-wrap">
        <TechItem title="React and React Native" icon="/assets/react.svg" />
        <TechItem title="Node.js" icon="/assets/nodejs-icon.svg" />
        <TechItem title="PostgreSQL" icon="/assets/postgresql.svg" />
        <TechItem title="GraphQL" icon="/assets/graphql.svg" />
        <TechItem title="Amazon Web Services" icon="/assets/aws.svg" />
        <TechItem title="Docker" icon="/assets/docker-icon.svg" />
        <TechItem title="Terraform" icon="/assets/terraform-icon.svg" />
        <TechItem title="Buildkite" icon="/assets/buildkite-icon.svg" />
        <TechItem title="Jira" icon="/assets/jira.svg" />
        <TechItem title="Figma" icon="/assets/figma.svg" />
        <TechItem title="Neovim" icon="/assets/neovim-icon.svg" />
        <TechItem title="Lua" icon="/assets/lua.svg" />
      </div>
    </div>
  );
};
