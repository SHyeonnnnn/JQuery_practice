$('.tabSet').each(function(){                       //.tabSet 안에서 실행되는 반복문
    let tapDiv=$(this);                             //.tabSet=tapDiv
    let anchors=tapDiv.find('.tabs li a');          // 탭버튼
    let panelDivs=tapDiv.find('.panel')             // 본문텍스트
    let lastAnchor;                                 
    let lastPanel;

    lastAnchor=anchors.filter('.on');               //탭버튼에서 .on 클래스 달려있는 탭버튼
    lastPanel=$(lastAnchor.attr('href'));           //그밑의 본문텍스트

    panelDivs.hide();                               //본문 다 숨김
    lastPanel.show();                               //.on 달려있는 탭버튼 본문텍스트는 보이기

    anchors.click(function(e){                         //탭버튼 클릭하면 발생하는 함수e(tab누르면 발동하는 기능)
        e.preventDefault();                            //a href=# 무효화
        let currentAnchor=$(this);                     //클릭하는 탭버튼
        let currentPanel=$(currentAnchor.attr('href'));//클릭하는 탭버튼의 본문텍스트
        lastAnchor.removeClass('on');                  //기능1. 기존.on 달려있는 탭버튼에서 .on삭제(비활성화)
        currentAnchor.addClass('on');                  //기능2. 클릭하는 대상에 클래스 .on추가 (탭버튼 활성화)
        lastPanel.hide();                              //기능3. 기존 .on 본문텍스트 숨기고
        currentPanel.show();                           //기능4. 클릭 탭버튼 본문텍스트 보이기
                                                       //클릭한 탭버튼에 on추가하고 기존것은 지우기까지 완료 그리고나서 
        lastAnchor=currentAnchor;                      //기능5. lastAnchor를 클릭한탭버튼으로 재정의
        lastPanel=currentPanel;                        //기능6. lastPanel을 클릭한탭버튼 본문으로 재정의
    });
});
