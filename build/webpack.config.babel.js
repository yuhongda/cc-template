
var webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    config = require('../config'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    BomPlugin = require('webpack-utf8-bom'),
    FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var _version = '20180503';
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        app: process.env.NODE_ENV === 'production' ? ["@babel/polyfill", './app.js'] : ["@babel/polyfill", './build/dev-client', './app.js'],
        vendor:['vue', 'vue-router', 'vuex']
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath,
        filename: process.env.NODE_ENV === 'production'
            ? path.posix.join(config.build.assetsSubDirectory, `js/[name].${_version}.js`)
            : path.posix.join(config.dev.assetsSubDirectory, `js/[name].${_version}.js`),
        chunkFilename: process.env.NODE_ENV === 'production'
            ? path.posix.join(config.build.assetsSubDirectory, `js/[name].chunk.js`)
            : path.posix.join(config.dev.assetsSubDirectory, `js/[name].chunk.js`)
    },
    resolve:{
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                // exclude: /node_modules(?![\\/]vue-echarts[\\/])/,
                // include: [
                //     path.resolve(__dirname, '../', ''),
                //     path.resolve(__dirname, '../', 'node_modules/vue-echarts'),
                //     path.resolve(__dirname, '../', 'node_modules/resize-detector'),
                // ],
                loader: 'babel-loader?cacheDirectory',
            },
            {
                test: /\.s[c|a]ss$/,
                exclude: /node_modules/,
                use: [{
                    loader: "vue-style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            },
            {
                test: /\.css$/,
                use: [{
                    loader: "vue-style-loader"
                }, {
                    loader: "css-loader"
                }]
            },
            {
                test: /\.(jpeg|jpg|png|gif)$/i,
                use: [
                    process.env.NODE_ENV === 'production'
                        ? `url-loader?limit=10000&name=${ path.posix.join(config.build.assetsSubDirectory, 'images/[name].[ext]?[hash]') }`
                        : `url-loader?limit=10000&name=${ path.posix.join(config.dev.assetsSubDirectory, 'images/[name].[ext]?[hash]') }`,
                    {
                        loader: 'img-loader',
                        options: {
                            enabled: false,//process.env.NODE_ENV === 'production',
                            gifsicle: {
                                interlaced: false
                            },
                            mozjpeg: {
                                progressive: true,
                                arithmetic: false
                            },
                            optipng: false, // disabled
                            pngquant: {
                                floyd: 0.5,
                                speed: 2
                            },
                            svgo: {
                                plugins: [
                                    { removeTitle: true },
                                    { convertPathData: false }
                                ]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.styl(us)?$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.json$/,
                use: ['json-loader']
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                use: [process.env.NODE_ENV === 'production'
                    ? `url-loader?limit=10000&name=${ path.posix.join(config.build.assetsSubDirectory, 'fonts/[name].[ext]') }`
                    : `url-loader?limit=10000&name=${ path.posix.join(config.dev.assetsSubDirectory, 'fonts/[name].[ext]') }`]
            }
        ]
    },
    optimization:{}
}


module.exports.plugins = [
    // new webpack.optimize.CommonsChunkPlugin({
    //     name: 'vendor',
    //     filename: process.env.NODE_ENV === 'production'
    //         ? path.posix.join(config.build.assetsSubDirectory, `js/vendors.min.js`)
    //         : path.posix.join(config.dev.assetsSubDirectory, `js/vendors.min.js`),
    //     minify: {
    //         removeComments: true,
    //         collapseWhitespace: false
    //     }
    // }),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
        filename:'index.html',
        template:'index.template.html',
        inject: 'true'
    }),
    new CopyWebpackPlugin([
        { from: './src/images/**', to: process.env.NODE_ENV === 'production'
            ? path.posix.join(config.build.assetsSubDirectory, `images/[name].[ext]`)
            : path.posix.join(config.dev.assetsSubDirectory, `images/[name].[ext]`) },
        { from: './src/js/libs/**', to: process.env.NODE_ENV === 'production'
            ? path.posix.join(config.build.assetsSubDirectory, `js/libs/[name].[ext]`)
            : path.posix.join(config.dev.assetsSubDirectory, `js/libs/[name].[ext]`) },
        { from: './src/css/libs/**', to: process.env.NODE_ENV === 'production'
            ? path.posix.join(config.build.assetsSubDirectory, `css/libs/[name].[ext]`)
            : path.posix.join(config.dev.assetsSubDirectory, `css/libs/[name].[ext]`) }
    ], {}),
    new MiniCssExtractPlugin({
        filename: !isProd ? `static/css/[name].${_version}.css` : `static/css/[name].${_version}.[hash].css`,
        chunkFilename: !isProd ? `static/css/[id].${_version}.css` : `static/css/[id].${_version}.[hash].css`,
    }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify("production")
        },
        __ENV: process.env.NODE_ENV == 'production'
            ? "'pro'"
            : "'dev'"
    }),
    new FriendlyErrorsPlugin(),
    new VueLoaderPlugin()
];

if (process.env.NODE_ENV === 'production') {
    module.exports.optimization.minimizer = [
        // we specify a custom UglifyJsPlugin here to get source maps in production
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          uglifyOptions: {
            compress: false,
            ecma: 6,
            mangle: true
          },
          sourceMap: true
        })
    ];
    
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.optimize.OccurrenceOrderPlugin()
    ]);
} else {
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.HotModuleReplacementPlugin()
    ]);
    module.exports.devtool = '#cheap-module-eval-source-map'
}
