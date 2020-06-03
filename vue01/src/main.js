import $ from 'jquery'

import './css/index.css'
// 注意： webpack 默认只能打包 JS 类型的文件；
//如果要处理 非 JS 类型的文件，我们需要手动安装一些，
//合适的 第三方加载器 loader;
// 1. css文件，需要安装 cnpm i style-loader css-loader -D
// 2. 打开 webpack.config.js 这个配置文件，在 里面，
// 新增一个 配置节点，叫做 module , 它是一个对象；在
// 这个 module 对象身上，有个 rules 属性 ，是一个数组；
// 这个数组中，存放了，所有第三方文件的匹配 处理规则；
import './css/index.less'  //也可以导入 less 文件
// 1. 安装 cnpm i less-loader -D
// 还要安装 cnpm i less -D
import './css/index.scss'
// cnpm i sass-loader -D
// cnpm i node-sass -D


$(function () {
    // odd/even 选择器
    $('li:odd').css('backgroundColor','lightblue')
    $('li:even').css('backgroundColor',function () {
        return '#'+'D97634'
    })
})