import Link from "next/link";

export const Setup = () => {
  return (
    <div>
      <h3 className="text-xl">OS & Environment</h3>
      <ul className="ml-6 list-disc">
        <li className="my-2">
          Arch Linux
          <span className="text-neutral-400">{" - Rolling release, btw"}</span>
        </li>
        <li className="my-2">
          Hyprland
          <span className="text-neutral-400">
            {" - Wayland compositor with smooth animations"}
          </span>
        </li>
        <li className="my-2">
          Zsh + Oh My Zsh
          <span className="text-neutral-400">
            {" - Enhanced shell with plugins and themes"}
          </span>
        </li>
        <li className="my-2">
          Neovim
          <span className="text-neutral-400">{" - Just the best."}</span>
        </li>
        <li className="my-2">
          Kitty
          <span className="text-neutral-400">
            {" - Used to be an allacrity stan"}
          </span>
        </li>
        <li className="my-2">
          Tmux
          <span className="text-neutral-400">
            {" - Can't imagine using a terminal without it"}
          </span>
        </li>
        <li className="my-2">
          Node.js + pnpm
          <span className="text-neutral-400">
            {" - Fast package manager for JavaScript projects"}
          </span>
        </li>
        <li className="my-2">
          Docker
          <span className="text-neutral-400">
            {" - Containerization for development and deployment"}
          </span>
        </li>
      </ul>

      <h3 className="mt-8 text-xl">Desk</h3>
      <ul className="ml-6 list-disc">
        <li className="my-2">
          Sony WH-1000XM5
          <span className="text-neutral-400">
            {" - Great sound quality, and easy to switch devices"}
          </span>
        </li>
        <li className="my-2">
          Edifier R1700BT
          <span className="text-neutral-400">
            {" - Wireless bookshelf speakers for desktop audio"}
          </span>
        </li>
        <li className="my-2">
          Logitech Lift
          <span className="text-neutral-400">
            {
              " - Higher tilt degree compared to the MX Master series (and cheaper)"
            }
          </span>
        </li>
        <li className="my-2">
          Neo Ergo
          <span className="text-neutral-400">
            {" - I enjoy writing with this keyboard"}
          </span>
        </li>
        <li className="my-2">
          ZSA Moonlander
          <span className="text-neutral-400">
            {" - My first 'expensive' keyboard"}
          </span>
        </li>
        <li className="my-2">
          LG 27&quot; UltraGear OLED
          <span className="text-neutral-400">
            {" - 240Hz OLED with 0.03ms response time"}
          </span>
        </li>
      </ul>

      <p className="mt-4 text-neutral-400 text-sm">
        Full list of configs are in my{" "}
        <Link
          className="underline"
          href="https://github.com/princejoogie/dotfiles"
          rel="noreferrer noopener"
          target="_blank"
        >
          dotfiles
        </Link>{" "}
        repo.
      </p>
    </div>
  );
};
