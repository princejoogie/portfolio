import React from "react";
import FirebaseIcon from "../../assets/tech-stack/firebase.svg";
import GraphqlIcon from "../../assets/tech-stack/graphql.svg";
import NodejsIcon from "../../assets/tech-stack/node-js.svg";
import ReactIcon from "../../assets/tech-stack/react.svg";

import DockerIcon from "../../assets/tech-stack/docker.svg";
import GcpIcon from "../../assets/tech-stack/gcp.svg";
import AwsIcon from "../../assets/tech-stack/aws.svg";

interface TechItemProps {
  title: string;
  icon: React.FC;
}

const TechItem: React.FC<TechItemProps> = ({ title, icon: Icon }) => {
  return (
    <div className="flex flex-col items-center w-32 h-32">
      <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20">
        <Icon />
      </div>
      <p className="mt-2 text-sm text-center text-gray-400">{title}</p>
    </div>
  );
};

const TechStack: React.FC = () => {
  return (
    <div className="flex flex-col w-full pt-8">
      <h1 className="text-2xl font-bold tracking-widest text-center text-gray-300 uppercase md:text-3xl lg:text-4xl">
        Tech Stacks
      </h1>

      <p className="w-full mx-auto mt-4 text-center text-gray-400 md:w-2/3 lg:w-1/2">
        These are the technologies I am comfortable with and often use for my
        projects. I continually learn and explore different technologies and
        tech stacks.
      </p>

      <div className="mt-8">
        <h3 className="text-lg font-bold text-center">Full-Stack Javascript</h3>

        <div className="flex flex-col items-center justify-center w-full mt-6 md:space-x-4 md:flex-row">
          <div className="flex space-x-4">
            <TechItem title="React and React Native" icon={ReactIcon} />
            <TechItem title="Node.js" icon={NodejsIcon} />
          </div>

          <div className="flex mt-4 space-x-4 md:mt-0">
            <TechItem title="Firebase" icon={FirebaseIcon} />
            <TechItem title="GraphQL" icon={GraphqlIcon} />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-bold text-center">
          Micro-Services Architechture
        </h3>

        <div className="flex items-center justify-center w-full mt-6 space-x-4">
          <TechItem title="Amazon Web Services" icon={AwsIcon} />
          <TechItem title="Google Cloud Platform" icon={GcpIcon} />
          <TechItem title="Docker" icon={DockerIcon} />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
