// const path = require('path');
const javascriptRules = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-react', '@babel/preset-env']
    }
  }
}

const cssModulesRules = {
  test: /\.css$/,
  exclude: /node_modules/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        modules: true
      }
    }
  ]
}
const svgRules = {
  test: /\.svg$/,
  use: 'file-loader'
}

module.exports = {
//  mode: 'development',
//  entry: './src/js/index.js', // Root file
  //  devtool: 'inline-source-map',
  //  target: 'electron-renderer',
  module: {
    rules: [javascriptRules, cssModulesRules, svgRules]
  },
  //  resolve: {
  //    extensions: ['.js'],
  //  },
  output: {
    filename: 'app.js'
    //    path: path.resolve(__dirname, 'build', 'js'),
  }
}
