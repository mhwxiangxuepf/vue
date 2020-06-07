//由于 webpack 是基于Node进行构建，所有 webpack 的配置
//文件中，任何合法的Node代码都是支持的；
var path = require('path') // node代码
var path = require('webpack') //启用热启动 第2步；因为要用到 webpack 里的HotModuleReplacementPlugin ；
// 在内存中，根据指定的模板页面，生成一份内存中的首页，同时自动把打包好的bundle.js注入到页面底部；

var htmlWebpackPlugin = require('html-webpack-plugin')

// 当以命令形式运行 webpack 或 webpack-dev-server 的时候，
// 工具会发现，我们并没有提供 要打包的文件的 入口 和 出口，
// 此时他会检查 项目根目录中的配置文件，并读取这个文件，
//就拿到了 导出的这个 配置对象 module.exports 进行打包构建；
module.exports = {
    entry: path.join(__dirname,'./src/main.js'),
    output: {
        path: path.join(__dirname,'./dist'),
        filename: "bundle.js"
    },
    plugins: [ //所有 webpack 插件的配置点
        new htmlWebpackPlugin({
            template: path.join(__dirname,'./src/index.html'),
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin() // new 一个热更新的模块对象，这是启用热更新的第3步；
    ],
    devServer: {
       open: true, //自动打开浏览器
       port: 3000, 
       contentBase: 'scr', //指定托管的根目录
       hot: true // 启用热更新的第一步；

    },
    module: { //配置所有第三方loader 模块的
        rules: [
            {test:/\.css$/,use:['style-loader','css-loader']},
            //limit传参，单位是byte,但图片大小 大于或等于 limit 则不会转为base64
            // name, 指定图片名字 [name]是指图片本身的名字，[ext]是指图片本身的扩展名 [hash:8]-
            {test: /\.(jpg|png|gif|bmp|jpeg)$/,use:['url-loader?limit=17508&name=[name].[ext]']}, //file-loader是urlloader内部依赖，不用我们自己依赖；
            // {test: /\.(ttf|ect|svg|woff|woff2)$/, use:['url-loader']},//处理字体文件
            {test:/\.(ttf|eot|svg|woff|woff2|otf)$/, use: 'url-loader'},
            {test: /\.js$/, use: 'babel-loader' ,exclude: /node_modules/} //balel处理器

        ]

    }
}