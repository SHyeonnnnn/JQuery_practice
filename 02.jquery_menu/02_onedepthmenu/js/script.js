let menu= $('#nav li');
// menu.hover(function(){},function(){});

menu.on({"mouseover focus":function(){
    let tg=$(this);
    let onImg=tg.find('.text_image > .on'); //글자이미지
    let offImg=tg.find('.text_image > .off');
    let menuImage=tg.find('.menu_image');
    let imageHeight=menuImage.find('img').innerHeight();
    // console.log(imageHeight);
    onImg.css('display','block');
    offImg.css('display','none');
    menuImage.animate({
        height: imageHeight
    },{duration: 300, queue: false, easing:'easeOutCubic'});
}
});
menu.on({"mouseout blur":function(){
    let tg=$(this);
    let onImg=tg.find('.text_image > .on');
    let offImg=tg.find('.text_image > .off');
    let menuImage=tg.find('.menu_image');
    let imageHeight=0;
    // console.log(imageHeight);
    onImg.css('display','none');
    offImg.css('display','block');
    menuImage.animate({
        height: imageHeight
    },{duration: 300, queue: false, easing:'easeOutCubic'});
}
});