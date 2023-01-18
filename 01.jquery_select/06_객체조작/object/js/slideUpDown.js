$('.container').hover(function(){
    $(this).find('.slide').stop().slideDown(3000);
},function(){
    $(this).find('.slide').stop().slideUp(3000);
});