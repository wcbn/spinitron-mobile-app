// module.exports = {
//   env: {
//     browser: false,
//     es2021: true,
//   },
//   extends: "eslint:recommended",
//   parserOptions: {
//     ecmaVersion: "latest",
//     sourceType: "module",
//   },
// };

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

const custom = {
  rules: {
    // use tsc instead
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
  },
};

const ignore = {
  ignores: [".expo", "babel.config.js"],
};

const defaults = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended
);

export default defaults.concat(custom).concat(ignore);
