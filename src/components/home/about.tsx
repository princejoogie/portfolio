import Link from "next/link";

import { Timeline } from "@/components/timeline";
import { constants } from "@/lib/utils";

import WordRotate from "../magicui/word-rotate";

export const About = () => {
  return (
    <div>
      <div className="flex items-center text-2xl">
        <WordRotate
          leading="👋"
          words={[
            "Hi!",
            "Kamusta!",
            'console.log("Hello")',
            'echo "Hello"',
            ':echo "Hello"',
            'print("Hello")',
          ]}
        />
      </div>
      <p className="mt-2">
        I&apos;m Prince, a Senior Software Engineer working across AI,
        engineering, and automation, with recent experience building LLM-powered
        products, internal tools, and e-commerce platforms. Outside of work, I
        spend a lot of time refining my setup, improving my workflow, and
        exploring tools that make building feel faster and more intentional.
        Check out my{" "}
        <Link
          href={constants.socials.resume}
          target="_blank"
          rel="noreferrer noopener"
          className="underline"
        >
          resume
        </Link>
        .
      </p>
      <section className="mt-10">
        <h2 className="text-lg">What I do</h2>
        <ul className="mt-3 ml-6 list-disc space-y-2">
          <li>
            <span className="font-medium">AI product engineering</span>
            <span className="text-muted-foreground">
              {" "}
              - Assistants, evaluation systems, observability, retrieval, and
              reusable generation workflows.
            </span>
          </li>
          <li>
            <span className="font-medium">Commerce and platform work</span>
            <span className="text-muted-foreground">
              {" "}
              - Storefronts, internal operations, ERP integrations, and
              migrations from legacy platforms.
            </span>
          </li>
          <li>
            <span className="font-medium">Engineering enablement</span>
            <span className="text-muted-foreground">
              {" "}
              - Architecture, automation, developer tooling, delivery workflows,
              and mentoring.
            </span>
          </li>
        </ul>
      </section>
      <section className="mt-10">
        <h2 className="text-lg">Working together</h2>
        <p className="mt-2 text-muted-foreground">
          I currently work full-time at Vervio Digital. I welcome enquiries
          about senior AI or software engineering roles, consulting, and focused
          product collaborations; availability depends on the scope. See my{" "}
          <Link className="underline" href="/projects">
            selected projects
          </Link>{" "}
          or use the{" "}
          <Link className="underline" href="/contact">
            contact page
          </Link>{" "}
          to start a conversation.
        </p>
      </section>
      <div className="mt-12">
        <h2 className="text-lg">Experience</h2>
        <Timeline />
      </div>
    </div>
  );
};
