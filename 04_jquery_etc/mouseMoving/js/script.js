const galleryWrap=$('.gallery-wrap>ul');
let offsetL=galleryWrap.offset().left;
galleryWrap.on({mousemove(e){
    $(this).css({left: -e.pageX +offsetL})
}})