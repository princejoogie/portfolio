import Link from "next/link";

export const Timeline = () => {
  const experiences = [
    {
      id: "1",
      title: "AI Engineer",
      date: "Sep 2025 - Present",
      company: "Vervio Digital",
      companyLink: "https://www.vervio.com.au",
      current: true,
    },
    {
      id: "2",
      title: "Senior Software Engineer",
      date: "May 2023 - 2025",
      company: "Focus Global Inc.",
      companyLink: "https://focusglobalinc.com",
      current: false,
    },
    {
      id: "3",
      title: "Software Engineer",
      date: "Oct 2022 - Dec 2022",
      company: "Whispir",
      companyLink: "https://whispir.com",
      current: false,
    },
    {
      id: "4",
      title: "Front End Developer",
      date: "Jul 2021 - Aug 2022",
      company: "Etica Digital",
      companyLink: "https://www.ideascience.com",
      current: false,
    },
    {
      id: "5",
      title: "Full Stack Developer",
      date: "Jan 2018 - May 2021",
      company: "Freelance",
      current: false,
    },
    {
      id: "6",
      title: "Full Stack Developer",
      date: "Oct 2018 - Oct 2019",
      company: "Chamaeleon",
      companyLink: "https://chamaeleon.io",
      current: false,
    },
  ];

  return (
    <div className="relative mt-4 flex flex-col pl-6">
      <div className="absolute top-0 left-2 h-full w-px bg-slate-200 dark:bg-slate-800"></div>{" "}
      {experiences.map((exp) => (
        <div key={exp.id} className="relative mb-6 flex items-start last:mb-0">
          <div
            className={`relative top-1.5 -left-[1.35rem] z-10 size-3 rounded-full ring-4 ring-background ${
              exp.current
                ? "bg-sky-600 dark:bg-sky-400"
                : "bg-slate-300 dark:bg-slate-700"
            }`}
          ></div>
          <div className="content -ml-2">
            <h3 className="title flex items-center text-foreground">
              {exp.title}{" "}
            </h3>
            <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
              {exp.companyLink ? (
                <Link
                  href={exp.companyLink}
                  className="transition-colors hover:text-foreground hover:underline"
                  target="_blank"
                  rel="noreferrer noopener"
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
