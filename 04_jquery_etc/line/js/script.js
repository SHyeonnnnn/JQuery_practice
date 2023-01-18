var topLine=$('.top-line');
var bottomLine=$('.bottom-line');
var leftLine=$('.left-line');
var rightLine=$('.right-line');
var line1
function line(){
    line1=setInterval(function(){
        topLine.css('left','-100%').animate({left:'0'},200);
        bottomLine.css('left','100%').animate({left:'0'},200);
        leftLine.css('top','100%').animate({top:'0'},200);
        rightLine.css('top','-100%').animate({top:'0'},200);
    },500);
};

/* $('.ani1').hover(function(){
    line();
    $('.ani2').css('display','block');
    $('.ani3').css('display','block');
},function(){
    clearInterval(line1);
    $('.ani2').css('display','none');
    $('.ani3').css('display','none');}) */

$('.animate').hover(function(){
    $(this).find('.top-line').css('left','-100%').animate({left:'0'},200);
    $(this).find('.bottom-line').css('left','100%').animate({left:'0'},200);
    $(this).find('.left-line').css('top','100%').animate({top:'0'},200);
    $(this).find('.right-line').css('top','-100%').animate({top:'0'},200);
},function(){
    $(this).find('.top-line').animate({left:'-100%'},200);
    $(this).find('.bottom-line').animate({left:'100%'},200);
    $(this).find('.left-line').animate({top:'100%'},200);
    $(this).find('.right-line').animate({top:'-100%'},200);})