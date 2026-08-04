import Link from "next/link";

export const Setup = () => {
  return (
    <div>
      <h2 className="text-xl">OS & Environment</h2>
      <ul className="ml-6 list-disc">
        <li className="my-2">
          Arch Linux
          <span className="text-muted-foreground">
            {" - Rolling release, btw"}
          </span>
        </li>
        <li className="my-2">
          Hyprland
          <span className="text-muted-foreground">
            {" - Wayland compositor with smooth animations"}
          </span>
        </li>
        <li className="my-2">
          Zsh + Oh My Zsh
          <span className="text-muted-foreground">
            {" - Enhanced shell with plugins and themes"}
          </span>
        </li>
        <li className="my-2">
          Neovim
          <span className="text-muted-foreground">{" - Just the best."}</span>
        </li>
        <li className="my-2">
          Kitty
          <span className="text-muted-foreground">
            {" - Used to be an allacrity stan"}
          </span>
        </li>
        <li className="my-2">
          Tmux
          <span className="text-muted-foreground">
            {" - Can't imagine using a terminal without it"}
          </span>
        </li>
        <li className="my-2">
          Node.js + pnpm
          <span className="text-muted-foreground">
            {" - Fast package manager for JavaScript projects"}
          </span>
        </li>
        <li className="my-2">
          Docker
          <span className="text-muted-foreground">
            {" - Containerization for development and deployment"}
          </span>
        </li>
      </ul>

      <h2 className="mt-8 text-xl">Desk</h2>
      <ul className="ml-6 list-disc">
        <li className="my-2">
          Sony WH-1000XM5
          <span className="text-muted-foreground">
            {" - Great sound quality, and easy to switch devices"}
          </span>
        </li>
        <li className="my-2">
          Edifier R1700BT
          <span className="text-muted-foreground">
            {" - Wireless bookshelf speakers for desktop audio"}
          </span>
        </li>
        <li className="my-2">
          Logitech Lift
          <span className="text-muted-foreground">
            {
              " - Higher tilt degree compared to the MX Master series (and cheaper)"
            }
          </span>
        </li>
        <li className="my-2">
          Neo Ergo
          <span className="text-muted-foreground">
            {" - I enjoy writing with this keyboard"}
          </span>
        </li>
        <li className="my-2">
          ZSA Moonlander
          <span className="text-muted-foreground">
            {" - My first 'expensive' keyboard"}
          </span>
        </li>
        <li className="my-2">
          LG 27&quot; UltraGear OLED
          <span className="text-muted-foreground">
            {" - 240Hz OLED with 0.03ms response time"}
          </span>
        </li>
      </ul>

      <p className="mt-4 text-muted-foreground text-sm">
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
