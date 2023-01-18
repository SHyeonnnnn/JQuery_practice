let menu= $('#nav li');
let nth=$('#nav li:nth-child(3)')
console.log(nth);
// menu.hover(function(){},function(){});

menu.on({"mouseover focus":function(){
    close();
    let tg=$(this);
    let onImg=tg.find('.text_image > .on'); //글자이미지
    let offImg=tg.find('.text_image > .off');
    let menuImage=tg.find('.menu_image');
    let imageWidth=menuImage.find('img').innerWidth();
    // console.log(imageHeight);
    onImg.css('display','block');
    offImg.css('display','none');
    menuImage.animate({
        width: imageWidth
    },{duration: 300, queue: false, easing:'easeOutCubic'});
}
});
menu.on({"mouseout blur":function(){
    let tg=$(this);
    let onImg=tg.find('.text_image > .on');
    let offImg=tg.find('.text_image > .off');
    let menuImage=tg.find('.menu_image');
    let imageWidth=0;
    // console.log(imageHeight);
    onImg.css('display','none');
    offImg.css('display','block');
    menuImage.animate({
        width: imageWidth
    },{duration: 300, queue: false, easing:'easeOutCubic'});
    open();
}
});
open();
function open(){
    let tg=$('#nav>li').eq(2);
    let onImg=tg.find('.text_image > .on'); //글자이미지
    let offImg=tg.find('.text_image > .off');
    let menuImage=tg.find('.menu_image');
    let imageWidth=menuImage.find('img').innerWidth();
    // console.log(imageHeight);
    onImg.css('display','block');
    offImg.css('display','none');
    menuImage.animate({
        width: imageWidth
    },{duration: 300, queue: false, easing:'easeOutCubic'});
}
function close(){
    let tg=$('#nav>li').eq(2);
    let onImg=tg.find('.text_image > .on');
    let offImg=tg.find('.text_image > .off');
    let menuImage=tg.find('.menu_image');
    let imageWidth=0;
    // console.log(imageHeight);
    onImg.css('display','none');
    offImg.css('display','block');
    menuImage.animate({
        width: imageWidth
    },{duration: 300, queue: false, easing:'easeOutCubic'});
}