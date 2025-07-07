import Link from "next/link";
import { BlogItem } from "@/components/blog-item";
import type { AllBlogsMeta } from "@/lib/mdx";
import BlurIn from "../magicui/blur-in";
import { FadeComponent } from "../magicui/fade-text";
import { Contact } from "./contact";

export type JumbotronProps = {
  blogs: AllBlogsMeta;
};

export const Jumbotron = ({ blogs }: JumbotronProps) => {
  return (
    <div>
      <div className="flex flex-col items-start">
        <div className="flex items-center gap-2">
          <BlurIn
            word="Prince"
            className="font-extrabold text-4xl md:text-5xl xl:text-7xl"
            delay={0}
          />
          <BlurIn
            word="Carlo"
            className="font-extrabold text-4xl md:text-5xl xl:text-7xl"
            delay={0.1}
          />
          <BlurIn
            word="Juguilon"
            className="font-extrabold text-4xl md:text-5xl xl:text-7xl"
            delay={0.2}
          />
        </div>

        <div className="mt-1 mb-6 ml-2 flex items-center gap-2">
          <BlurIn
            word="Senior"
            className="!font-mono !text-xl !font-normal text-gray-300"
            delay={0.6}
          />
          <BlurIn
            word="Software"
            className="!font-mono !text-xl !font-normal text-gray-300"
            delay={0.7}
          />
          <BlurIn
            word="Engineer."
            className="!font-mono !text-xl !font-normal text-gray-300"
            delay={0.8}
          />
          <BlurIn
            word="neovim"
            className="!font-mono !text-xl !font-normal text-gray-300"
            delay={3}
          />
          <BlurIn
            word="btw"
            className="!font-mono !text-xl !font-normal text-gray-300"
            delay={4.5}
          />
        </div>

        <Contact />
      </div>

      <div className="mt-12 flex w-full items-center justify-between">
        <BlurIn
          word="Blogs."
          className="font-bold text-3xl text-gray-500 tracking-tight lg:text-6xl"
        />

        <FadeComponent direction="right">
          <span>
            <Link href="/blogs" aria-label="Blogs page">
              <p className="text-blue-400 text-sm transition-opacity hover:opacity-70">
                See more →
              </p>
            </Link>
          </span>
        </FadeComponent>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {blogs.slice(0, 6).map(({ slug, description, title, date }, i) => (
          <FadeComponent
            key={slug}
            direction="down"
            framerProps={{ show: { transition: { delay: 0.5 + i * 0.1 } } }}
          >
            <BlogItem
              description={description ?? ""}
              title={title ?? ""}
              date={date ?? ""}
              href={`/blogs/${slug}`}
            />
          </FadeComponent>
        ))}
      </div>
    </div>
  );
};
