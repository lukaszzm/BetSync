/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    extends: ["next", "turbo", "prettier"],
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "no-console": "warn",
    },
    parserOptions: {
      babelOptions: {
        presets: [require.resolve("next/babel")],
      },
    },
  },
];
