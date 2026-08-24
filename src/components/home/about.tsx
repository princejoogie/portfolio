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
      <div className="mt-12">
        <h2 className="text-lg">Experience</h2>
        <Timeline />
      </div>
    </div>
  );
};
