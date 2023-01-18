$('.hoverOpacity>div').css('opacity','0');
$('.box').hover(function(){
    let th=$(this);
    th.find('.top').css('opacity','.2').stop().animate({height:0},500);
    th.find('.bottom').css('opacity','.2').stop().animate({height:0},500);
    th.find('.right').css('opacity','.2').stop().animate({width:0},500);
    th.find('.left').css('opacity','.2').stop().animate({width:0},500);
},function(){
    let th=$(this);
    th.find('.top').stop().animate({height:'50%',opacity:0},500);
    th.find('.bottom').stop().animate({height:'50%',opacity:0},500);
    th.find('.right').stop().animate({width:'50%',opacity:0},500);
    th.find('.left').stop().animate({width:'50%',opacity:0},500);
});