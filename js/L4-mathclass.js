$(document).ready(function() {

    // set up this level as a unique view adding all images and clickable objects
    $('#header h1').text('Level 4: The Math Classroom');
    $('#background').attr('src', 'images/L4.jpg');

    $('#item_1').append('<p class="covering" id="equation">equation<img src"images/equation.png">\
                        </p><p class="hidden tool" id="answer">answer<img src="images/answer.png"></p>');

    $('#item_2').append('<p class="dummy" id="poster">math poster</p>');

    $('#item_3').append('<p class="tool" id="mathbook">mathbook<img src="images/mathbook.png"></p>');

    $('#item_4').attr('class', 'clickable')
                .attr('tabindex', '4')
                .append('<p class="covering" id="safe">safe</p><p class="hidden tool" id="doorkey">doorkey<img src="images/key.png"></p>');

    $('#item_5').attr('class', 'clickable')
                .attr('tabindex', '5')
                .append('<p id="exit">door</p>');

    changeCommentary('You finally get out of the computer lab. The sheer difficulty and \
            complexity of escaping from the computer lab has bewildered you so much that you \
            make a wrong turn and find yourself confined in another classroom, this one decorated in… numbers?');

    $('#item_1').css({ //equation & answer
        top: 50,
        left: 200,
        width: 200
    });
    $('#item_2').css({ //math poster
        top: 50,
        left: 425
    });
    $('#item_3').css({ //math book
        top: 300,
        left: 65
    });
    $('#item_4').css({ //safe & doorkey
        top: 75,
        left: 600
    });
    $('#item_5').css({ //door
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
            changeCommentary('you need the key first');
        }

    } else {
        var currentImg = currentLayer.children('img:first');

        if (currentP.is('#equation')) {
            if (($.inArray('mathbook', inToolbox)) > -1) {
                removeObjectLayerWithImage(currentLayer, currentP, currentImg);
                changeCommentary('great, you have the knowledge in the math book to solve this equation');
            } else {
                changeCommentary('havent learned to solve this yet');
            }
        } else if (currentP.is('#safe')) {
            if (($.inArray('answer', inToolbox)) > -1) {
                removeObjectLayer(currentLayer, currentP);
                changeCommentary('yay, you cracked the safe!');
            } else {
                changeCommentary('solve equation first and add answer to toolbox');
            }
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