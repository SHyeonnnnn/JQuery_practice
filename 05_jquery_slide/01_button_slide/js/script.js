let btnSlide=$('.slideUl>li'); //움직일 슬라이드
let pagerBtn=$('.pagerBtn>li'); //페이저 버튼
let leftBtn=$('.prev');
let rightBtn=$('.next');
let current=0;
let btnSlideInterval;

autoSlide();
function autoSlide(){                        //아래의 기능 실행하는 함수
    btnSlideInterval=setInterval(function(){ //btnSlideInterval=아래 함수를 2초마다 반복하라는setInterval을 담음
            let prev=btnSlide.eq(current);   //prev=current번째 슬라이드
            let prevBtn=pagerBtn.eq(current);//이전버튼=current번째 페이저 버튼

            move(prev, 0, '-100%');          //move 함수 실행. 0번째 슬라이드를 left 0 에서 left -100%로 0.5초동안 애니메이션으로 옮긴다.
            prevBtn.removeClass('on');       //그리고 0번째(이전)페이저버튼에서 on 클래스 삭제(비활성화)
            current++;                       //current 1증가
            if(current==btnSlide.size()){    //만약에 current가 슬라이드의 자식수와 같으면 current=0으로 (끝나면 원점으로라는 뜻)
                current=0;
            };

            let next=btnSlide.eq(current);   //1번째(다음) 슬라이드
            let nextBtn=pagerBtn.eq(current);//1번째(다음) 페이저 버튼
            move(next, '100%', 0);           //무브함수 실행해서 다음 슬라이드 넥스트 left 100%시작해서 0으로 0.5초동안 애니메이션으로 옮긴다.
            nextBtn.addClass('on');          //1번째(다음)페이저 버튼에 클래스 on 추가 (css 활성화)--------반복후 if문에 의해 무한 반복
        },2000);
};
//move 함수 변수
function move(tg, start, end){                           //move 함수 변수는 tg , start ,  end 다.
    tg.css('left',start).stop().animate({left:end},500); //tg의 css를 left 
};

//슬라이드 정지
$('.slide').hover(function(){
        clearInterval(btnSlideInterval)
}, function(){
        autoSlide();
});

//    오른쪽버튼
rightBtn.click(function(){                      //위와 동일한 기능을 버튼 누르면 수행
        let prev=btnSlide.eq(current);
        let prevBtn=pagerBtn.eq(current);

        move(prev, 0, '-100%');                 //left 0에서 -100%
        prevBtn.removeClass('on');
        current++;
        if(current==btnSlide.size()){
            current=0;
        }

        let next=btnSlide.eq(current);
        let nextBtn=pagerBtn.eq(current);
        move(next, '100%', 0);                  //left 100%에서 0
        nextBtn.addClass('on');
    });
//    왼쪽 버튼
    leftBtn.click(function(){
        let prev=btnSlide.eq(current);
        let prevBtn=pagerBtn.eq(current);

        move(prev, 0, '100%');                 //0번째 슬라이드를 left 0에서 100%로 옮김
        prevBtn.removeClass('on');
        current--;                             //current는 1씩 마이너스
        if(current==-btnSlide.size()){         //current가 슬라이드의 -총갯수 이면
            current=0;                         //원점으로 
        }

        let next=btnSlide.eq(current);
        let nextBtn=pagerBtn.eq(current);
        move(next, '-100%', 0);                //1번째 슬라이드(다음)를 left -100%에서 0으로 옮김
        nextBtn.addClass('on');
    });


    function move2(i){                                                    //여기서 i는 밑의 페이저버튼 클릭 함수의 클릭하는버튼의 인덱스임
        if(current==i) return;                                            //현재 보이는 이미지가 내가 클릭한것과 같으면 종료
        let currentEl=btnSlide.eq(current);
        let nextEl=btnSlide.eq(i);
        currentEl.css('left','0').stop().animate({left:'100%'},500);
        nextEl.css('left','-100%').stop().animate({left:0},500);
        current=i;
    };
    function move1(i){                                                    //여기서 i는 밑의 페이저버튼 클릭 함수의 클릭하는버튼의 인덱스임
        if(current==i) return;                                            //내가 클릭한 버튼의 순번이 슬라이드와 순번이 같으면 리턴(한마디로 버튼 동작안함)
        let currentEl=btnSlide.eq(current);                               //current번째 슬라이드
        let nextEl=btnSlide.eq(i);                                        //i번째 슬라이드
        currentEl.css('left','0').stop().animate({left:'-100%'},500);     //current번째 슬라이드를 left 0에서 -100%로 옮김
        nextEl.css('left','100%').stop().animate({left:0},500);           //i번째 슬라이드를 left 100% 에서 0으로 옮김
        current=i;                                                        //current=i == current를 옮겨진 슬라이드 순번과 같게 만들어 이함수를 반복하게 함
    };

    pagerBtn.click(function(){            //페이저버튼 함수
        let tg=$(this);                   //tg=클릭하는버튼
        let i=tg.index();                 //i는 버튼의 인덱스
        pagerBtn.removeClass('on');       //모든버튼에 on 삭제(비활성화)
        tg.addClass('on');                //클릭한거만 활성화
        if(current>i){                    //current가 버튼의 인덱스보다 작으면
            move2(i);                     //move2 함수 실행
        }else{
            move1(i);                     //같거나 크면 move1 실행
        };
    });