module.exports = function (api) {
  const isTest = api.env('test');
  return {
    presets: ["babel-preset-react"],
    // Other Babel configuration options
  };
};