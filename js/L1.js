$(document).ready(function() {

    // set up this level as a unique view adding all images and clickable objects
    $('#header h1').text('Level 1: The Classroom');
    $('#background').attr('src', 'images/L1.jpg');

    $('#item_1').append('\
            <p class="covering" id="fishbowl">fishbowl</p>\
            <p class="hidden tool" id="doorkey">doorkey<img src="images/key.png"></p>');

    $('#item_2').append('<p class="dummy" id="desk">desk</p>');
    $('#item_3').append('<p class="covering" id="exit">door</p>');

    changeCommentary('Oh no! You’ve fallen asleep in class again! \
            And no one woke you up for recess! You need to get out to the playground as soon as possible to enjoy the last precious, \
            delicious minutes of sweet, sweet recess. However, it appears that some oaf has locked you in. \
            Check your surroundings, prove your ingenuity, and escape to freedom.');

    $('#item_1').css({ //fishbowl & doorkey
        top: 100,
        left: 600,
        width: 200
    });
    $('#item_2').css({ //desk
        top: 275,
        left: 125,
        height: 200
    });
    $('#item_3').css({ //door
        top: 20,
        left: 0,
        height: 325
    });

});

function clickityClick(currentObject, currentFirstChild, currentFirstChildImg) {
    this.currentObject = currentObject;
    var current = currentFirstChild;
    var currentImg = currentFirstChildImg;

    if (current.is('#exit')) {
        if (($.inArray('doorkey', inToolbox)) > -1) {
            levelOver = true;
        } else {
            changeCommentary('sorry, you need the key first');
        }
    } else if (currentFirstChild.is('#fishbowl')) {
        changeCommentary('you found the key');
        removeObject(current, currentImg);
    }

};

function getLevel() {
    return 1;
};

function getSolution() {
    var s1 = '1: find key in fishbowl; ';
    var s2 = '2: add key to toolbox; ';
    var s3 = '3: get to the door with key in toolbox';
    return s1 + s2 + s3;
};
