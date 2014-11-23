$(document).ready(function() {

    // set up this level as a unique view adding all images and clickable objects
    $('#header h1').text('Level 8: Gym');
    $('#background').attr('src', 'images/L8.jpg');
    
    //activate items to be used by adding tab order and contents
    $('#item_0').addClass('clickable').append('<p></p>');
    $('#item_1').addClass('clickable').append('<p></p>');
    $('#item_2').addClass('clickable').append('<p></p>');
    $('#item_3').addClass('clickable').append('<p></p>');
    $('#item_4').addClass('clickable').append('<p></p>');
    $('#item_5').addClass('clickable').append('<p></p>');
    $('#item_6').addClass('clickable').append('<p></p>');
    $('#item_7').addClass('clickable').append('<p></p>');

    changeCommentary('L8: initial room blurb');

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

function clickityClick(currentObject, currentFirstChild) {
    this.currentObject = currentObject;
    var current = currentFirstChild;

    if (current.is('#')) { //EXIT
        if (($.inArray('', inToolbox)) > -1) {
            levelOver = true;
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
    return 8;
};

function getSolution() {
    var s1 = '1: Click the box to reveal a stash of tennis balls; ';
    var s2 = '2: Move the tennis balls to your toolbox; ';
    var s3 = '3: Find the sheet of paper on the floor containing a password; ';
    var s4 = '4: Unlock the tennis ball machine using the password once you have the tennis balls; ';
    var s5 = '5: Click the filled ball machine to have it spit out a rope into your toolbox; ';
    var s6 = '6: Use the rope with a hook on the ceiling to attach the rope; ';
    var s7 = '7: Click on the attached rope to climb out of the room.'
    return s1 + s2 + s3 + s4 + s5 + s6 + s7;
};