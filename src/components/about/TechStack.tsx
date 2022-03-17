import React from "react";

interface TechItemProps {
  title: string;
  icon: any;
  i: number;
}

const TechItem: React.FC<TechItemProps> = ({ title, icon, i }) => {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-delay={`${i * 50}`}
      className="flex h-32 w-32 flex-col items-center"
    >
      <img
        className="flex h-16 w-16 items-center justify-center md:h-20 md:w-20"
        src={icon}
        alt={title}
      />
      <p className="mt-2 text-center text-sm text-gray-400">{title}</p>
    </div>
  );
};

const TechStack: React.FC = () => {
  return (
    <div className="flex w-full flex-col pt-8">
      <h1
        data-aos="fade-right"
        data-aos-delay={`${2 * 50}`}
        className="text-center text-2xl font-bold uppercase tracking-widest text-gray-300 md:text-3xl lg:text-4xl"
      >
        Tech Stacks
      </h1>

      <p
        data-aos="zoom-in-up"
        data-aos-delay={`${1 * 50}`}
        className="mx-auto mt-4 w-full text-center text-gray-400 md:w-2/3 lg:w-1/2"
      >
        These are the technologies I am comfortable with and often use for my
        projects. I continually learn and explore different technologies and
        tech stacks.
      </p>

      <div className="mt-8">
        <h3 data-aos="fade-right" className="text-center text-lg font-bold">
          Full-Stack Javascript
        </h3>

        <div className="mt-6 flex w-full flex-col items-center justify-center md:flex-row md:space-x-4">
          <div className="flex space-x-4">
            <TechItem
              i={3}
              title="React and React Native"
              icon="/assets/react.svg"
            />
            <TechItem i={4} title="Node.js" icon="/assets/nodejs-icon.svg" />
          </div>

          <div className="mt-4 flex space-x-4 md:mt-0">
            <TechItem i={5} title="PostgreSQL" icon="/assets/postgresql.svg" />
            <TechItem i={6} title="GraphQL" icon="/assets/graphql.svg" />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 data-aos="fade-right" className="text-center text-lg font-bold">
          Micro-Services Architechture
        </h3>

        <div className="mt-6 flex w-full items-center justify-center space-x-4">
          <TechItem i={3} title="Amazon Web Services" icon="/assets/aws.svg" />
          <TechItem
            i={4}
            title="Google Cloud Platform"
            icon="/assets/google-cloud.svg"
          />
          <TechItem i={5} title="Docker" icon="/assets/docker-icon.svg" />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
