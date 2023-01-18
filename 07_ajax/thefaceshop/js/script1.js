$(function(){
    let a=[]; //전체공지 배열 선언 2차원 글번호, 구분, 제목 날짜
    let b=[]; //쇼핑공지 배열 선언 2차원 글번호, 구분, 제목 날짜
    let c=[]; //브랜드공지 배열 선언 2차원 글번호, 구분, 제목 날짜
    let n=-1;  //쇼핑공지 필터링 카운트 변수
    let m=-1;  //브랜드공지 필터링 카운트 변수
    let txt="";  //출력할 배열 내용 변수
    let cnt=0; //글번호 변수
    let imgNum=''; //구분이미지 변수

    let noticeBtNum=0;  //필터링 변수 전체공지=0; 쇼핑공지=1, 브랜드공지=2
    let totRecod=0;   // 전체 레고드 개수 전체공지=200, 쇼핑공지=150개, 브랜드공지 = 50
    let list=5; //한 화면에 보여질 목록 개수(40묶음)
    let startRecord=0; //1페이지 시작 번호
    let endRecord=startRecord+list;//1페이지에 끝 번호 

    let totPage=0; //전체 페이지 40(200/5)페이지 쇼핑 (150/5)=30페이지, 브랜드(50/5)=10페이지
    let group=1; //그룹번호
    let currentPage=0 ; //현재페이지에서 페이지 표시할 addClass사용 버튼 변수


    $.ajax({
        url: './data/notice.json',
        dataType:'JSON',
        success:function(data){
           // console.log(data)
           $.each(data.공지사항, function(idx, obj){
                a[idx]=[] //ide=0~199
                if(obj.구분=='쇼핑'){
                    imgNum="<img src='./img/icon_notice1.gif' alt='쇼핑'>";
                }else{
                    imgNum="<img src='./img/icon_notice2.gif' alt='브랜드'>";
                }

                a[idx][0]=idx+1;
                a[idx][1]=imgNum;
                a[idx][2]=obj.제목;
                a[idx][3]=obj.날짜;

                //필터링 쇼핑공지
                if(obj.구분=='쇼핑'){
                    n++;
                    b[n]=[] 

                    b[n][0]=n+1;
                    b[n][1]=imgNum;
                    b[n][2]=obj.제목;
                    b[n][3]=obj.날짜;

                }
                 //필터링 브랜드공지
                 if(obj.구분=='브랜드'){
                    m++;
                   c[m]=[];

                    c[m][0]=m+1;
                    c[m][1]=imgNum;
                    c[m][2]=obj.제목;
                    c[m][3]=obj.날짜;

                }
           }); //each end
           //필터 버튼 클릭 이벤트
           $('.noticeBt').each(function(index){
                $(this).on({click: function(){
                    startRecord=0;
                    endRecord=startRecord+list;
                    noticeBtNum=index; //클릭된 번호
                    noticeFn();
                    $('.noticeBt').removeClass('addNav');
                    $(this).addClass('addNav');
                }
                });
           }); 
           
           noticeFn();
           //공지사항 메인 함수
           function noticeFn(){
                if(noticeBtNum==0){ //전체공지
                    totRecod=a.length;
                    cnt=a.length;
                    for(i=0; i<a.length; i++){
                        a[i][0]=cnt;
                        cnt--;
                    }
                    for(i=startRecord; i<endRecord; i++){
                        txt += "<tr>";
                        for(j=0; j<4; j++){
                            txt +="<td>"+a[i][j]+"</td>";
                        }
                        txt += "</tr>";
                    }

                }else if(noticeBtNum==1){ //쇼핑공지
                    totRecod=b.length;
                    cnt=b.length;
                    for(i=0; i<b.length; i++){
                        b[i][0]=cnt;
                        cnt--;
                    }
                    for(i=startRecord; i<endRecord; i++){
                        txt += "<tr>";
                        for(j=0; j<4; j++){
                            txt +="<td>"+b[i][j]+"</td>";
                        }
                        txt += "</tr>";
                    }
                }else if(noticeBtNum==2){ //브랜드공지
                    totRecod=c.length;
                    cnt=c.length;
                    for(i=0; i<c.length; i++){
                        c[i][0]=cnt;
                        cnt--;
                    }
                    for(i=startRecord; i<endRecord; i++){
                        txt += "<tr>";
                        for(j=0; j<4; j++){
                            txt +="<td>"+c[i][j]+"</td>";
                        }
                        txt += "</tr>";
                    }
                }
                $('tbody').html(txt);
                txt='';
                cnt=0;
           }
        }
    });

});