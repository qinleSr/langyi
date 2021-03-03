module.exports = {
  publicPath: './',
  devServer: {
    // port: 9528, //端口号
    // host: 'localhost', //主机名
    // https: false, //协议
    open: true, //启动项目时自动打开浏览器访问

    // //  解决跨域问题
    // proxy: {
    //   '/api': {                       //需要代理的接口
    //     target: 'https://lyerp.yongshikj.com/langyi/public/index.php/api', //目标服务器
    //     changeOrigin: true,　　　　　　 //是否跨域
    //     pathRewrite: {
    //       '^/api': '/api'             //重定向
    //     }
    //   }
    // }
  },
  // lintOnSave: false, // 关闭格式检查
  // productionSourceMap:false, // 打包的时候不会生成map文件，加快打包速度
}