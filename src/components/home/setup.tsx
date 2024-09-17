import Link from "next/link";

export const Setup = () => {
  return (
    <div>
      <h3 className="text-xl">Desk</h3>
      <ul className="ml-6 list-disc">
        <li className="my-2">
          Macbook Air M1 (2020)
          <span className="text-gray-400">{" - Cos why not?"}</span>
        </li>
        <li className="my-2">
          Sony WH-1000XM5
          <span className="text-gray-400">
            {" - Great sound quality, and easy to switch devices"}
          </span>
        </li>
        <li className="my-2">
          Logitech Lift
          <span className="text-gray-400">
            {
              " - Higher tilt degree compared to the MX Master series (and cheaper)"
            }
          </span>
        </li>
        <li className="my-2">
          Neo Ergo
          <span className="text-gray-400">
            {" - I enjoy writing with this keyboard"}
          </span>
        </li>
        <li className="my-2">
          ZSA Moonlander
          <span className="text-gray-400">
            {" - My first 'expensive' keyboard"}
          </span>
        </li>
        <li className="my-2">
          Mi Curved Monitor 34&quot;
          <span className="text-gray-400">
            {" - Single monitor setup, 144hz"}
          </span>
        </li>
      </ul>

      <div className="mt-8 flex items-center text-xl">
        <h3>Tools&nbsp;</h3>
        <p className="mt-1 text-sm">
          - Full list of configs are in my{" "}
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

      <ul className="ml-6 list-disc">
        <li className="my-2">
          Neovim
          <span className="text-gray-400">{" - Just the best."}</span>
        </li>
        <li className="my-2">
          Kitty
          <span className="text-gray-400">
            {" - Used to be an allacrity stan"}
          </span>
        </li>
        <li className="my-2">
          Tmux
          <span className="text-gray-400">
            {" - Can't imagine using a terminal without it"}
          </span>
        </li>
        <li className="my-2">
          Arc
          <span className="text-gray-400">
            {" - Profiles are cool, keyboard shortcuts, UI looks great"}
          </span>
        </li>
        <li className="my-2">
          Raycast
          <span className="text-gray-400">
            {" - I use a lot of bash scripts that I hook up with this tool"}
          </span>
        </li>
        <li className="my-2">
          <span className="line-through">Bit</span>Vaultwarden
          <span className="text-gray-400">
            {" - I use vaultwarden (self hosted)"}
          </span>
        </li>
      </ul>
    </div>
  );
};
