$(document).ready(function() {

    // set up this level as a unique view adding all images and clickable objects
    $('#header h1').text('Level 7: Library');
    $('#background').attr('src', 'images/L7.jpg');
    //activate items to be used by adding tab order and contents
    $('#item_1').attr('class', 'clickable', 'tabindex', '1').append('<p></p>');
    $('#item_2').attr('class', 'clickable', 'tabindex', '2').append('<p></p>');
    $('#item_3').attr('class', 'clickable', 'tabindex', '3').append('<p></p>');
    $('#item_4').attr('class', 'clickable', 'tabindex', '4').append('<p></p>');
    $('#item_5').attr('class', 'clickable', 'tabindex', '5').append('<p></p>');
    $('#item_6').attr('class', 'clickable', 'tabindex', '6').append('<p></p>');
    $('#item_7').attr('class', 'clickable', 'tabindex', '7').append('<p></p>');
    $('#item_8').attr('class', 'clickable', 'tabindex', '8').append('<p></p>');
    changeCommentary('At this point, you begin to think that you will never make it to recess and that you are merely the subject of some cruel, puzzling game with level after level. You walk out of the art room into the now familiar hallway. But wait! It’s not a familiar hallway. Oh no no no. The once dull gray walls have changed into a flamboyant and striking orange hue. You smell a faint fragrance of gasoline and take a step back in amazement as, what can only be described as, a leprechaun jumps in your path wags its finger');

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

    if (current.is('#')) { //EXIT
        if (($.inArray('', inToolbox)) > -1) {
            gameOver = true;
        } else {
            changeCommentary('');
        }
    } else if (current.is('#')) {
        /*if ( (($.inArray('pencil', inToolbox))>-1) && (($.inArray('paper', inToolbox))>-1) ) {
            changeCommentary('somethings happening! watch the rubbing from the desk reveal a secret combination');
            removeObject(current);
        } else {
            changeCommentary('youre right, looks like theres something on the desk. keep searching for a way to reveal the writing');
        }*/
    } else if (current.is('#')) {
        /*if (($.inArray('password', inToolbox)) > -1) {
            changeCommentary('good job, the password you uncovered on the desk opens this lock');
            removeObject(current);
        } else {
            changeCommentary('looks like we need the combination for this lock');
        }*/
    }

};

function getLevel() {
    return 7;
}

function getSolution() {
    var s1 = '1: ; ';
    var s2 = '2: ; ';
    var s3 = '3: ; ';
    var s4 = '4: ; ';
    var s5 = '5: ; ';
    var s6 = '6: ; ';
    var s7 = '7: .'
    return s1 + s2 + s3 + s4 + s5 + s6 + s7;
}