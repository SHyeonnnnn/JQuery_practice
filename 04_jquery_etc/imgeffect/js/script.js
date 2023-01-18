$('li a').each(function(){
    let bgImg=$(this).attr("data-img");
    //console.log(bgImg);
    $(this).css("background-image","url("+bgImg+")")
});
$('li a').hover(function(){
    $(this).stop().animate({marginLeft:'15px' , height: 400 , width: 500},500);
},function(){
    $(this).stop().animate({marginLeft:0 , height:30 , width: 150},500);
});