const path = require('path')
const webpack = require('webpack')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
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
      minimize: true,
      minimizer: [new TerserPlugin()]
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
              presets: ['@babel/preset-env', '@babel/typescript',],
              plugins: ['lodash', ['polyfill-corejs3', { method: 'usage-global' }]],
            },
          },
        },
      ],
    },
    resolve: {
      extensions: ['.*', '.js', '.jsx', '.tsx', '.ts'],
    },
    plugins: [
      new LodashModuleReplacementPlugin(),
      new BundleAnalyzerPlugin()
    ],
  },
]