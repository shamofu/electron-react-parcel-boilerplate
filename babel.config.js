module.exports = api => {
  const isTest = api.env('test');

  if (isTest) {
    return {
      "presets": [
        "@babel/preset-react",
        "@babel/preset-typescript"
      ]
    }
  }
  else {
    return {
    }
  }
};
