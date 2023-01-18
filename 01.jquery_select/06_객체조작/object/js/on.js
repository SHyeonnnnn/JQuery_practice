$('.btn1').on('mouseover focus',function(){
    $('span').text('welcom');
});

$('.btn1').on({"mouseout blur": function(){
    $('span').text('');
}});

$('.btn2').on({'mouseover':function(){
    $('p').html('<strong>손치워</strong>');
},'focus':function(){
    $('p').html('뭘봐');
},'mouseout':function(){
    $('p').html('<strong>옳지</strong>');
}});



$('.btn3').on({'mouseover focus':function(){
    $('.b3').css('color','red');
},'mouseout':function(){
    $('.b3').css('color','black');
}});



$('.btn4').on({'mouseover':function(){
    $('.b4').css('color','yellow');
},'focus':function(){
    $('.b4').css('color','green');
},'mouseout':function(){
    $('.b4').css('color','red');
}});