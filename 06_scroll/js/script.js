let $header=$('#header');

$(window).scroll(function(){
    let scTop=$(window).scrollTop();
    console.log(scTop);
    $section1=$('.section1').offset();
    $section2=$('.section2').offset();
    $section3=$('.section3').offset();
    $section4=$('.section4').offset();
    if(scTop>$section1.top-300){
        $('.section1 .container .left img').stop().animate({left:'40px'},400);
        $('.section1 .container .right p').stop().animate({top:'50px'},400)
    }else{
        $('.section1 .container .left img').stop().animate({left:'-100%'},1000);
    }
    if(scTop>$section2.top-300){
        $('.section2 .container .left p').css({opacity:'1'}).slideDown(1000);
        $('.section2 .container .right .img1').delay(1000).stop().animate({right: '400px'},1000);
        $('.section2 .container .right .img2').delay(1800).stop().animate({right: '10px'},1000);
    }else{
        $('.section2 .container .left p').stop().slideUp(1000);
        $('.section2 .container .right .img1').stop().animate({right: '-120px'},1000);
        $('.section2 .container .right .img2').stop().animate({right: '-500px'},1000);
    }
    if(scTop>$section3.top-300){
        $('.section3 .text1').stop().animate({right: '100%'},4000).animate({right: '-30%'},4000);
        $('.section3 .text2').stop().animate({left: '20%'},2500);
        $('.section3 .text3').stop().animate({bottom: '10%'},1000);
    }
    if(scTop>$section4.top-400){
        $('.section4 .container .box1').stop().animate({left: '200px'},1000);
        $('.section4 .container .box3').stop().animate({left: '900px'},1000);
    }else{
        $('.section4 .container .box1').stop().animate({left: '550px'},1000);
        $('.section4 .container .box3').stop().animate({left: '550px'},1000);
    }
});
