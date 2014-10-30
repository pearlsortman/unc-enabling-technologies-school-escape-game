$(document).ready(function() {
	alert("ready function working");
    console.log( "ready!" );
    changeCommentary("more random shit");
    activeElement('#item_1');
});

function changeCommentary(newCommentary) {
	$('#text').text('newCommentary');
};	

function activeElement(elementID) {
	$('elementID').css("border", "red");
};