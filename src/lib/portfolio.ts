import { getAllBlogsMeta } from "@/lib/mdx";
import { constants, getBaseUrl } from "@/lib/utils";
import resume from "../../resume/resume.json";

export const getProfile = () => ({
  name: "Prince Carlo Juguilon",
  role: "Senior Software Engineer",
  description: constants.defaultSeo.description,
  links: {
    github: constants.socials.github,
    linkedin: constants.socials.linkedin,
    resume: new URL(constants.socials.resume, getBaseUrl()).toString(),
    x: constants.socials.twitter,
  },
});

export const getResume = () => ({
  ...resume,
  pdfUrl: new URL(
    "/assets/JUGUILON_PRINCE_CARLO_RESUME.pdf",
    getBaseUrl(),
  ).toString(),
});

export const getProjects = (includeArchived = false) =>
  constants.projects
    .filter((project) => includeArchived || project.enabled)
    .map(
      ({
        date,
        description,
        enabled,
        github,
        href,
        icon,
        src,
        subtitle,
        title,
      }) => ({
        description,
        icon: new URL(icon, getBaseUrl()).toString(),
        image: new URL(src, getBaseUrl()).toString(),
        period: date,
        repository: github,
        status: enabled ? ("active" as const) : ("archived" as const),
        title,
        type: subtitle,
        url: href,
      }),
    );

export const getBlogPosts = async () => {
  const posts = await getAllBlogsMeta();

  return posts.map(({ date, description, slug, title }) => ({
    date: new Date(date ?? "").toISOString().slice(0, 10),
    description: description ?? "",
    slug,
    title: title ?? slug,
    url: new URL(`/blog/${slug}`, getBaseUrl()).toString(),
  }));
};
