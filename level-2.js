$(document).ready(function() {
    $('#scene').prepend('<img src="cafeteria.jpeg"/>')
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
    $('#item_4').css({
        top: 300,
        left: 550
    });
});

function clickityClick(currentObject) {
    this.currentObject = currentObject;
    var currentFirstChild = currentObject.children('p:first');

    if (currentFirstChild.is('#exit')) {
        if (($.inArray('doorkey', inToolbox)) > -1) {
            gameOver = true;
        } else {
            changeCommentary('(2c) sorry, you need the key first');
        }
    } else if (currentFirstChild.is('#souppot')) {
        if (($.inArray('ladle', inToolbox)) > -1) {
            changeCommentary('(2d) you found the key');
            removeObject(currentFirstChild);
        } else {
            changeCommentary('(2e) oh no the soup is too hot! we need something to scoop out the tool');
        }
    }
};

function removeObject(currentFirstChild) {
    this.currentFirstChild = currentFirstChild;
    currentFirstChild.remove();
    currentFirstChild = currentObject.children('p:first');
    currentFirstChild.removeClass('hidden');
}

function getLevel() {
    return 2;
}

function getSolution() {
    return '1 - click on the ladle to add to toolbox, 2 - click on soup with ladle in toolbox to fish key out of soup, 3 - click on door with key in toolbox';
}
