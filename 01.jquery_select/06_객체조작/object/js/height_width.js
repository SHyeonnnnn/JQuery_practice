var wid1=$('#p1').width(); //width
var wid2=$('#p1').innerWidth(); //padding + width
var wid3=$('#p1').outerWidth(); //border + padding + width
console.log(wid1);
console.log(wid2);
console.log(wid3);

$('#p2').hover(function(){
    $(this).outerWidth(500).outerHeight(450);
},function(){
    $(this).outerWidth(400).outerHeight(350);
})