module.exports = {
    lintOnSave: false, // 关闭eslint检查
    outputDir: 'dist', //构建输出目录
    assetsDir: 'assets', //静态资源目录(js,css,img,fonts)
    baseUrl: './', //打包出来的index.html能加载我们打包出来的app.js
    productionSourceMap: false, //生产环境打包的时候，不需要打包sourceMap文件
}