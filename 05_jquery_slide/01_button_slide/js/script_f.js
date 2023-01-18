let btnSlide=$('.slideUl>li');
let pagerBtn=$('.pagerBtn>li');
let leftBtn=$('.prev');
let rightBtn=$('.next');
let current=0;
let btnSlideInterval;

autoSlide();
function autoSlide(){
    btnSlideInterval=setInterval(function(){//아래함수를 2초마다 반복하라는 뜻 /
    let prev=btnSlide.eq(current);
    let prevBtn=pagerBtn.eq(current);

    move(prev,0,'-100%');
    prevBtn.removeClass('on');
    current++;
    if(current==btnSlide.size()){
        current=0;
    }

    let next=btnSlide.eq(current);
    let nextBtn=pagerBtn.eq(current);
    move(next,'100%',0);
    nextBtn.addClass('on');
},2000);
};
function move(tg,start,end){
    tg.css('left',start).stop().animate({left:end},500);
};


//멈춤
$('.slide').hover(function(){
     clearInterval(btnSlideInterval)
},function(){
    autoSlide();
});

// 오른쪽버튼
rightBtn.click(function(){
    let prev=btnSlide.eq(current);
    let prevBtn=pagerBtn.eq(current);

    move(prev,0,'-100%');
    prevBtn.removeClass('on');
    current++;
    if(current==btnSlide.size()){
        current=0;
    }

    let next=btnSlide.eq(current);
    let nextBtn=pagerBtn.eq(current);
    move(next,'100%',0);
    nextBtn.addClass('on');
});
// 왼쪽쪽버튼 --------------------------잘못된부분
leftBtn.click(function(){
    let next=btnSlide.eq(current);
    let nextBtn=pagerBtn.eq(current);

    move(next,0,'100%');
    nextBtn.removeClass('on');
    current++;
    if(current==-btnSlide.size()){
        current=0;
    }

    let prev=btnSlide.eq(current);
    let prevBtn=pagerBtn.eq(current);
    move(prev,'-100%',0);
    prevBtn.addClass('on');
});

function move1(i){
    if(current==i) return; //현재 보이는 이미지가 내가 클릭한것과 같으면 종료
    let currentEl=btnSlide.eq(current);
    let nextEl=btnSlide.eq(i);
    currentEl.css('left','0').stop().animate({left:'-100%'},500);
    nextEl.css('left','100%').stop().animate({left:0},500);
    current=i;
};
function move1(i){
    if(current==i) return; //현재 보이는 이미지가 내가 클릭한것과 같으면 종료
    let currentEl=btnSlide.eq(current);
    let nextEl=btnSlide.eq(i);
    currentEl.css('left','0').stop().animate({left:'-100%'},500);
    nextEl.css('left','100%').stop().animate({left:0},500);
    current=i;
};
pagerBtn.click(function(){
    let tg=$(this);
    let i=tg.index();
    pagerBtn.removeClass('on');
    tg.addClass('on');
    move1(i);
});