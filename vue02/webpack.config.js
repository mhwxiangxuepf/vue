//由于 webpack 是基于Node进行构建，所有 webpack 的配置
//文件中，任何合法的Node代码都是支持的；
var path = require('path') // node代码

// 在内存中，根据指定的模板页面，生成一份内存中的首页，同时自动把打包好的bundle.js注入到页面底部；

var htmlWebpackPlugin = require('html-webpack-plugin')

// 当以命令形式运行 webpack 或 webpack-dev-server 的时候，
// 工具会发现，我们并没有提供 要打包的文件的 入口 和 出口，
// 此时他会检查 项目根目录中的配置文件，并读取这个文件，
//就拿到了 导出的这个 配置对象 module.exports 进行打包构建；
module.exports = {
    entry: path.join(__dirname,'./main.js'),
    output: {
        path: path.join(__dirname,'./dist'),
        filename: "bundle.js"
    },
    plugins: [ //所有 webpack 插件的配置点
        new htmlWebpackPlugin({
            template: path.join(__dirname,'./index.html'),
            filename: 'index.html'
        })
    ]
}