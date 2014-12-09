$(document).ready(function() {

    // set up this level as a unique view adding all images and clickable objects
    $('#header h1').text('Level 1: The Classroom');
    $('#background').attr('src', 'images/backgrounds/L1.jpg');

    $('#item_0').append('<p class="covering" id="fishbowl">fishbowl</p>\
                        <p class="hidden tool" id="doorkey">door key<img src="images/doorkey.png"></p>');
    $('#item_1').append('<p class="dummy">desk</p>');
    $('#item_2').append('<p id="exit">door</p>');

    changeCommentary('Oh no! You’ve fallen asleep in class again! \
            And no one woke you up for recess! You need to get out to the playground as soon as possible to enjoy the last precious, \
            delicious minutes of sweet, sweet recess. However, it appears that some oaf has locked you in. \
            Check your surroundings, prove your ingenuity, and escape to freedom.');

    $('#item_0').css({ //fishbowl & doorkey
        top: 100,
        left: 600,
        width: 200
    });
    $('#item_1').css({ //desk
        top: 275,
        left: 125,
        height: 200
    });
    $('#item_2').css({ //door
        top: 20,
        left: 0,
        height: 325
    });

});

function clickityClick(currentLayer) {
    var currentP = currentLayer.children('p:first');
    
    if (currentP.is('#exit')) {
        if (($.inArray('door key', inToolbox)) > -1) {
            levelOver = true;
        } else {
            changeCommentary('Sorry, you need the key first');
        }
    } else {
        if (currentP.is('#fishbowl')) {
            removeObjectLayer(currentLayer, currentP);
            changeCommentary('You found the key!');
        }
    }
};

function getLevel() {
    return 1;
};

function getSolution() {
    var s1 = '1-Find key in fishbowl. ';
    var s2 = '2-Add key to toolbox. ';
    var s3 = '3-Open the door with key in toolbox.';
    return s1 + s2 + s3;
};