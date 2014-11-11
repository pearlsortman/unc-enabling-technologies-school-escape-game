$(document).ready(function() {
	var e = jQuery.Event("keydown");
	e.which = 50; // # Some key code value
	$("input").trigger(e);
});

function whatNow() {
	// ready to play or watch demo again?
}