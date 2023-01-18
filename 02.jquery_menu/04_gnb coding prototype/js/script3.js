/* $('nav>ul>li').hover(function(){
    $(this).find('.sub').addClass('active');
},function(){
    $(this).find('.sub').removeClass('active');
});

$('nav>ul>li').focusin(function(){
    $(this).find('.sub').addClass('active');
});
$('nav>ul>li').focusout(function(){
    $(this).find('.sub').removeClass('active');
}); */

$('nav>ul>li').on({
    "mouseover focusin":function(){
    $(this).find('.sub').addClass('active');
    },
    "mouseout focusout":function(){
    $(this).find('.sub').removeClass('active');
    }
});