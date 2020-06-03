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
    },
    module: { // 这个节点，用于配置 所有 第三方模块 加载器；
        // 运行时解析 import './css/index.css' 时
        // 并不会马上报错，而是先到这里 看这个 rules规则；
        // 看是否有能匹配这个 css  文件的规则；
        rules: [ //所有第三方模块的匹配规则
            {test: /\.css$/,  // 正则表达式，匹配所有以.css结尾的文件；
                //匹配到后，使用 use 属性的加载器来处理；
                use: ['style-loader','css-loader']

                // loader是从右到左进行处理；
        // 注意： webpack 处理第三方文件类型的过程；
        // 1. 发现这个 要处理的文件 不是JS 文件，然后就去
                // 配置文件中，查找有没有对应的第三方 loader 规则；
        // 2. 如果能找到对应的规则，就会调用 对应的 loader 处理 这种文件类型；
        // 3. 在调用 loader 的时候，是从后往前调用的；
        // 4. 当最后一个loader调用完毕 会把处理的结果，直接交给 webpacke 进行 打包合并；
            //最终输出到 bundle.js 中去；



            },

            // 定义 less loader 规则
            {test: /\.less/,use:['style-loader','css-loader','less-loader']} ,//从右往前调用；
            // scss loader
            {test: /\.scss/,use:['style-loader','css-loader','sass-loader']} //从右往前调用；
        ]
    }
}