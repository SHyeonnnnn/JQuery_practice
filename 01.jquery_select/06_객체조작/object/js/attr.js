// $('.changeThis').attr('src','./img/img2.gif');
$('img').hover(function(){
    $(this).attr('src','./img/img2.gif');
},function(){
    $(this).attr('src','./img/img1.gif');
});