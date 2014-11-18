$(document).ready(function() {

    // set up this level as a unique view adding all images and clickable objects
    $('#header h1').text('Level 5: Principals Office');
    $('#background').attr('src', 'images/L5.jpg');
    //activate items to be used by adding tab order and contents
    $('#item_1').attr('class', 'clickable', 'tabindex', '1').append('<p class="dummy" id="desk">desk</p>');
    $('#item_2').attr('class', 'clickable', 'tabindex', '2').append('<p></p>');
    $('#item_3').attr('class', 'clickable', 'tabindex', '3').append('<p></p>');
    $('#item_4').attr('class', 'clickable', 'tabindex', '4').append('<p></p>');
    $('#item_5').attr('class', 'clickable', 'tabindex', '5').append('<p</p>');
    $('#item_6').attr('class', 'clickable', 'tabindex', '6').append('<p></p>');
    $('#item_7').attr('class', 'clickable', 'tabindex', '7').append('<p></p>');
    $('#item_8').attr('class', 'clickable', 'tabindex', '8').append('<p id="window"></p>');

    changeCommentary('After learning about “numbers” you realized that there is not a lot of recess time left. \
            You bolt out the classroom and rocket down the hallway. However, you see a teacher coming. \
            Knowing that you should not be wandering around the school unsupervised, you duck into the nearest room. \
            The door shuts behind you and locks with a “Click!” You stumble around in the darkness and blindly reach out for a light switch. \
            The light flickers on and the true nature of the situation dawns upon you. Oh no! You’ve locked yourself in the Principal’s Office!');

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
            levelOver = true;
        } else {
            changeCommentary('figure out what to use to break the window');
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
    return 5;
};

function getSolution() {
    var s1 = '1: Find the filing cabinet key hidden under the couch; ';
    var s2 = '2: With the key, find the hammer in the cabinet; ';
    var s3 = '3: Use the hammer to break one of the potted plants, revealing the door key; ';
    var s4 = '4: Once you found the key under the plant, reach the door to escape.';
    return s1 + s2 + s3 + s4;
};
