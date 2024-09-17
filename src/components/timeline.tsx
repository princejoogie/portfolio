import Link from "next/link";

export const Timeline = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      date: "2023-Present",
      company: "Focus Global Inc.",
      companyLink: "https://focusglobalinc.com",
      current: true,
    },
    {
      title: "Software Engineer",
      date: "2022-2022",
      company: "Whispir",
      companyLink: "https://whispir.com",
      current: false,
    },
    {
      title: "Frontend Software Engineer",
      date: "2021-2022",
      company: "Etica Digital",
      companyLink: "https://www.ideascience.com",
      current: false,
    },
    {
      title: "Software Engineer",
      date: "2018-2021",
      company: "Freelance",
      current: false,
    },
  ];

  return (
    <div className="relative mt-4 flex flex-col pl-6">
      <div className="absolute left-2 top-0 h-full w-px bg-gray-800"></div>{" "}
      {experiences.map((exp, index) => (
        <div key={index} className="relative mb-6 flex items-start last:mb-0">
          <div
            className={`relative -left-[1.35rem] top-1.5 z-10 h-3 w-3 rounded-full ${
              exp.current ? "bg-blue-500" : "bg-gray-800"
            }`}
          ></div>
          <div className="content -ml-2">
            <h3 className="title flex items-center">{exp.title} </h3>
            <div className="flex items-center text-sm text-gray-500">
              {exp.companyLink ? (
                <Link
                  href={exp.companyLink}
                  className="hover:underline"
                  target="_blank"
                >
                  <p>{exp.company}</p>
                </Link>
              ) : (
                <p>{exp.company}</p>
              )}
              <p>&nbsp;-&nbsp;{exp.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
