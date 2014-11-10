$(document).ready(function() {
    $('#scene').prepend('<img src="L3.jpg"/>')
    $('#item_1').css({ //equation & answer
        top: 50,
        left: 50
    });
    $('#item_2').css({ //math poster
        top: 100,
        left: 200
    });
    $('#item_3').css({ //math book
        top: 300,
        left: 350
    });
    $('#item_4').css({ //safe & doorkey
        top: 300,
        left: 550
    });
    $('#item_5').css({ //door
        top: 75,
        left: 500
    });
});

function clickityClick(currentObject, currentFirstChild) {
    this.currentObject = currentObject;
    var current = currentFirstChild;

    if (current.is('#exit')) {
        if (($.inArray('doorkey', inToolbox)) > -1) {
            gameOver = true;
        } else {
            changeCommentary('(3c) ');
        }
    } else if (current.is('#equation')) {
        if (($.inArray('mathbook', inToolbox)) > -1) {
            changeCommentary('(3d) ');
            removeObject(current);
        } else {
            changeCommentary('(3e) ');
        }
    } else if (current.is('#safe')) {
        if (($.inArray('answer', inToolbox)) > -1) {
            changeCommentary('(3f) yay, you cracked the safe!');
            removeObject(current);
        } else {
            changeCommentary('(3g) solve equation first and add answer to toolbox');
        }
    }

};

function getLevel() {
    return 3;
}

function getSolution() {
    var step1 = '1: click on the book to reveal saying; ';
    var step2 = '2: click on blackboard equation to solve automatically, solution moves to toolbox; ';
    var step3 = '3: click on safe with solution in toolbox; ';
    var step4 = '4: safe contains key, click on key to move to toolbox; ';
    var step5 = '5: click on door with key in toolbox';
    return step1 + step2 + step3 + step4 + step5;
}