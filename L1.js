$(document).ready(function() {
    $('#scene').prepend('<img src="L1.jpg"/>')
    $('#item_1').css({ //fishbowl & doorkey
        top: 50,
        left: 50
    });
    $('#item_2').css({ //desk
        top: 100,
        left: 200
    });
    $('#item_3').css({ //door
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
    } else if (currentFirstChild.is('#fishbowl')) {
        changeCommentary('(1e) you found the key');
        removeObject(currentFirstChild);
    }

};

function getLevel() {
    return 1;
}

function getSolution() {
    var s1 = '1: find key in fishbowl; ';
    var s2 = '2: add key to toolbox; ';
    var s3 = '3: get to the door with key in toolbox';
    return s1 + s2 + s3;
}