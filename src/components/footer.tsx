import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-6 bg-black px-4 py-12">
      <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-20">
        <Link
          href="/"
          className="focus:bg-gray-800 focus:outline-none"
          aria-label="Home page"
        >
          <p className="uppercase text-gray-400">About</p>
        </Link>

        <Link
          href="/#projects"
          className="focus:bg-gray-800 focus:outline-none"
          aria-label="Projects page"
        >
          <p className="uppercase text-gray-400">Projects</p>
        </Link>

        <Link
          href="/blogs"
          className="focus:bg-gray-800 focus:outline-none"
          aria-label="Blogs page"
        >
          <p className="uppercase text-gray-400">Blogs</p>
        </Link>
      </div>
      <p className="text-center font-semibold">
        Prince Carlo Juguilon © {new Date().getFullYear()} All Right Reserved
      </p>
    </div>
  );
};
