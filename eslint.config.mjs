import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Make sure this rule is set to "off"
      "no-unused-vars": "warn",
      "react/no-unescaped-entities": "warn"
    },
    settings: {
      "react": {
        "version": "detect",
      }
    }
  },

];
