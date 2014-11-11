$(document).ready(function() {

    // set up this level as a unique view adding all images and clickable objects
    $('#header h1').text('Level 5: The Computer Lab');
    $('#scene').prepend('<img src="L5.jpeg"/>');
    $('#item_1').append('');
    $('#item_2').append('');
    $('#item_3').append('');
    $('#item_4').append('');
    $('#item_5').append('');
    changeCommentary('L5: initial room blurb');

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
});

function clickityClick(currentObject, currentFirstChild) {
    this.currentObject = currentObject;
    var current = currentFirstChild;

    if (current.is('')) { //EXIT
        if (($.inArray('', inToolbox)) > -1) {
            gameOver = true;
        } else {
            changeCommentary('() ');
        }
    } else if (current.is('')) {
        /*if (($.inArray('mathbook', inToolbox)) > -1) {
            changeCommentary('(3d) ');
            removeObject(current);
        } else {
            changeCommentary('(3e) ');
        }*/
    } else if (current.is('')) {
        /*if (($.inArray('answer', inToolbox)) > -1) {
            changeCommentary('(3f) yay, you cracked the safe!');
            removeObject(current);
        } else {
            changeCommentary('(3g) solve equation first and add answer to toolbox');
        }*/
    }

};

function getLevel() {
    return 5;
}

function getSolution() {
    var s1 = '1: ; ';
    var s2 = '2: ;';
    var s3 = '3: ;';
    var s4 = '4: ;';
    var s5 = '5: ;';
    var s6 = '6: ;';
    return s1 + s2 + s3 + s4 + s5 + s6;
}
