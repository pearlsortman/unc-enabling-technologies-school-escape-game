$(document).ready(function() {

    // set up this level as a unique view adding all images and clickable objects
    $('#header h1').text('Level 6: Art Studio');
    $('#background').attr('src', 'images/L6.jpg');

    //activate items to be used by adding tab order and contents
    $('#item_0').append('<p class="tool" id="pencil">pencil<img src="images/pencil.png"></p>');
    $('#item_1').append('<p class="dummy" id="paintbrush">paintbrush<img src="paintbrush.png"></p>');
    $('#item_2').append('<p class="covering" id="desk">desk</p><p class="hidden tool" id="password">password<img src="images/password.png"></p>');
    $('#item_3').addClass('clickable')
                .append('<p class="tool" id="paper">paper<img src="images/papertray.png"></p>');
    $('#item_4').addClass('clickable')
                .append('<p class="covering" id="cabinet">cabinet</p><p class="hidden tool" id="hammer">hammer<img src="images/hammer.png"></p>');
    $('#item_5').addClass('clickable')
                .append('<p id="window">window</p>');

    changeCommentary('Success! You are able to leave the Principal’s Office. Last time you were there, \
            you definitely did not leave in one piece (or in peace). Walking through the hallway, you suddenly \
            feel the floor slip out from beneath your feet. You slide across the hallway on your bum, catching a \
            glimpse of the “Wet Floor” sign out of the corner of your eye. Simultaneously, you think “How dare the writer \
            recycle the same transition between rooms in order to save time.” As you ponder this obviously false and \
            ludicrous inquiry, you find yourself locked in an art room.');

    $('#item_0').css({ // pencil
        top: 150,
        left: 50
    });
    $('#item_1').css({ // paintbrush
        top: 310,
        left: 100
    });
    $('#item_2').css({ // desk & password
        top: 200,
        left: 425,
        width: 250
    });
    $('#item_3').css({ // paper
        top: 375,
        left: 650
    });
    $('#item_4').css({ // cabinet & hammer
        top: 70,
        left:480
    });
    $('#item_5').css({ // window
        top: 0,
        left: 275,
        width: 200,
        height: 200
    });

});

function clickityClick(currentLayer) {
    var currentP = currentLayer.children('p:first');

    if (currentP.is('#window')) { //EXIT
        if (($.inArray('hammer', inToolbox)) > -1) {
            levelOver = true;
        } else {
            changeCommentary('figure out what to use to break the window');
        }

    } else {
        var currentImg = currentLayer.children('img:first');

        if (currentP.is('#desk')) {
            if ((($.inArray('pencil', inToolbox)) > -1) && (($.inArray('paper', inToolbox)) > -1)) {
                removeObjectLayer(currentLayer, currentP);
                changeCommentary('somethings happening! watch the rubbing from the desk reveal a secret combination'); 
            } else {
                changeCommentary('youre right, looks like theres something on the desk. keep searching for a way to reveal the writing');
            }
        } else if (currentP.is('#cabinet')) {
            if (($.inArray('password', inToolbox)) > -1) {
                removeObjectLayer(currentLayer, currentP)
                changeCommentary('good job, the password you uncovered on the desk opens this lock');
            } else {
                changeCommentary('looks like we need the combination for this lock');
            }
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
