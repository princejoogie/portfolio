import Link from "next/link";
import { Contact } from "./contact";
import { BlogItem } from "@/components/blog-item";
import { type AllBlogsMeta } from "@/lib/mdx";
import BlurIn from "../magicui/blur-in";
import { FadeComponent } from "../magicui/fade-text";

export interface JumbotronProps {
  blogs: AllBlogsMeta;
}

export const Jumbotron = ({ blogs }: JumbotronProps) => {
  return (
    <div>
      <div className="flex min-h-[35dvh] flex-col items-start">
        <div className="flex items-center gap-2">
          <BlurIn
            word="Prince"
            className="text-4xl font-extrabold md:text-5xl xl:text-7xl"
            delay={0}
          />
          <BlurIn
            word="Carlo"
            className="text-4xl font-extrabold md:text-5xl xl:text-7xl"
            delay={0.1}
          />
          <BlurIn
            word="Juguilon"
            className="text-4xl font-extrabold md:text-5xl xl:text-7xl"
            delay={0.2}
          />
        </div>

        <div className="mb-6 ml-2 mt-1 flex items-center gap-2">
          <BlurIn
            word="Software"
            className="!font-mono !text-xl !font-normal text-gray-300"
            delay={0.5}
          />
          <BlurIn
            word="Engineer."
            className="!font-mono !text-xl !font-normal text-gray-300"
            delay={0.6}
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
          word="Latest blog posts."
          className="text-3xl font-bold tracking-tight text-gray-500 lg:text-6xl"
        />

        <FadeComponent direction="right">
          <span>
            <Link href="/blogs" aria-label="Blogs page">
              <p className="text-sm text-blue-400 transition-opacity hover:opacity-70">
                See more →
              </p>
            </Link>
          </span>
        </FadeComponent>
      </div>

      <div className="mt-4 grid min-h-[35dvh] grid-cols-1 gap-4 md:grid-cols-2">
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
