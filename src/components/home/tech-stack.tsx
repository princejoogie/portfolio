import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

interface TechItemProps {
  title: string;
  icon: any;
}

const TechItem = ({ title, icon }: TechItemProps) => {
  return (
    <Tippy content={title} placement="bottom">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="mr-6 flex h-16 w-16 items-center justify-center px-2 md:h-20 md:w-20"
        src={icon}
        alt={title}
      />
    </Tippy>
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
        <TechItem
          title="Google Cloud Platform"
          icon="/assets/google-cloud.svg"
        />
        <TechItem title="Docker" icon="/assets/docker-icon.svg" />
      </div>
    </div>
  );
};
