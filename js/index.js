var focused = -1;
var focusObject;

$(document).ready(function() {

	$('.clickable').on('mouseenter mouseleave', function() {
        $(this).toggleClass('entered');
    });
    
    // allows keyboard accessibility with multiple key options (2-switch accessible)
    $(document).keydown(function(e) {
        if (e.keyCode == 9 || e.keyCode == 39 || e.keyCode == 32) { // tab=9, right arrow=39, space=32 <<<< TAB KEYS

            e.preventDefault();
            $('.clickable').removeClass('entered');
            focused = (focused + 1) % $('.clickable').length;
            focusObject = $('.clickable').get(focused);
            $(focusObject).addClass('entered');

        } else if (e.keyCode == 13 || e.keyCode == 37) { // enter=13, left arrow=37 <<<< ENTER KEYS
            $(focusObject).trigger('click');
        }
    });

    $('.clickable').click(function() {
        if (this.id=='demo') {
        	window.location.replace('demo.html');
        } else if (this.id=='play') {
        	window.location.replace('L1.php');
        } else if (this.id=='level') {
            window.location.replace('choose-a-level.html');
        } else if (this.id=='L1') {
            window.location.replace('L1.php');
        } else if (this.id=='L2') {
            window.location.replace('L2.php');
        } else if (this.id=='L3') {
            window.location.replace('L3.php');
        } else if (this.id=='L4') {
            window.location.replace('L4.php');
        } else if (this.id=='L5') {
            window.location.replace('L5.php');
        } else if (this.id=='L6') {
            window.location.replace('L6.php');
        } else if (this.id=='L7') {
            window.location.replace('L7.php');
        } else if (this.id=='L8') {
            window.location.replace('L8.php');
        } else if (this.id=='home') {
            window.location.replace('index.html');
        }
    });

});