import Link from "next/link";
import { Contact } from "./contact";

export const Jumbotron = () => {
  return (
    <div>
      <div className="flex flex-col items-start">
        <h1 className="pb-8 text-4xl font-extrabold lg:text-7xl">
          Prince Carlo <br />
          <span>Juguilon</span>
        </h1>

        <Contact />
        {/* <p className="text-2xl font-bold">Developer × Neovim</p> */}
      </div>

      <div className="mt-12 flex w-full items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-gray-700 lg:text-6xl">
          Latest blog posts.
        </h2>

        <span>
          <Link href="/blogs">
            <a className="text-sm text-blue-500 transition-opacity hover:opacity-70">
              See more →
            </a>
          </Link>
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <Link key={i} href="">
              <a className="rounded-xl border-gray-800 p-6 hover:bg-gray-800 hover:bg-opacity-50">
                <span className="text-xs text-gray-500">September 5, 2022</span>

                <h4 className="my-2 text-2xl font-bold line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam
                </h4>

                <p className="text-sm text-gray-300 line-clamp-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam voluptas, quod, quia, voluptates quae voluptatibus
                  doloremque quos quibusdam quas nesciunt voluptatum. Quisquam
                </p>
              </a>
            </Link>
          ))}
      </div>
    </div>
  );
};
