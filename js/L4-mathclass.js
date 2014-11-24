$(document).ready(function() {

    // set up this level as a unique view adding all images and clickable objects
    $('#header h1').text('Level 4: The Math Classroom');
    $('#background').attr('src', 'images/backgrounds/L4.jpg');

    $('#item_0').append('<p class="covering" id="equation">equation<img src="images/equation.png"></p>\
                        <p class="hidden tool" id="answer">answer<img src="images/answer.png"></p>');
    $('#item_1').append('<p class="dummy" id="poster">math poster</p>');
    $('#item_2').append('<p class="tool" id="mathbook">mathbook<img src="images/closedbook.png"></p>');
    $('#item_3').addClass('clickable')
                .append('<p class="covering" id="safe">safe</p><p class="hidden tool" id="doorkey">doorkey<img src="images/doorkey.png"></p>');
    $('#item_4').addClass('clickable')
                .append('<p id="exit">door</p>');

    changeCommentary('You finally get out of the computer lab. The sheer difficulty and \
            complexity of escaping from the computer lab has bewildered you so much that you \
            make a wrong turn and find yourself confined in another classroom, this one decorated in… numbers?');

    $('#item_0').css({ //equation & answer
        top: 50,
        left: 200,
        width: 200
    });
    $('#item_1').css({ //math poster
        top: 50,
        left: 425
    });
    $('#item_2').css({ //math book
        top: 300,
        left: 65
    });
    $('#item_3').css({ //safe & doorkey
        top: 75,
        left: 600
    });
    $('#item_4').css({ //door
        top: 0,
        left: 15,
        height: 300
    });

});

function clickityClick(currentLayer) {
    var currentP = currentLayer.children('p:first');

    if (currentP.is('#exit')) {
        if (($.inArray('doorkey', inToolbox)) > -1) {
            levelOver = true;
        } else {
            changeCommentary('This door is locked!');
        }

    } else {
        var currentImg = currentLayer.children('img:first');

        if (currentP.is('#equation')) {
            if (($.inArray('mathbook', inToolbox)) > -1) {
                removeObjectLayerWithImage(currentLayer, currentP, currentImg);
                changeCommentary('You solve the equation.  The answer seems important.');
            } else {
                changeCommentary('You have no idea how to solve this.');
            }
        } else if (currentP.is('#safe')) {
            if (($.inArray('answer', inToolbox)) > -1) {
                removeObjectLayer(currentLayer, currentP);
                changeCommentary('You crack the safe using the answer on the board.');
            } else {
                changeCommentary('The safe is locked.');
            }
        }
    }
};

function getLevel() {
    return 4;
}

function getSolution() {
    var s1 = '1-Click on the book to reveal saying. ';
    var s2 = '2-Click on blackboard equation to solve automatically, solution moves to toolbox. ';
    var s3 = '3-Click on safe with solution in toolbox. ';
    var s4 = '4-Safe contains key, click on key to move to toolbox. ';
    var s5 = '5-Click on door with key in toolbox.';
    return s1 + s2 + s3 + s4 + s5;
}
