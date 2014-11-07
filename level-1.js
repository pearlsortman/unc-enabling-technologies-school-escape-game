$(document).ready(function() {
    $('#scene').prepend('<img src="Typical-Classroom-Interior.jpg"/>')
    $('#item_1').css({
        top: 50,
        left: 50
    });
    $('#item_2').css({
        top: 100,
        left: 200
    });
    $('#item_3').css({
        top: 300,
        left: 350
    });
});

function clickityClick(currentObject) {
    this.currentObject = currentObject;
    if (currentObject.hasClass('dummy')) {
        if (currentObject.children('p').is('#desk')) {
            changeCommentary('sorry, nothing in the desk right now');
        }
    } else {
        if (currentObject.children('p:first').hasClass('tool')) {
            moveToToolbox(currentObject.children('p:first'));
            currentObject.remove();
        } else {
            if (currentObject.children('p').is('#exit')) {
                if (($.inArray('key', inToolbox)) > -1) {
                    gameOver = true;
                } else {
                    changeCommentary('sorry, you need the key first');
                }
            } else {
                if (currentObject.children('p').is('#fishbowl')) {
                    changeCommentary('you found the key');
                }
                currentObject.children('p:first').remove();
                currentObject.children('p:first').removeClass('hidden');
            }
        }
    }
};

function getLevel() {
    return 1;
}

function getSolution() {
	return '1 - find key in fishbowl, 2 - add key to toolbox, 3 - get to the door';
}