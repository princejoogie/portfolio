import { ArrowRightIcon } from "lucide-react";
import AnimatedShinyText from "../magicui/animated-shiny-text";
import { cn } from "@/lib/utils";
import { FadeComponent } from "../magicui/fade-text";

const mailTo =
  "mailto:princejoogie@gmail.com?subject=Hey%20There!&body=Hi%20Prince%2C%20I'm%20interested%20in%20working%20with%20you.";

export const Contact = () => {
  return (
    <div className="flex items-center space-x-2">
      <FadeComponent
        direction="down"
        framerProps={{
          show: { transition: { delay: 1 } },
        }}
      >
        <a rel="noreferrer" target="_blank" href={mailTo} aria-label="Email me">
          <div
            className={cn(
              "group rounded-full border border-black/5 text-base text-white transition-all ease-in hover:cursor-pointer dark:border-white/5 dark:bg-green-800 dark:hover:bg-green-900"
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 text-white transition ease-out hover:duration-300 hover:dark:text-white">
              <span>
                ☎ <span className="mx-2 font-mono">Contact me</span>
              </span>
              <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </a>
      </FadeComponent>

      <FadeComponent
        direction="down"
        framerProps={{
          show: { transition: { delay: 1.2 } },
        }}
      >
        <a
          rel="noreferrer"
          target="_blank"
          href="/assets/JUGUILON_PRINCE_RESUME.pdf"
          className="flex items-center justify-center space-x-2 rounded-full px-6 py-2 text-white transition-colors duration-300 ease-out hover:bg-gray-800 focus:outline-none"
          aria-label="View my resume"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
            />
          </svg>

          <p className="text-xs lg:text-base">Resume</p>
        </a>
      </FadeComponent>
    </div>
  );
};
