$(function(){
    let txt=$('#div1').text("text메소드에서 내용을 바꿉니다");
    $('#div2').html('html메소드에서 내용 바꿉니다');
    $('#div3').text('<strong>text메소드</strong>'); //text는 그대로 표현
    $('#div4').hover(function(){
        $('#div4').html('<h1>text메소드</h1>'); //html은 css에 변화줄수있다.
    },function(){
        $('#div4').html('text메소드');
    });
});