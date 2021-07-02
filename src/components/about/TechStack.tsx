import React from "react";
import {
  awsIcon,
  dockerIcon,
  firebaseIcon,
  gcpIcon,
  graphqlIcon,
  nodejsIcon,
  reactIcon,
} from "src/assets/svgs";
interface TechItemProps {
  title: string;
  icon: any;
  i: number;
}

const TechItem: React.FC<TechItemProps> = ({ title, icon: Icon, i }) => {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-delay={`${i * 50}`}
      className="flex flex-col items-center w-32 h-32"
    >
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
        <h3 data-aos="fade-right" className="text-lg font-bold text-center">
          Full-Stack Javascript
        </h3>

        <div className="flex flex-col items-center justify-center w-full mt-6 md:space-x-4 md:flex-row">
          <div className="flex space-x-4">
            <TechItem i={3} title="React and React Native" icon={reactIcon} />
            <TechItem i={4} title="Node.js" icon={nodejsIcon} />
          </div>

          <div className="flex mt-4 space-x-4 md:mt-0">
            <TechItem i={5} title="Firebase" icon={firebaseIcon} />
            <TechItem i={6} title="GraphQL" icon={graphqlIcon} />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 data-aos="fade-right" className="text-lg font-bold text-center">
          Micro-Services Architechture
        </h3>

        <div className="flex items-center justify-center w-full mt-6 space-x-4">
          <TechItem i={3} title="Amazon Web Services" icon={awsIcon} />
          <TechItem i={4} title="Google Cloud Platform" icon={gcpIcon} />
          <TechItem i={5} title="Docker" icon={dockerIcon} />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
