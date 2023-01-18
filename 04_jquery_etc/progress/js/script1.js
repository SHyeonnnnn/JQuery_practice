let progressWrap=$('.progress-bar');
let progressbar=progressWrap.find('.bar');
let progressnum=progressWrap.find('.num');
let progressdata_num=progressnum.attr('data-num');

progressbar.animate({width:progressdata_num +'%'},2000);

//1번 


var comma_separator_number_step = $.animateNumber.numberStepFactories.append(' %')
progressnum.animateNumber(
  {
    number: progressdata_num,
    numberStep: comma_separator_number_step
  },2000
);