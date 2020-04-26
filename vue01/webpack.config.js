const path = required('path')//引入nodejs中的path模块
// 这个配置文件，其实就是一个 JS 文件，
// 通过 Node 中的模块操作，向外暴露了一个 配置对象；
module.exports = {
    //配置 入口 出口
    // __dirname node内置变量
    // Node.js 中，__dirname 总是指向当前执行 js 文件的绝对路径
    entry: path.join(__dirname,'./src/main.js'),// 入口，表示，要使用 webpack 打包哪个文件
    output:{  // 输出文件相关的配置
        path: path.join(__dirname,'./dist'),
        filename: 'bundle.js' //指定文件名称
    }
}