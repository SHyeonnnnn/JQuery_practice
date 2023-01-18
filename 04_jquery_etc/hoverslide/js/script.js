$('.section01').hover(function(){
    $(this).stop().animate({width: '920px'},500);
},function(){
    $(this).stop().animate({width: '200px'},500);
});
$('.section02').hover(function(){
    $('.visual').stop().animate({left: '-240px'},500);
    $(this).stop().animate({width: '920px'},500);
},function(){
    $('.visual').stop().animate({left: 0},500);
    $(this).stop().animate({width: '200px'},500);
});
$('.section03').hover(function(){
    $('.visual').stop().animate({left: '-480px'},500);
    $(this).stop().animate({width: '920px'},500);
},function(){
    $('.visual').stop().animate({left: 0},500);
    $(this).stop().animate({width: '200px'},500);
});
$('.section04').hover(function(){
    $('.visual').stop().animate({left: '-720px'},500);
    $(this).stop().animate({width: '920px'},500);
},function(){
    $('.visual').stop().animate({left: 0},500);
    $(this).stop().animate({width: '200px'},500);
});
