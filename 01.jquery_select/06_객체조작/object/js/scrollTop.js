var topNum=$('h1').offset().top;
$(window).scrollTop(topNum);
var sct=$(window).scrollTop();
console.log(sct);
$(window).scroll(function(){
    var sct=$(window).scrollTop();
    console.log(sct);
});