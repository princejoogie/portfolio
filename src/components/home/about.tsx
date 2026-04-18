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
        I&apos;m Prince, a Senior Software Engineer building{" "}
        <strong>AI-powered product experiences</strong> and{" "}
        <strong>modern web applications</strong>. I work across frontend
        systems, developer tooling, and <strong>LLM-driven workflows</strong>,
        with recent experience building retail assistants, e-commerce platforms,
        and support automation tools. When I&apos;m not shipping products,
        you&apos;ll find me tweaking my Arch Linux setup, refining Neovim
        configs, or exploring better ways to build with open-source tools. Check
        out my{" "}
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
        <h3 className="text-lg">Experience</h3>
        <Timeline />
      </div>
    </div>
  );
};
