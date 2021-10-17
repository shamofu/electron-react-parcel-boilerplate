module.exports = api => {
  const isTest = api.env('test');

  return isTest ? {
    'presets': [
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
  } : {};
};
