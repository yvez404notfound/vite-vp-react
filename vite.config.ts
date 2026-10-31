import react from "@vitejs/plugin-react";
import { defineConfig, lazyPlugins } from "vite-plus";

// https://vite.dev/config/
export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {
    arrowParens: "always",
    bracketSameLine: false,
    objectWrap: "preserve",
    bracketSpacing: false,
    semi: true,
    experimentalOperatorPosition: "end",
    singleQuote: true,
    jsxSingleQuote: false,
    quoteProps: "as-needed",
    trailingComma: "all",
    singleAttributePerLine: false,
    htmlWhitespaceSensitivity: "css",
    vueIndentScriptAndStyle: false,
    proseWrap: "preserve",
    endOfLine: "lf",
    insertPragma: false,
    printWidth: 80,
    requirePragma: false,
    tabWidth: 2,
    useTabs: false,
    embeddedLanguageFormatting: "auto",
  },
  lint: {
    plugins: ["react", "typescript", "oxc"],
    rules: {
      "react/rules-of-hooks": "error",
      "react/only-export-components": [
        "warn",
        {
          allowConstantExport: true,
        },
      ],
      "vite-plus/prefer-vite-plus-imports": "error",
    },
    options: {
      typeAware: true,
      typeCheck: true,
    },
    jsPlugins: [
      {
        name: "vite-plus",
        specifier: "vite-plus/oxlint-plugin",
      },
    ],
  },
  plugins: lazyPlugins(() => [react()]),
});
