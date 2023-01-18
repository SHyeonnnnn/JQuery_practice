//아이디

$('#id').on({keyup:function(event){
    event.preventDefault();
    //영문+숫자 6~10자 이내
    let regExp=/^(?=.*[A-Za-z])+(?=.*[0-9])+[A-Za-z0-9]{6,10}$/g;
    let idValue=$(this).val().toString();
    if(regExp.test(idValue)===false){
        $(this).addClass('error');
    }else{
        $(this).removeClass('error');
        $(this).next('.point').text('');
    }
},focusout:function(event){
    event.preventDefault();
    let idValue=$(this).val().toString();
    if(idValue===''){
        $(this).removeClass('error');
        $(this).next('.point').text('필수입력값입니다');
    }
}
});

//아이디 중복확인
$('.chkchk').on({click:function(e){
    e.preventDefault();
    let regExp=/^(?=.*[A-Za-z])+(?=.*[0-9])+[A-Za-z0-9]{6,10}$/g;
    if($('#id').val()===''){
        alert('아이디를 입력하세요!');
    }else if(regExp.test($('#id').val())===false){
        alert('아이디를 확인하세요!');
    }
}
});

//비밀번호
$('#pw').on({keyup:function(event){
    event.preventDefault();
    //영문+숫자+특수문자(!@#$) 각 1자이상 포함하여 9~12자 이내
    let regExp=/^(?=.*[A-Za-z])+(?=.*[0-9])+(?=.*[!@#$])+[A-Za-z0-9!@#$]{9,12}$/g;
    let pwValue=$(this).val().toString();
    if(regExp.test(pwValue)===false){
        $(this).addClass('error');
        $(this).next('.point').text('영문+숫자+특수문자(!@#$) 각 1자이상 포함하여 9~12자 이내값만 사용');
    }else{
        $(this).removeClass('error');
        $(this).next('.point').text('');
    }
},focusout:function(event){
    let pwValue=$(this).val().toString();
    if(pwValue===''){
        $(this).removeClass('error');
        $(this).next('.point').text('필수입력값입니다');
    }
}
});
//비밀번호 확인
$('#pw1').on({keyup:function(event){
    event.preventDefault();

    let pwValue=$(this).val().toString();
    if($('#pw').val().toString()===pwValue){
        $(this).removeClass('error');
        $(this).next('.point').text('');
    }else{
        $(this).addClass('error');
        $(this).next('.point').text('비밀번호를 다시 확인해주세요');
    }
},focusout:function(event){
    let pwValue=$(this).val().toString();
    if(pwValue===''){
        $(this).removeClass('error');
        $(this).next('.point').text('필수입력값입니다');
    }
}
});

//분실질문
$('#question').on({
    change:function(e){
        e.preventDefault();
        if($(this).val()==='input'){
            $('#selfinput').addClass('on');
            $('#selfinput').focus();
        }else{
            $('#selfinput').removeClass('on');
        }
    }
});

//전화번호
$('#phone').on({keyup:function(event){
    event.preventDefault();
    let regExp=/^01[06789]{1}[0-9]{3,4}[0-9]{4}$/;
    let phValue=$(this).val().toString();

    if(regExp.test(phValue)===false){
        $(this).addClass('error');
        $(this).next('.point').text('공백 하이픈 없이 숫자만 입력해 주세요');
    }else{
        $(this).removeClass('error');
        $(this).next('.point').text('');
    }
},focusout:function(){
    let phValue=$(this).val().toString();
    if(phValue===""){
        $(this).removeClass('error');
    }
}
});

//팩스
$('#fax').on({keyup:function(event){
    event.preventDefault();
    let regExp=/^0[0-9]{1,3}[0-9]{3,4}[0-9]{4}$/;
    let fxValue=$(this).val().toString();

    if(regExp.test(fxValue)===false){
        $(this).addClass('error');
        $(this).next('.point').text('공백 하이픈 없이 숫자만 입력해 주세요');
    }else{
        $(this).removeClass('error');
        $(this).next('.point').text('');
    }
},focusout:function(){
    let fxValue=$(this).val().toString();
    if(fxValue===""){
        $(this).removeClass('error');
    }
}
});

//email
$('#email').on({keyup:function(event){
    event.preventDefault();
    let regExp=/^[A-Za-z0-9!@#$]{5,10}$/g;
    let emailValue=$(this).val().toString();

    if(regExp.test(emailValue)===false){
        $(this).addClass('error');
        $(this).next('.point').text('주소를 확인하세요');
    }else{
        $(this).removeClass('error');
        $(this).next('.point').text('');
    }
},focusout:function(){
    let emailValue=$(this).val().toString();
    if(emailValue===""){
        $(this).removeClass('error');
    }
}
});

$('#emailselect').on({change:function(){
    if($(this).val()!==''){//value값이 비어있지 않으면(값선택)
        $('#email2').val($(this).val()).prop('disabled',true);//비활성화
        $('#email2').addClass('color');
    }else{
        $('#email2').prop('disabled',false);
        $('#email2').removeClass('color');
        $('#email2').val('').focus();
    }
}
})