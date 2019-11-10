module.exports = api => {
  const presets = [["@babel/preset-env", {
    "debug": false
  }],
    "@babel/preset-react",
    "@babel/typescript"
  ];

  const basePlugins = [
    "@babel/transform-runtime",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-optional-chaining"
  ];

  const productionPlugins = [
    "@babel/plugin-transform-react-constant-elements",
    "@babel/plugin-transform-react-inline-elements",
    "babel-plugin-jsx-remove-data-test-id",
    ["transform-react-remove-prop-types", { removeImport: true }]
  ];

  const plugins =
    api.env() === "production"
      ? [...basePlugins, ...productionPlugins]
      : basePlugins;

  return {
    plugins,
    presets
  };
};
