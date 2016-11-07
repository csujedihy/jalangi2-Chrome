// Mobile menu
$( '#mobile-nav' ).on( 'click', '#mobile-nav-menu a', function(e) {
var el = $( this ),
div = $(this).data("div"),
speed = $(this).data("speed");

if ( el.hasClass( 'home-button' ) )
return true;

e.preventDefault();
$(div).slideToggle(speed);
} );

var x = document.getElementById("mobile-search-box");
function blurValue(value){
if(value == "" || value == " "){
x.value = "Type here to search";
}
}
function focusValue(){
x.value = "";
}

$navButtons = $('#mobile-nav-menu').find('a'); //maybe could write as $('#mobileNavMenu a')

$navButtons.click(function(){
var $this = $(this);

if ( $this.hasClass('current') ) {
//close/unhighlight this one
$($(this).data('div')).slideUp();
$this.removeClass('current');
}
else {
//close/unhighlight everything else
$navButtons.find('.current').each(function() {
$($(this).data('div')).slideUp(); //find out what its data div is, and hide it
$(this).removeClass('current');
});

//open/highlight this one
$(this).addClass('current');
$($(this).data('div')).slideDown();
}

return false;
});