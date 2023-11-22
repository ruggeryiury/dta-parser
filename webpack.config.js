const path = require('path')
// const webpack = require('webpack')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// const TerserPlugin = require("terser-webpack-plugin")

/** @type {import('webpack').Configuration[]} */
module.exports = [
  {
    entry: {
      'dta-parser': './src/index.ts',
    },
    output: {
      filename: 'dta-parser.js',
      path: path.resolve(__dirname, 'dist'),
      library: {
        name: 'DTAParser',
        type: 'var',
        export: 'default',
        umdNamedDefine: true,
      },
      globalObject: 'this',
    },
    devtool: 'source-map',
    mode: 'production',
    optimization: {
      usedExports: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx|ts)$/,
          exclude: /(?:node_modules|backend)/,
          type: 'javascript/auto',
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env', '@babel/typescript'],
              plugins: ['@babel/proposal-class-properties', '@babel/proposal-object-rest-spread', '@babel/transform-modules-umd', ['polyfill-corejs3', { method: 'usage-global', version: '3.20' }]],
            },
          },
        },
      ],
    },
    resolve: {
      extensions: ['.*', '.js', '.jsx', '.tsx', '.ts'],
    },
    // plugins: [new BundleAnalyzerPlugin()],
  },
]
