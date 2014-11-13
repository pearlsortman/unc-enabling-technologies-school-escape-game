$(document).ready(function() {

    // set up this level as a unique view adding all images and clickable objects
    $('#header h1').text('Level 6: Art Studio');
    $('#background').attr('src', 'images/L6.jpg');
    //activate items to be used by adding tab order and contents
    $('#item_1').attr('class', 'clickable', 'tabindex', '1').append('<p class="tool" id="pencil">pencil</p>');
    $('#item_2').attr('class', 'clickable', 'tabindex', '2').append('<p class="dummy" id="poster">poster</p>');
    $('#item_3').attr('class', 'clickable', 'tabindex', '3').append('<p class="dummy" id="computer">computer</p>');
    $('#item_4').attr('class', 'clickable', 'tabindex', '4').append('<p class="dummy" id="paintbrushes">paint brushes</p>');
    $('#item_5').attr('class', 'clickable', 'tabindex', '5').append('<p class="covering" id="desk">desk</p><p class="hidden tool" id="password">password</p>');
    $('#item_6').attr('class', 'clickable', 'tabindex', '6').append('<p class="tool" id="paper">paper</p>');
    $('#item_7').attr('class', 'clickable', 'tabindex', '7').append('<p class="covering" id="cabinet">cabinet</p><p class="hidden tool" id="hammer">hammer</p>');
    $('#item_8').attr('class', 'clickable', 'tabindex', '8').append('<p id="window">window</p>');
    changeCommentary('Success! You are able to leave the Principal’s Office. Last time you were there, you definitely did not leave in one piece (or in peace). Walking through the hallway, you suddenly feel the floor slip out from beneath your feet. You slide across the hallway on your bum, catching a glimpse of the “Wet Floor” sign out of the corner of your eye. Simultaneously, you think “How dare the writer recycle the same transition between rooms in order to save time.” As you ponder this obviously false and ludicrous inquiry, you find yourself locked in an art room.');

    $('#item_1').css({ //
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
    $('#item_5').css({
        top: 75,
        left: 500
    });
    $('#item_6').css({
        top: 400,
        left: 350
    });
    $('#item_7').css({
        top: 400,
        left: 550
    });
    $('#item_8').css({
        top: 75,
        left: 400
    });
});

function clickityClick(currentObject, currentFirstChild) {
    this.currentObject = currentObject;
    var current = currentFirstChild;

    if (current.is('#window')) { //EXIT
        if (($.inArray('hammer', inToolbox)) > -1) {
            gameOver = true;
        } else {
            changeCommentary('figure out what to use to break the window');
        }
    } else if (current.is('#desk')) {
        if ( (($.inArray('pencil', inToolbox))>-1) && (($.inArray('paper', inToolbox))>-1) ) {
            changeCommentary('somethings happening! watch the rubbing from the desk reveal a secret combination');
            removeObject(current);
        } else {
            changeCommentary('youre right, looks like theres something on the desk. keep searching for a way to reveal the writing');
        }
    } else if (current.is('#cabinet')) {
        if (($.inArray('password', inToolbox)) > -1) {
            changeCommentary('good job, the password you uncovered on the desk opens this lock');
            removeObject(current);
        } else {
            changeCommentary('looks like we need the combination for this lock');
        }
    }

};

function getLevel() {
    return 6;
};

function getSolution() {
    var s1 = '1: Click on the pencil to add to toolbox; ';
    var s2 = '2: Click on the paper to add to toolbox; ';
    var s3 = '3: Click on the table with the pencil and paper in toolbox to reveal the markings on the table; ';
    var s4 = '4: Click on the marked paper to add password to toolbox; ';
    var s5 = '5: Find the lock while the password is in your toolbox to reveal hammer; ';
    var s6 = '6: Add the hammer to your toolbox; ';
    var s7 = '7: Use the hammer to break the window and escape.'
    return s1 + s2 + s3 + s4 + s5 + s6 + s7;
};