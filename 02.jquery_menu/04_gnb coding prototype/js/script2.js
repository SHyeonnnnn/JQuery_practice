// $('nav>ul').hover(function(){
//     $(this).stop().addClass("active")
// },function(){
//     $(this).stop().removeClass("active")
// });
$('nav>ul').hover(function(){
    $(this).stop().animate({height:250},250);
},function(){
    $(this).stop().animate({height:40},250);
});

$('nav>ul').focusin(function(){
    $(this).stop().animate({height:250},250);
});
$('nav>ul').focusout(function(){
    $(this).stop().animate({height:40},250);
});