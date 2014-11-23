$(document).ready(function() {

    // set up this level as a unique view adding all images and clickable objects
    $('#header h1').text('Level 7: Library');
    $('#background').attr('src', 'images/L7.jpg');

    // activate items to be used by adding tab order and contents
    $('#item_0').append('<p class="dummy" id="bookshelf1">bookshelf</p>');
    $('#item_1').append('<p class="dummy" id="bookshelf2">bookshelf</p>');
    $('#item_2').append('<p class="covering" id="bookshelf3">bookshelf</p> <p class="hidden tool" id="boxkey">boxkey<img src="images/smallkey.png"></p>');
    $('#item_3').addClass('clickable')
                .append('<p class="covering" id="officedoor">door</p><p class="hidden tool" id="paper">paper<img src="images/paperslip.png"</p>');
    $('#item_4').addClass('clickable')
                .append('<p class="covering" id="book">book<img src="images/closedbook.png"</p> <p class="hidden tool" id="bookmark">bookmark<img src="images/openbook.png"></p>');
    $('#item_5').addClass('clickable')
                .append('<p class="dummy" id="window">window</p>');
    $('#item_6').addClass('clickable')
                .append('<p class="covering" id="lockbox">lockbox</p> <p class="hidden tool" id="ram">battering ram<img src="images/ram.png></p>');
    $('#item_7').addClass('clickable')
                .append('<p id="exit">door</p>');

    changeCommentary('At this point, you begin to think that you will never make it to recess and \
            that you are merely the subject of some cruel, puzzling game with level after level. \
            You walk out of the art room into the now familiar hallway. But wait! It’s not a familiar hallway. \
            Oh no no no. The once dull gray walls have changed into a flamboyant and striking orange hue. \
            You smell a faint fragrance of gasoline and take a step back in amazement as, what can only be described as, \
            a leprechaun jumps in your path wags its finger');

    $('#item_0').css({ //
        top: 50,
        left: 50
    });
    $('#item_1').css({
        top: 100,
        left: 200
    });
    $('#item_2').css({
        top: 300,
        left: 350
    });
    $('#item_3').css({
        top: 300,
        left: 550
    });
    $('#item_4').css({
        top: 75,
        left: 500
    });
    $('#item_5').css({
        top: 400,
        left: 350
    });
    $('#item_6').css({
        top: 400,
        left: 550
    });
    $('#item_7').css({
        top: 75,
        left: 400
    });


});

function clickityClick(currentLayer) {
    var currentP = currentLayer.children('p:first');

    if (currentP.is('#exit')) { //EXIT
        if (($.inArray('ram', inToolbox)) > -1) {
            levelOver = true;
        } else {
            changeCommentary('keep looking for a way to break through');
        }

    } else {
        if (currentP.is('#bookshelf3')) {
            /*if ( (($.inArray('pencil', inToolbox))>-1) && (($.inArray('paper', inToolbox))>-1) ) {
                changeCommentary('somethings happening! watch the rubbing from the desk reveal a secret combination');
                removeObject(current);
            } else {
                changeCommentary('youre right, looks like theres something on the desk. keep searching for a way to reveal the writing');
            }*/
        } else if (currentP.is('#officedoor')) {
            /*if (($.inArray('password', inToolbox)) > -1) {
                changeCommentary('good job, the password you uncovered on the desk opens this lock');
                removeObject(current);
            } else {
                changeCommentary('looks like we need the combination for this lock');
            }*/
        } else if (currentP.is('#book')) {

        } else if (currentP.is('#lockbox')) {

        }
    }


};

function getLevel() {
    return 7;
}

function getSolution() {
    var s1 = '1: click the book on the table to reveal a bookmark with a code written on it; ';
    var s2 = '2: click on the door to the office once you have the code to unlock it. \
                this will automatically add a slip of paper in your toolbox like you found in the office;';
    var s3 = '3: the slip of paper has "try the third bookshelf" written on it, so you check this out; ';
    var s4 = '4: click on the third bookshelf to obtain the lockbox key; ';
    var s5 = '5: use the key to unlock the box, revealing a battering ram; ';
    var s6 = '6: use the battering ram with the locked door to plow through it.';
    return s1 + s2 + s3 + s4 + s5 + s6;
}
