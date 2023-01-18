$('nav>ul>li>a').on({
    "mouseover focusin":function(){
        $('nav>ul>li>a').next("ul").stop().slideDown(300)
},
"mouseout":function(){
    $('nav>ul>li>a').next("ul").stop().slideUp(300)
}
});
$('nav>ul>li ul li:last-child').focusout(function(){
    $('nav>ul>li ul li:last-child').parent('ul').stop().slideUp(300);
})