$('#stick').animate({top:'720px'},1000).animate({top:600},300);
$('#ball100').delay(1130).animate({top:'260px'},400);
// $('#ball01').delay(1000).animate({top:ran+'px'},500);

$(function(){
    function ran(min, max){
        min=Math.floor(min);
        max=Math.ceil(max);
        return Math.floor(Math.random()*(max-min))+min;
    }
    $('#ball01').delay(1500).animate({top: ran(500,1), left: ran(500,1)},100);
    $('#ball02').delay(1500).animate({top: ran(15,260), left: ran(1,480)},300);
    $('#ball03').delay(1500).animate({top: ran(15,260), left: ran(1,480)},300);
    $('#ball04').delay(1500).animate({top: ran(15,260), left: ran(1,480)},300);
    $('#ball05').delay(1500).animate({top: ran(15,260), left: ran(1,480)},300);
    $('#ball06').delay(1500).animate({top: ran(15,260), left: ran(1,480)},300);
    $('#ball07').delay(1500).animate({top: ran(15,260), left: ran(1,480)},300);
    $('#ball08').delay(1500).animate({top: ran(15,260), left: ran(1,480)},300);
    $('#ball09').delay(1500).animate({top: ran(15,260), left: ran(1,480)},300);
    $('#ball10').delay(1500).animate({top: ran(15,260), left: ran(1,480)},300);
    $('#ball11').delay(1500).animate({top: ran(15,260), left: ran(1,480)},300);
    $('#ball12').delay(1500).animate({top: ran(15,260), left: ran(1,480)},300);
    $('#ball13').delay(1500).animate({top: ran(15,260), left: ran(1,480)},350);
    $('#ball14').delay(1500).animate({top: ran(15,260), left: ran(1,480)},350);
    $('#ball15').delay(1500).animate({top: ran(15,260), left: ran(1,480)},350);
});



// $(function(){
//     let ranNum1=Math.random();
//     let ranNum2=Math.random();
//     let ranNum3=Math.random();
//     let ranNum4=Math.random();
//     let ranNum5=Math.random();
//     let ranNum6=Math.random();
//     let ranNum7=Math.random();
//     let ranNum8=Math.random();
//     let ranNum9=Math.random();
//     let ranNum10=Math.random();
//     let ranNum11=Math.random();
//     let ranNum12=Math.random();
//     let ranNum13=Math.random();
//     let ranNum14=Math.random();
//     let ranNum15=Math.random();
//     // let ranTop=Math.floor(ranNum*240+15);
//     // let ranLeft=Math.floor(ranNum*480+1);
//     $('#stick').animate({top:'300px'},1000);
//     $('#ball100').animate({top:'260px'},1000);
//     $('#ball01').delay(1000).animate({top: ranNum1*240+150+'px', left: ranNum1*480+1+'px'},500);
//     $('#ball02').delay(1000).animate({top: ranNum2*230+15+'px', left: ranNum2*470+1+'px'},500);
//     $('#ball03').delay(1000).animate({top: ranNum3*220+15+'px', left: ranNum3*460+1+'px'},500);
//     $('#ball04').delay(1000).animate({top: ranNum4*210+15+'px', left: ranNum4*450+1+'px'},500);
//     $('#ball05').delay(1000).animate({top: ranNum5*210+15+'px', left: ranNum5*450+1+'px'},500);
//     $('#ball06').delay(1000).animate({top: ranNum6*210+15+'px', left: ranNum6*450+1+'px'},500);
//     $('#ball07').delay(1000).animate({top: ranNum7*210+15+'px', left: ranNum7*450+1+'px'},500);
//     $('#ball08').delay(1000).animate({top: ranNum8*210+15+'px', left: ranNum8*450+1+'px'},500);
//     $('#ball09').delay(1000).animate({top: ranNum9*210+15+'px', left: ranNum9*450+1+'px'},500);
//     $('#ball10').delay(1000).animate({top: ranNum10*210+15+'px', left: ranNum10*450+1+'px'},500);
//     $('#ball11').delay(1000).animate({top: ranNum11*210+15+'px', left: ranNum11*450+1+'px'},500);
//     $('#ball12').delay(1000).animate({top: ranNum12*210+15+'px', left: ranNum12*450+1+'px'},500);
//     $('#ball13').delay(1000).animate({top: ranNum13*210+15+'px', left: ranNum13*450+1+'px'},500);
//     $('#ball14').delay(1000).animate({top: ranNum14*210+15+'px', left: ranNum14*450+1+'px'},500);
//     $('#ball15').delay(1000).animate({top: ranNum15*210+15+'px', left: ranNum15*450+1+'px'},500);
// })