$('.hoverOpacity>div').css('opacity','0');
$('.box').hover(function(){
    let th=$(this);
    th.find('.right').css('opacity','.6').stop().animate({top:0},500);
    th.find('.left').css('opacity','.6').stop().animate({top:0},500);
    th.find('.txt').css('opacity','.9').stop().animate({top:0});
},function(){
    let th=$(this);
    th.find('.right').stop().animate({top:'100%',opacity:0},500);
    th.find('.left').stop().animate({top:'-100%',opacity:0},500);
    th.find('.txt').css('opacity','0').stop().animate({top:0});
});