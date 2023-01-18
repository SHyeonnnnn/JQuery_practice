const $right=$('.right');
const $left=$('.left');
const $moving=$('.insertBox>ul');
$right.click(function(){
    $moving.stop().animate({left:200*-1},500,function(){
        $(this).children("li:first").insertAfter($(this).children("li:last"));
        $(this).css({left:0});
    });
})
//클래스right를 클릭하면 insertBox>ul이 left-200만큼 움직이고 자식인 li의 첫번째를 insertAfter로 li의 마지막에 옮긴다. 그리고 ul의 left를 0으로 정렬


$left.click(function(){
    $moving.children("li:last").insertBefore($moving.children("li:first"));
        $moving.css({left: 200*-1});
        $moving.stop().animate({left:0},500);
})
//클래스 left를 클릭하면 insertBox>ul의 자식 li의 마지막거를 insertBefore로 li의 첫번째로 옮긴다. 그리고 ul을 left -200px 움직이고
//ul 위치를 left 0??