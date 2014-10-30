var newCommentary;

$(document).ready(function() {
    console.log( "ready!" );
    changeCommentary("more random shit");
    activeElement('#item_1');
});

function changeCommentary(newCommentary) {
	$('#text').text('newCommentary');
};	

function activeElement(elementID) {
	$('elementID').css("border", "red");
	console_log("activate");
};