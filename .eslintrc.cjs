/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  root: true,
  extends: ["prettier"],
  globals: {
    shopify: "readonly",
  },
};
