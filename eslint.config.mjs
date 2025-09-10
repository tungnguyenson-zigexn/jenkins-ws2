import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { 
      globals: {
        ...globals.browser,
        ...globals.node
      } 
    } 
  },
  { 
    files: ["**/*.js"], 
    languageOptions: { 
      sourceType: "script" 
    } 
  },
  {
    files: ["**/*.test.js", "**/*.spec.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest
      }
    }
  }
]);
