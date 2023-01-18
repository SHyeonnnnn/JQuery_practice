$('.box').draggable({
    axis: "x",
    containment: "parent"
  });

$('.box').on('drag',function(){
    getPos();
});

let max=-1800;//가려진 사진 넓이
function getPos(){
    let barLeft=$('.box').css('left');
    barLeft=parseInt(barLeft);//정수?
    console.log(barLeft);
    let pos=(barLeft * (max))/570; //스크롤바 위치 / 570은 막대 너비 30을 뺸값
    $('.content').css('left',pos);
}