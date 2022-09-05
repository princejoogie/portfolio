const NewJumbotron = () => {
  return (
    <div>
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold tracking-tight text-gray-300 lg:text-7xl">
          Prince Carlo Juguilon
        </h1>

        <p className="mt-2 font-sans font-semibold uppercase">
          DEVELOPER · TYPESCRIPT · NEOVIM · OSS
        </p>
      </div>

      <div className="flex items-center space-x-2">
        <button
          type="button"
          className="flex items-center justify-center space-x-2 rounded bg-green-600 px-4 py-2 text-white transition-colors duration-300 ease-out hover:bg-green-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <a
            // eslint-disable-next-line react/no-unknown-property
            download
            target="_blank"
            href="/assets/JUGUILON_PRINCE_RESUME.pdf"
            className="text-xs lg:text-base"
          >
            Contact
          </a>
        </button>

        <button
          type="button"
          className="flex items-center justify-center space-x-2 rounded bg-green-600 px-4 py-2 text-white transition-colors duration-300 ease-out hover:bg-green-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <a
            // eslint-disable-next-line react/no-unknown-property
            download
            target="_blank"
            href="/assets/JUGUILON_PRINCE_RESUME.pdf"
            className="text-xs lg:text-base"
          >
            Resume
          </a>
        </button>
      </div>

      <div className="mt-8">
        <span>Latest blog post</span>
      </div>
    </div>
  );
};

export default NewJumbotron;
