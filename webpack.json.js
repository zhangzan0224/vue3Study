const path = require('path')

module.exports = {
  entry: './src/index.js', // 指定入口文件
  output: {
    path: path.resolve(__dirname, 'dist'), // 指定打包文件所在的目录
    filename: 'bundle.js'
  },
  // webpack打包时使用的模块
  module: {
    // 指定要加载的规则
    rules: [
      // ts的加载规则
      {
        test: /\.ts$/, // 3
        exclude: /node_modules/, // 4
        use: {
          loader: 'ts-loader', // 5
          options: {
            // 6
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      // css的加载规则
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // less的加载规则
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      // 图片的加载规则
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片，小于limit时，会将图片编译成base64字符串形式
              // 当加载的图片，大于limit时，需要使用file-loader模块进行加载
              limit: 8192,
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  }
}
