const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('../package.json').dependencies;

module.exports = {
  entry: path.resolve(__dirname, '../src/index.ts'),

  output: {
    clean: true,
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    // publicPath: '/',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    alias: {
      '@api': path.resolve(__dirname, '../src/api/'),
      '@assets': path.resolve(__dirname, '../src/assets/'),
      '@components': path.resolve(__dirname, '../src/components/'),
      '@hoc': path.resolve(__dirname, '../src/hoc/'),
      '@context': path.resolve(__dirname, '../src/context/'),
      '@pages': path.resolve(__dirname, '../src/pages/'),
      '@routes': path.resolve(__dirname, '../src/routes/'),
      '@services': path.resolve(__dirname, '../src/services/'),
    },
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'auth_mf',
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './AuthStatus': './src/components/AuthStatus',
        './Button': './src/components/Button',
        './Input': './src/components/Input',
        './Login': './src/pages/Login',
        './Register': './src/pages/Register',
      },
      shared: {
        ...deps,
        'react': {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
        'react-toastify': {
          singleton: true,
          requiredVersion: deps['react-toastify'],
        },
        'react-router-dom': {
          singleton: true,
          requiredVersion: deps['react-router-dom'],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
};
