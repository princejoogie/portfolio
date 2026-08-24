import Link from "next/link";

const sections = [
  {
    title: "Systems",
    items: [
      [
        "Arch Linux",
        "Main desktop environment, managed with pacman, yay, and GNU Stow.",
      ],
      [
        "Hyprland",
        "Wayland desktop with Waybar, Wofi, Eww, Dunst, and Hyprpaper.",
      ],
      [
        "macOS",
        "Portable environment with Homebrew, Raycast automation, and the same shell and agent setup.",
      ],
    ],
  },
  {
    title: "Terminal & Editor",
    items: [
      [
        "Neovim",
        "Lua configuration built on lazy.nvim, LSP, Treesitter, Snacks, Conform, Oil, Harpoon, and Fugitive.",
      ],
      [
        "Kitty",
        "Primary terminal with FiraCode Nerd Font and Catppuccin Mocha.",
      ],
      [
        "Zsh + Starship",
        "Vi mode, autosuggestions, syntax highlighting, and a compact language-aware prompt.",
      ],
      [
        "Tmux + Herdr",
        "Persistent sessions, worktree-aware panes, repository switching, and Neovim navigation.",
      ],
      [
        "Yazi",
        "Fast terminal file management alongside Oil and Snacks inside Neovim.",
      ],
    ],
  },
  {
    title: "AI & Automation",
    items: [
      [
        "OpenCode, Claude Code & Codex",
        "Shared skills and MCP servers, installed from one agent configuration.",
      ],
      [
        "Supermaven",
        "Inline completion inside Neovim; Copilot is intentionally disabled.",
      ],
      [
        "CuaDriver + MCP",
        "Computer-use automation with Context7, grep.app, and OpenTelemetry tooling available to agents.",
      ],
      [
        "Worktree scripts",
        "Create isolated branches, bootstrap dependencies from the detected lockfile, and open the right workspace automatically.",
      ],
    ],
  },
  {
    title: "Desk",
    items: [
      ['LG 27" UltraGear OLED', "1440p, 240Hz, and a 0.03ms response time."],
      ["Neo Ergo", "The keyboard I enjoy writing on most."],
      ["ZSA Moonlander", "My first expensive split keyboard."],
      [
        "Scyrox mouse",
        "Battery level is read over HID and shown directly in Waybar.",
      ],
      [
        "Sony WH-1000XM5",
        "Reliable noise cancellation and easy switching between devices.",
      ],
      ["Edifier R1700BT", "Wireless bookshelf speakers for desktop audio."],
    ],
  },
] as const;

export const Setup = () => {
  return (
    <div>
      {sections.map((section, index) => (
        <section
          className={index === 0 ? undefined : "mt-8"}
          key={section.title}
        >
          <h2 className="text-xl">{section.title}</h2>
          <ul className="ml-6 list-disc">
            {section.items.map(([name, description]) => (
              <li className="my-2" key={name}>
                {name}
                <span className="text-muted-foreground"> - {description}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <p className="mt-6 text-sm text-muted-foreground">
        The configs, scripts, and agent setup live in my{" "}
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
