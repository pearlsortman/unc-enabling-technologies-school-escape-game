$(document).ready(function() {

    // set up this level as a unique view adding all images and clickable objects
    $('#header h1').text('Level 4: The Math Classroom');
    $('#scene').prepend('<img src="images/L4.jpg"/>');
    $('#item_1').attr('tabindex', '1').append('<p class="covering" id="equation">equation</p><p class="hidden tool" id="answer">answer</p>');
    $('#item_2').attr('tabindex', '2').append('<p class="dummy" id="poster">math poster</p>');
    $('#item_3').attr('tabindex', '3').append('<p class="tool" id="mathbook">mathbook</p>');
    $('#item_4').attr('tabindex', '4').append('<p class="covering" id="safe">safe</p><p class="hidden tool" id="doorkey">doorkey</p>');
    $('#item_5').attr('tabindex', '5').append('<p id="exit">door</p>');
    changeCommentary('L4: initial room blurb');

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
            changeCommentary('you need the key first');
        }
    } else if (current.is('#equation')) {
        if (($.inArray('mathbook', inToolbox)) > -1) {
            changeCommentary('great, you have the knowledge in the math book to solve this equation');
            removeObject(current);
        } else {
            changeCommentary('havent learned to solve this yet');
        }
    } else if (current.is('#safe')) {
        if (($.inArray('answer', inToolbox)) > -1) {
            changeCommentary('yay, you cracked the safe!');
            removeObject(current);
        } else {
            changeCommentary('solve equation first and add answer to toolbox');
        }
    }

};

function getLevel() {
    return 4;
}

function getSolution() {
    var step1 = '1: click on the book to reveal saying; ';
    var step2 = '2: click on blackboard equation to solve automatically, solution moves to toolbox; ';
    var step3 = '3: click on safe with solution in toolbox; ';
    var step4 = '4: safe contains key, click on key to move to toolbox; ';
    var step5 = '5: click on door with key in toolbox';
    return step1 + step2 + step3 + step4 + step5;
}