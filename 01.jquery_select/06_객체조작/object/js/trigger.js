$('.btn1').click(function(){
    $('.btn1').parent().next().css({"color":"blue","background":"yellow"})
});
$('.btn2').on({"mouseover focus":function(){
    $('.btn2').parent().next().css({"color":"blue","background":"yellow"})
}});

$('.btn1').off("click");//이벤트 제거
$('.btn2').trigger("mouseover"); //강제로 이벤트 발생