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

function clickityClick(currentObject, currentFirstChild) {
    this.currentObject = currentObject;
    var current = currentFirstChild;

    if (current.is('#exit')) {
        if (($.inArray('doorkey', inToolbox)) > -1) {
            gameOver = true;
        } else {
            changeCommentary('(1d) sorry, you need the key first');
        }
    } else {
        if (currentFirstChild.is('#fishbowl')) {
            changeCommentary('(1e) you found the key');
        }
        current.remove();
        current = currentObject.children('p:first');
        current.removeClass('hidden');
    }

};

function getLevel() {
    return 1;
}

function getSolution() {
    return '1 - find key in fishbowl, 2 - add key to toolbox, 3 - get to the door';
}
