const path = require("path")
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const TerserPlugin = require("terser-webpack-plugin")

/** @type {import('webpack').Configuration[]} */
module.exports = [
    {
        entry: "./src/dta-parser.ts",
        output: {
            filename: "dta-parser.umd.js",
            path: path.resolve(__dirname, "dist"),
            library: 'dta-parser',
            libraryTarget: 'umd',
            globalObject: 'this'
        },
        mode: 'production',
        optimization: {
            usedExports: true
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx|tsx|ts)$/,
                    exclude: /node_modules/,
                    type: 'javascript/auto',
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/env',
                                "@babel/typescript"
                            ],
                            plugins: [
                                "@babel/proposal-class-properties",
                                "@babel/proposal-object-rest-spread",
                                "@babel/transform-modules-umd"
                            ]
                        }
                    }
                }
            ]
        },
        resolve: {
            extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
            alias: {
                'dta-parser': path.resolve(__dirname, 'src/dta-parser.ts'),
                'dta-parser/utils': path.resolve(__dirname, 'src/dta-parser-utils.ts')
            }
        },
        plugins: [
            // new BundleAnalyzerPlugin()
        ]
    },
    {
        entry: "./src/dta-parser.ts",
        output: {
            filename: "dta-parser.cjs.js",
            path: path.resolve(__dirname, "dist"),
            library: 'dta-parser',
            libraryTarget: 'commonjs2'
        },
        mode: 'production',
        optimization: {
            usedExports: true
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx|tsx|ts)$/,
                    exclude: /node_modules/,
                    type: 'javascript/auto',
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                "@babel/preset-typescript"
                            ],
                            plugins: [
                                "@babel/proposal-class-properties",
                                "@babel/proposal-object-rest-spread",
                                ["@babel/transform-modules-commonjs", {

                                }]
                            ]
                        }
                    }
                }
            ]
        },
        resolve: {
            extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
            alias: {
                'dta-parser': path.resolve(__dirname, 'src/dta-parser.ts'),
                'dta-parser/utils': path.resolve(__dirname, 'src/dta-parser-utils.ts')
            }
        },
        plugins: [
            // new BundleAnalyzerPlugin()
        ]
    },
    {
        entry: "./src/dta-parser.ts",
        output: {
            filename: "dta-parser.mjs",
            path: path.resolve(__dirname, "dist"),
            libraryTarget: 'module'
        },
        mode: 'production',
        optimization: {
            usedExports: true
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx|tsx|ts)$/,
                    exclude: /node_modules/,
                    type: 'javascript/auto',
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                "@babel/preset-typescript"
                            ],
                            plugins: [
                                "@babel/proposal-class-properties",
                                "@babel/proposal-object-rest-spread"
                            ]
                        }
                    }
                }
            ]
        },
        resolve: {
            extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
        },
        plugins: [
            // new BundleAnalyzerPlugin()
        ],
        experiments: {
            outputModule: true
        }
    }
]