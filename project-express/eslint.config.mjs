export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],

    languageOptions: {
      globals: {
        ...globals.node,
      },
    },

    rules: {
      "no-undef": "error",
      "no-unused-vars": "warn",
      "no-console": "off",
      "no-constant-binary-expression": "error",
    },
  },
]);
