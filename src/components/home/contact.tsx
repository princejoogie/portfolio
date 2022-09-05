export const Contact = () => {
  return (
    <div className="flex items-center space-x-2">
      <button
        type="button"
        className="flex items-center justify-center space-x-2 rounded bg-green-600 px-6 py-2 text-white transition-colors duration-300 ease-out hover:bg-green-700 focus:outline-none"
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
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>

        <a
          rel="noreferrer"
          target="_blank"
          href="mailto:princejoogie@gmail.com?subject=Hey%20There!&body=Hi%20Prince%2C%20I'm%20interested%20in%20working%20with%20you."
          className="text-xs lg:text-base"
        >
          Contact
        </a>
      </button>

      <button
        type="button"
        className="flex items-center justify-center space-x-2 rounded px-6 py-2 text-white transition-colors duration-300 ease-out hover:bg-gray-800 focus:outline-none"
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

        <a
          rel="noreferrer"
          target="_blank"
          href="/assets/JUGUILON_PRINCE_RESUME.pdf"
          className="text-xs lg:text-base"
        >
          Resume
        </a>
      </button>
    </div>
  );
};
