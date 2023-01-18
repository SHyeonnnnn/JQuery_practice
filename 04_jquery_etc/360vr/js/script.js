let imageList=$('#slideList>p');
$( "#slider" ).slider({
    slide:function(event, ui){
        let max=$('#slider').slider('option','max');
        // console.log('max:'+max);
        let min=$('#slider').slider('option','min');
        // console.log('min:'+min);
        let end=imageList.size()-1;
        // console.log('end:'+end);
        let imgIndex=parseInt((ui.value * end )/max);
        // console.log('imgIndex:'+imgIndex);
        imageList.css('display','none');
        imageList.eq(imgIndex).css('display','block');
    }
});