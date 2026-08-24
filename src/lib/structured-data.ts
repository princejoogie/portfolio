import { constants, getBaseUrl } from "@/lib/utils";

const getUrl = (path: string) => new URL(path, getBaseUrl()).toString();

export const getPersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${getBaseUrl()}/#person`,
  name: "Prince Carlo Juguilon",
  alternateName: "Prince Juguilon",
  url: getBaseUrl(),
  image: getUrl("/portraits/prince-center.webp"),
  jobTitle: ["AI Engineer", "Senior Software Engineer"],
  description: constants.defaultSeo.description,
  email: "mailto:princejoogie@gmail.com",
  homeLocation: {
    "@type": "Place",
    name: "Taguig City, Philippines",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Taguig City",
      addressCountry: "PH",
    },
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Asia Pacific College",
  },
  knowsAbout: [
    "Artificial intelligence",
    "Software engineering",
    "Web development",
    "Next.js",
    "React",
    "TypeScript",
    "Model Context Protocol",
  ],
  sameAs: [
    constants.socials.github,
    constants.socials.linkedin,
    constants.socials.twitter,
  ],
});

export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${getBaseUrl()}/#website`,
  name: "Prince Carlo Juguilon Portfolio",
  alternateName: "Prince Juguilon Portfolio",
  description: constants.defaultSeo.description,
  url: getBaseUrl(),
  author: { "@id": `${getBaseUrl()}/#person` },
  inLanguage: "en",
});

export const getProfilePageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${getUrl("/about")}#profile-page`,
  name: "Prince Carlo Juguilon - Senior Software Engineer",
  description: constants.defaultSeo.description,
  url: getUrl("/about"),
  mainEntity: { "@id": `${getBaseUrl()}/#person` },
  isPartOf: { "@id": `${getBaseUrl()}/#website` },
  inLanguage: "en",
});

export const getBreadcrumbSchema = (
  items: { name: string; path: string }[],
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: getUrl(item.path),
  })),
});
