const htmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const fs = require('fs'); // to check if the file exists
const webpack = require('webpack');
const dotenv = require('dotenv');

const PATHS = {
  theme: path.join(__dirname, '../../theme')
}

/* LOADERS*/
const CSSModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: {
      localIdentName: '[local]__[hash:base64:5]'
    },
    sourceMap: true
  }
};

const CSSLoader = {
  loader: 'css-loader', options: { importLoaders: 1 }
};


// eslint-disable-next-line no-unused-vars
const ResolveURLLoader = {
  // Webpack expects all url(...) paths in SASS files to be found relative to the root.scss file we import in our react components,
  // but the paths we use are relative to the .scss file that contains the url(...) line.  This loader will update the urls to match
  // webpack's expectations.
  loader: require.resolve('resolve-url-loader'),
  options: {
    sourceMap: true
  }
};

const PostCSSLoader = {
  // When postcss-loader is used standalone (without css-loader)
  // don't use @import in your CSS, since this can lead to quite bloated bundles
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
    plugins: () => [require('autoprefixer')]

  }
};


const SASSLoader = {
  loader: require.resolve('sass-loader'),
  options: {
    sourceMap: true,
    prependData: `
                    @import '_variables';
                    @import '_palette';
                    @import "mixins/index";
                    @import "functions/functions";
                    @import '_typography';
                    @import "icons/index";
                    @import '_layout';
                    @import "_animation";
                    @import '_breakpoints';
                        
                        `,
    sassOptions: {
      includePaths: [PATHS.theme]
    }
  }
};

const CacheLoader = {
  loader: 'cache-loader'
};

const StyleLoader = {
  loader: require.resolve('style-loader')
};

module.exports = (env, appConfigFilePath) => {

// Get the root path (assuming your webpack config is in the root of our project!)
  const currentPath = path.join(__dirname, '..');

  // Create the fallback path (the production .env)
  const basePath = currentPath + '/.env';

  // We're concatenating the environment name to our filename to specify the correct env file!
  const envPath = basePath + '.' + env;

  console.log("//***************** .env *****************//")
  console.log("basePath", basePath);
  console.log("envPath", envPath);
  console.log("env", (env));
  console.log("//**************************************//")

  // Check if the file exists, otherwise fall back to the production .env
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;

  // Set the path parameter in the dotenv config
  const fileEnv = dotenv.config({ path: finalPath }).parsed;

  // reduce it to an object
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

  const config =  {
    entry: './src/app/index.tsx',
    module: {
      rules: [
        {
          test: /\.[t|j]sx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              envName: env
            }
          }
        },
        {
          test: /\.s?css$/,
          exclude: /\.module\.scss$/,
          use: [
            CacheLoader,
            StyleLoader,
            CSSLoader,
            PostCSSLoader,
            ResolveURLLoader,
            SASSLoader
          ]
        },
        {
          test: /\.module\.scss$/,
          use: [
            CacheLoader,
            StyleLoader,
            CSSModuleLoader,
            PostCSSLoader,
            ResolveURLLoader,
            SASSLoader
          ]
        },
        {
          test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          loader: 'file-loader?name=fonts/[name].[ext]'
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: 'file-loader?name=images/[name].[ext]'
        }
      ]
    },
    plugins: [
      new htmlWebpackPlugin({
        template: './src/index.html',
        filename: './index.html'
      }),
      new copyWebpackPlugin([{
        from: 'public'
      },
      {
        from: './../theme/fonts', to: 'fonts'
      },
      {
        from: './config/settings/app.json'
      },
      {
        from: './config/settings/app.production.json'
      },
    ]),
      new webpack.DefinePlugin({
        ...envKeys, 
        WEBPACK_DEFINED_CONFIGURATION: {
        configPath: JSON.stringify(appConfigFilePath || './app.json')
      }
    })
    ],
    resolve: {
      //the order of extensions in webpack.config.js indicates priority
      extensions: ['esm.js', '.mjs', '.js', '.jsx', '.ts', '.tsx', '.json', '.scss'],
      alias: {
        '@': path.resolve(__dirname, '..', 'src')
      }
    }
  };

  return config;
}

