import globals from "globals";
import configPrettier from "eslint-config-prettier";
import pluginJs from "@eslint/js";
import pluginPrettier from "eslint-plugin-prettier/recommended";
import pluginReact from "eslint-plugin-react";
import tseslint from "typescript-eslint";

/** @type {import("eslint").Linter.Config} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    settings: { react: { version: "detect" } },
  },
  { languageOptions: { globals: globals.browser } },
  { languageOptions: { globals: globals.node } },
  ...tseslint.configs.recommended,
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginPrettier,
  configPrettier,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },
];
