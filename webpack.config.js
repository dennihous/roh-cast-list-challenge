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
      }
    ]
  },
  output: {
    path: path.resolve('./assets'),
    filename: 'index.js'
  }
}
