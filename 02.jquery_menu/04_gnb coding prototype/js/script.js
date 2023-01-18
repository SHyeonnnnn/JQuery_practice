$('nav>ul>li>a').on({
    "mouseover focusin":function(){
        $(this).next("ul").stop().slideDown(300)
},
"mouseout":function(){
    $(this).next("ul").stop().slideUp(300)
}
});
$('nav>ul>li ul li:last-child ').focusout(function(){
    $(this).parent('ul').stop().slideUp(300);
})