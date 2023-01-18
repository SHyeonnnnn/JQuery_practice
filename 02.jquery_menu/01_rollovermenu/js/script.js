$('.menu>li>a').each(function(){
    let a=$(this); // 선택한 a
    let img=a.find('img'); // 선택한 a의 하위에 있는 이미지
    let src_off=img.attr('src'); // src_off라는 변수는 img 의 속성 값중 'src'를 가져오는것 ("./img/menu01_off.png")
    let src_on=src_off.replace('_off','_on'); //("./img/menu01_off.png")에서 _off을 찾아 _on으로 바꿈 ="./img/menu01_on.png"
    a.hover(function(){ //마우스 올리는 대상
        img.attr('src',src_on); //img의 속성값 src를 변수 src_on으로  =  "./img/menu01_on.png"로 바꿈
    },function(){
        img.attr('src',src_off); //벗어나면 다시 변수 src_off로 = "./img/menu01_off.png"
    })
});