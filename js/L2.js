$(document).ready(function() {

    // set up this level as a unique view adding all images and clickable objects
    $('#header h1').text('Level 2: The Cafeteria');
    $('#background').attr('src', 'images/L2.jpg');
    $('#item_1').attr('class', 'clickable', 'tabindex', '1').append('<p class="covering" id="souppot"><img src="images/item.jpg">pot of soup</p><p class="hidden tool" id="doorkey"><img src="images/item.jpg">doorkey</p>');
    $('#item_2').attr('class', 'clickable', 'tabindex', '2').append('<p class="dummy" id="lunchtray">lunch tray</p>');
    $('#item_3').attr('class', 'clickable', 'tabindex', '3').append('<p class="tool" id="ladle"><img src="images/item.jpg">ladle</p>');
    $('#item_4').attr('class', 'clickable', 'tabindex', '4').append('<p class="covering" id="exit"><img src="images/item.jpg">door</p>');
    changeCommentary('L2: initial room blurb');

    $('#item_1').css({ //pot of soup & doorkey
        top: 50,
        left: 50
    });
    $('#item_2').css({ //lunch tray
        top: 100,
        left: 200
    });
    $('#item_3').css({ //ladle
        top: 300,
        left: 350
    });
    $('#item_4').css({ //door
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

function getLevel() {
    return 2;
}

function getSolution() {
    var s1 = '1: click on the ladle to add to toolbox; ';
    var s2 = '2: click on the pot of soup with ladle in the toolbox to fish out the key; ';
    var s3 = '3: click on the door with the key in toolbox';
    return s1 + s2 + s3;
}