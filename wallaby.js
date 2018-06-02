module.exports = function () {
  return {
    files: [
      'src/**/*.js',
      '!__test__/**/*.spec.js',
      'assets/*.bmp',
      'index.js',
    ],

    tests: [
      '__test__/**/*.spec.js',
    ],

    testFramework: 'jest',
    env: {
      type: 'node',
    },
  };
};