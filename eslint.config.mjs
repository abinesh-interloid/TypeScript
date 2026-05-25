import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([...tseslint.configs.recommended,
{
  files: ["**/*.{ts,js}"],
  plugins: { js }, extends: ["js/recommended"],
  languageOptions: { globals: globals.browser },
  rules: { semi: "error" }
},
]);
