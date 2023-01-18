$(function(){
    $('h1').css("color",'red');

    $('#box li').css({color:'green', background:'yellow',marginBottom:'10px'});

    $('#box li').hover(function(){
        $(this).css('background','yellowgreen')
    },function(){
        $(this).css('background','yellow')
    })
});