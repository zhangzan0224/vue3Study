const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  entry: './src/index.js', // 指定入口文件
  output: {
    path: path.resolve(__dirname, 'dist'), // 指定打包文件所在的目录
    filename: 'bundle.js' // 打包后的文件名
  },
  // webpack打包时使用的模块
  module: {
    // 指定要加载的规则
    rules: [
      // ts的加载规则
      {
        test: /\.ts$/, // 指定规则生效的文件
        exclude: /node_modules/, // 排除node_modules目录
        use: 'ts-loader'
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
  },
  // resolve
  resolve: {
    extensions: ['.ts'] // 配置ts文件可以作为模块加载
  },
  // 配置webpack得插件
  plugins: [
    new CleanWebpackPlugin(), // 每次打包前清空dist目录
    new HTMLWebpackPlugin({
        title: 'Webpack App', // 默认标题
        template: './src/index.html' // 指定模板文件
      }
    )
  ]
}
