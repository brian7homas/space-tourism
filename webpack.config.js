/***************************************************************************************
*    Title: Git a Web Developer Job: Mastering the Modern Workflow
*    Author: Brad Schiff
*    Date: 1/30/2023
*
***************************************************************************************/

const path = require('path')
const fse = require('fs-extra');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const postCSSPlugins = [
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('autoprefixer')
];

// watches which npm task is running (dev, build)
const currentTask = process.env.npm_lifecycle_event
class RunAfterCompile{
  apply(compiler){
    compiler.hooks.done.tap('copy imgs', function(){
      fse.copySync('./app/assets/images', './docs/assets/images')
    })
  }
}
let pages = fse.readdirSync('./app').filter((file)=>{
  return file.endsWith('.html');
}).map((page)=>{
  return new HtmlWebpackPlugin({
    filename: page,
    template: `./app/${page}`,
    minify: false,
  })
})
let cssConfig = {
  test: /\.css$/i,
  use: ['css-loader?url=false', {loader: 'postcss-loader', options: {postcssOptions: {plugins: postCSSPlugins}}}]
}
let config = {
  entry: './app/assets/scripts/App.js' ,
  plugins: pages,
  module: {
    rules:[
        //?how to tell webpack to do something different 
        cssConfig,
        {
          test:/\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react','@babel/preset-env']
            }
          }
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource'
          },
        ]
      }
}
if (currentTask === 'build'){
  config.module.rules.push({
    test: /\.js$/,
    exclude: /(node_modules)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react']
      }
    }
  })
  
  cssConfig.use.unshift(MiniCssExtractPlugin.loader)
  config.output = {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js', 
    path: path.resolve(__dirname, 'docs')
}
  config.mode = "production"
  config.optimization = {
    splitChunks: {chunks:'all'},
    minimize: true,
    minimizer: [`...`, new CssMinimizerPlugin()]
  }
  config.plugins.push(
    new CleanWebpackPlugin(), 
    new MiniCssExtractPlugin({filename: 'styles.[chunkhash].css'}),
    new RunAfterCompile()
    )
}
if(currentTask === 'dev'){
  cssConfig.use.unshift("style-loader")
  config.output = {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'app')
  }
  config.devServer = {
    before: function(app, server) {
      server._watch('./app/**/*.html')
    },
    contentBase: path.join(__dirname, 'app'),
    hot: true, 
    port: 3000,
    host: '127.0.0.1',
  }
  config.mode = "development"
}
module.exports = config