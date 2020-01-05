/**
 * Vue CLI参考：https://cli.vuejs.org/zh/config/
 * webpack参考：https://webpack.js.org/configuration/
 * webpack中文：https://www.webpackjs.com/concepts/
 */

const webpack = require('webpack')

module.exports = {
  devServer: {
    port: 8888,
    hotOnly: true, // 热更新
    host: 'appbackstage.com',
    open: true,
  },
  //jquery配置
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })
    ]
  }
}