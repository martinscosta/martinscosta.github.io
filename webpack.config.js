const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge');
const NpmInstallPlugin = require('npm-install-webpack-plugin');



const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, 'app'),
  root: __dirname,
  build: path.join(__dirname, 'static')
};



const common = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },  
  entry: [
    PATHS.app
  ],
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
   loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel?cacheDirectory',
        include: PATHS.app       
      },
      { 
        test: /\.sass/, 
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax',
        include: PATHS.app       
      },            
      { 
        test: /\.css$/, 
        loader: "style-loader!css-loader?importLoaders=1"
      },
      { 
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url'
      },
      { 
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url'
      },   
      { 
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url'
      },   
      { 
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url'
      },   
      { 
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url'
      },                        
      {
        test: /\.(png|jpg|jpeg|gif|)$/,
        loader: 'url',
      },       
    ]

  }    
};

if(TARGET === 'start' || !TARGET) {
  
  
  module.exports = merge(common, {
    devtool: 'eval-source-map',   
    
    devServer: {
      //contentBase: PATHS.app,
      contentBase: PATHS.root,
      
      // Enable history API fallback so HTML5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env so this is easy to customize.
      //
      // If you use Vagrant or Cloud9, set
      // host: process.env.HOST || '0.0.0.0';
      //
      // 0.0.0.0 is available to all network devices unlike default
      // localhost
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new NpmInstallPlugin({
        save: true // --save
      }),      
      new webpack.NoErrorsPlugin()
    ]    
    
    
  });
}

if(TARGET === 'build') {
  module.exports = merge(common, {});
}