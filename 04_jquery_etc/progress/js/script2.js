let progressWrap=$('.progress-bar');
let progressbar=progressWrap.find('.bar');
let progressnum=progressWrap.find('.num');
let progressdata_num=progressnum.attr('data-num');

$('.progress-bar').each(function(){
    let progressWrap=$(this);
    let progressbar=progressWrap.find('.bar');
    let progressnum=progressWrap.find('.num');
    let progressdata_num=progressnum.attr('data-num');

    // console.log(progressdata_num)
    progressbar.animate({width:progressdata_num +'%'},2000);

    setInterval(textAni, 1000/10);
    function textAni(){
        let currentWidth=progressbar.width() /progressWrap.width() *100;
        progressnum.text(Math.ceil(currentWidth)+'%')
    }
});