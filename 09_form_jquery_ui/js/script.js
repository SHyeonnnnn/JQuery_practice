$('#location').selectmenu();

var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme",
    "HTML",
    "css"
  ];
  $( "#category" ).autocomplete({
    source: availableTags
  });

//spinner
var spinner = $( "#spinner" ).spinner({
    min: 0,
    max:20,
    step: 2
});

$( "#datepicker" ).datepicker({
    minDate: new Date(),
    maxDate: " +2w"

});
/* $( "#datepicker" ).datepicker('setDate',new Date() );
 */
$( "input[type='radio']" ).checkboxradio();


//button
$( "#submit" ).button();

//progress
$( "#progress" ).progressbar({
  value: 0
});

$('input').change(function(){
    updateProgress();
})
updateProgress();
function updateProgress(){
    let progress=0;
    let itemCount=5;
    let itemCompleted=0;

    let $location=$('#location option:selected').val();
    let $category=$('#category').val();
    let $spinner=$('#spinner').val();
    let $datepicker=$('#datepicker').val();
    let $referrer=$('input[type="radio"]:checked').val();

    if($location) itemCompleted++;
    if($category) itemCompleted++;
    if($spinner) itemCompleted++;
    if($datepicker) itemCompleted++;
    if($referrer) itemCompleted++;

    progress=itemCompleted/itemCount*100;

    $( "#progress" ).progressbar("option", "value", progress);
    $('.pct span').text(progress);
    if(progress==100){
        $("#submit").button({
            disabled:false
        })
    }


}