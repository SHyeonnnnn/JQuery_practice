$(function(){
    let btnSlide=$('.n-slide>li'); 
    let pagerBtn=$('.pager-num>p');
    let leftBtn=$('.prev');
    let rightBtn=$('.next');
    let current=0;
    let btnSlideInterval;
 
   
    autoSlide();
    function autoSlide(){
     btnSlideInterval= setInterval(function(){
             let prev=btnSlide.eq(current);
             let prevBtn=pagerBtn.eq(current);
 
             move(prev, 0, '-100%');
             prevBtn.removeClass('on');

             current++;
             if(current==btnSlide.size()){
                 current=0;
             }
 
             let next=btnSlide.eq(current);
             let nextBtn=pagerBtn.eq(current);
             move(next, '100%', 0);
             nextBtn.addClass('on');
         },2000);
    }    
    function move(tg, start, end){
     tg.css('left',start).stop().animate({left:end},500);
    }
 
    //멈춤
    $('.visual').hover(function(){
         clearInterval(btnSlideInterval)
    }, function(){
         autoSlide();
    });
 
 
 //    오른쪽버튼
    rightBtn.click(function(){
        let prev=btnSlide.eq(current);
        let prevBtn=pagerBtn.eq(current);

        move(prev, 0, '-100%');
        prevBtn.removeClass('on');
        current++;
        if(current==btnSlide.size()){
            current=0;
        }

        let next=btnSlide.eq(current);
        let nextBtn=pagerBtn.eq(current);
        move(next, '100%', 0);
        nextBtn.addClass('on');
     });
     leftBtn.click(function(){
         let prev=btnSlide.eq(current);
         let prevBtn=pagerBtn.eq(current);
 
         move(prev, 0, '100%');
         prevBtn.removeClass('on');
         current--;
         if(current==-btnSlide.size()){
             current=0;
         }
 
         let next=btnSlide.eq(current);
         let nextBtn=pagerBtn.eq(current);
         move(next, '-100%', 0);
         nextBtn.addClass('on');
     });
 
 });