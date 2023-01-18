var $txt1=$('.txt_1 span');
var $txt2=$('.txt_2 span');
var $txt3=$('.txt_3 span');
var $box=$('.box');

var off_t=$box.offset().top;
$txt1.text(off_t);
var pos_t=$box.position().top;
$txt2.text(pos_t);
var pos_t1=$box.position().left;
$txt3.text(pos_t1);