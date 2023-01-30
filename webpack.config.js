import path from 'path'

export default {
  mode: 'development',
  entry: {
    main: path.resolve('./src/index.jsx')
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ]
  },
  output: {
    path: path.resolve('./assets'),
    filename: 'index.js'
  }
}
