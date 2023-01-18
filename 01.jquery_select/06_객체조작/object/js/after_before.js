
$('#wrap p:eq(2)').after("<p>After로 추가</p>");
$('#wrap p:eq(0)').before("<p>before로 추가</p>");

$("<p>insertAfter 추가</p>").insertAfter("#wrap p:eq(1)");
$("<p>insertBefore 추가</p>").insertBefore("#wrap p:eq(0)");