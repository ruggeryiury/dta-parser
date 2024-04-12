/** @type {import('@babel/core').ConfigFunction} */
module.exports = (api) => {
  api.cache(true)
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'usage', // Use only the polyfills required by your code
          corejs: { version: 3, proposals: true }, // Specify core-js version
          targets: '> 0.25%, not dead', // Specify your target browsers
        },
      ],
    ],
    plugins: [],
  }
}
