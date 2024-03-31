import { resolve } from 'path'
// const webpack = require('webpack')
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
// const TerserPlugin = require("terser-webpack-plugin")

/** @type {import('webpack').Configuration[]} */
const webpackConfig = [
  {
    entry: {
      'dta-parser': './src/index.ts',
    },
    output: {
      filename: 'dta-parser.js',
      path: resolve(__dirname, 'dist'),
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
              plugins: ['@babel/transform-class-properties', '@babel/transform-object-rest-spread', '@babel/transform-modules-umd', ['polyfill-corejs3', { method: 'usage-global', version: '3.20' }]],
            },
          },
        },
      ],
    },
    resolve: {
      extensions: ['.*', '.js', '.jsx', '.tsx', '.ts'],
    },
    plugins: [new BundleAnalyzerPlugin()],
  },
]
export default webpackConfig