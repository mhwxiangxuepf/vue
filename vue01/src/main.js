import $ from 'jquery'

$(function () {
    // odd/even 选择器
    $('li:odd').css('backgroundColor','lightblue')
    $('li:even').css('backgroundColor',function () {
        return '#'+'D97634'
    })
})