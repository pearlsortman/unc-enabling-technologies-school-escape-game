$(document).ready(function() {

    $('body').load('../comp580_SchoolEscapeGame/genericLevel.html', function() {
        setup();
    });

    function setup() {

        // set up this level as a unique view adding all images and clickable objects
        $('#header h1').text('Level 7: Library');
        $('#background').attr('src', 'images/backgrounds/L7.jpg');

        // activate items to be used by adding tab order and contents
        $('#item_0').append('<p class="dummy">bookshelf</p>');
        $('#item_1').append('<p class="dummy">bookshelf</p>');
        $('#item_2').append('<p class="covering" id="bookshelf3">bookshelf</p> <p class="hidden tool" id="boxkey">box key<img src="images/smallkey.png"></p>');
        $('#item_3').addClass('clickable')
                    .append('<p class="covering" id="officedoor">door</p><p class="hidden tool" id="hint">hint<img src="images/paperslip.png"</p>');
        $('#item_4').addClass('clickable')
                    .append('<p class="covering" id="book">book<img src="images/closedbook.png"</p> <p class="hidden tool" id="bookmark">bookmark<img src="images/openbook.png"></p>');
        $('#item_5').addClass('clickable')
                    .append('<p class="dummy">computer</p>');
        $('#item_6').addClass('clickable')
                    .append('<p class="covering" id="lockbox">lockbox</p> <p class="hidden tool" id="ram">ram<img src="images/ram.png"></p>');
        $('#item_7').addClass('clickable')
                    .append('<p id="exit">door</p>');

        changeCommentary('At this point, you begin to think that you will never make it to recess and \
                that you are merely the subject of some cruel, puzzling game with level after level. \
                You walk out of the art room into the now familiar hallway. But wait! It’s not a familiar hallway. \
                Oh no no no. The once dull gray walls have changed into a flamboyant and striking orange hue. \
                You smell a faint fragrance of gasoline and take a step back in amazement as, what can only be described as, \
                a leprechaun jumps in your path wags its finger.');

        $('#item_0').css({ // bookshelf 1
            top: 125,
            left: 100
        });
        $('#item_1').css({ // bookshelf 2
            top: 0,
            left: 250
        });
        $('#item_2').css({ // bookshelf 3 & small key
            top: 0,
            left: 410,
            height: 275,
            width: 225
        });
        $('#item_3').css({ // office door & paper slip
            top: 25,
            left: 650
        });
        $('#item_4').css({ // book & bookmark
            top: 325,
            left: 550
        });
        $('#item_5').css({ // computer
            top: 375,
            left: 200
        });
        $('#item_6').css({ // lockbox & battering ram
            top: 155,
            left: 255
        });
        $('#item_7').css({ // door
            top: 0,
            left: 0,
            width: 100,
            height: 250
        });

    };

});

function clickityClick(currentLayer) {
    var currentP = currentLayer.children('p:first');

    if (currentP.is('#exit')) { //EXIT
        if (($.inArray('ram', inToolbox)) > -1) {
            levelOver = true;
        } else {
            changeCommentary('This door is locked!  What a surprise...');
        }

    } else {

        if (currentP.is('#bookshelf3')) {
            if (($.inArray('hint', inToolbox)) > -1) {
                removeObjectLayer(currentLayer, currentP);
                changeCommentary('Behind one of the books you find a small key.');
            } else {
                changeCommentary('Nothing here yet, but keep looking and come back.');
            }
        } else if (currentP.is('#officedoor')) {
            if (($.inArray('bookmark', inToolbox)) > -1) {
                removeObjectLayer(currentLayer, currentP);
                changeCommentary('When you used the password you found in the book and went through the door, you found a clue! It reads "look again in the bookshelves for your next tool".');
            } else {
                changeCommentary('We need a passcode to access this room.');
            }
        } else if (currentP.is('#book')) {
            removeObjectLayer(currentLayer, currentP);
            changeCommentary('Great job! You found a bookmark in the book with a password scribbled on it.');
        } else if (currentP.is('#lockbox')) {
            if(($.inArray('box key', inToolbox)) > -1) {
                removeObjectLayer(currentLayer, currentP);
                changeCommentary('The key you found on the bookshelf unlocked this box.');
            } else {
                changeCommentary('This box is locked. We will need to find a way in.');
            }
        }
    }

};

function getLevel() {
    return 7;
}

function getSolution() {
    var s1 = '1-Click the book on the table to reveal a bookmark with a code written on it. ';
    var s2 = '2-Click on the door to the office once you have the code to unlock it. \
                this will automatically add a slip of paper in your toolbox like you found in the office.';
    var s3 = '3-The slip of paper has "try the third bookshelf" written on it, so you check this out. ';
    var s4 = '4-Click on the third bookshelf to obtain the lockbox key. ';
    var s5 = '5-Use the key to unlock the box, revealing a battering ram. ';
    var s6 = '6-Use the battering ram with the locked door to plow through it.';
    return s1 + s2 + s3 + s4 + s5 + s6;
}