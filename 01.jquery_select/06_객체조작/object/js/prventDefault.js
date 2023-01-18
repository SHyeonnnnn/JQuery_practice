$('.btn1').on('click',function(e){
    e.preventDefault();
    $('.txt1').text('나는 하이퍼링크로 가는곳으로 안가고').css({"background":"green"});
});

$('.btn2').on({"click": function(){
    $('.txt2').text('나는 하이퍼링크로 가는곳으로 안가고').css({"background":"green"});
    return false;
}});

$('.btn3').on('click',function(){
    $('.txt3').text('나는 하이퍼링크로 가는곳으로 안가고').css({"background":"green"});
});