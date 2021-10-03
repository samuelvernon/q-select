const path = require( "path" );
// const fs = require( 'fs-extra' );
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

let inputFolder = 'src';
let outputFolder = 'build';
let buildOptions = {};

buildOptions.template = {
    template: './' + inputFolder + '/index.html'
};

buildOptions.output = {
    path: path.resolve( __dirname, outputFolder ),
    filename: 'js/[name].[chunkhash].js',
    publicPath: './'
};

buildOptions.cssExtractPluginOptions = {
    filename: 'css/[name].[chunkhash].css',
    ignoreOrder: true
};

buildOptions.resolve = {
    extensions: [ '.js', '.ts' ]
};

buildOptions.modulesRules = [
    {
        test: /\.ts$|\.js$/,
        use: 'ts-loader',
        exclude: [ path.resolve( __dirname, 'node_modules' ) ],
        include: [ path.resolve( __dirname, "ts" ) ]
    }, {
        test: /\.css$/,
        use: [ MiniCssExtractPlugin.loader ]
    }, {
        test: /\.css$/,
        use: {
            loader: 'css-loader',
            options: {
                url: false
            }
        }
    }, {
        test: /\.(htm?l)$/i,
        use: 'raw-loader'
    }
];

buildOptions.plugins = [
  new HtmlWebpackPlugin( buildOptions.template ),
  new MiniCssExtractPlugin( buildOptions.cssExtractPluginOptions )
];

module.exports = {
  entry: './' + inputFolder + '/ts/index.ts',
  output: buildOptions.output,
  resolve: buildOptions.resolve,
  stats: {
    builtAt: true,
    colors: true,
    excludeModules: true,
    errors: true,
    hash: false,
    warnings: true,
    assets: true,
    depth: true,
    entrypoints: false,
    env: true,
    logging: 'error',
    loggingTrace: false,
    modules: true
  },
  module: {
    rules: buildOptions.modulesRules
  },
  plugins: buildOptions.plugins
};