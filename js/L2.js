$(document).ready(function() {

    // set up this level as a unique view adding all images and clickable objects
    $('#header h1').text('Level 2: The Cafeteria');
    $('#background').attr('src', 'images/L2.jpg');
    $('#item_1').attr('class', 'clickable').append('\
        <p class="covering" id="souppot">pot of soup<img src="images/item.jpg"></p>\
        <p class="hidden tool" id="doorkey">doorkey<img src="images/key.png"></p>');
    $('#item_2').attr('class', 'clickable').append('<p class="dummy" id="lunchtray">lunch tray</p>');
    $('#item_3').attr('class', 'clickable').append('<p class="tool" id="ladle"><img src="images/item.jpg">ladle</p>');
    $('#item_4').attr('class', 'clickable', 'tabindex', '4').append('<p class="covering" id="exit">door</p>');

    changeCommentary('Getting out of that classroom burned more calories than you thought was possible. \
        Perhaps grabbing some grub in the cafeteria might power your way through the rest of the school? \
        As you step into the cafeteria, the pungent aroma of soup engulfs your nostrils and fills your head with craving. \
        You dip your finger into the soup and taste it. It has an oddly metallic taste.');

    $('#item_1').css({ //pot of soup & doorkey
        top: 350,
        left: 75,
        height: 175
    });
    $('#item_2').css({ //lunch tray
        top: 200,
        left: 175
    });
    $('#item_3').css({ //ladle
        top: 300,
        left: 375
    });
    $('#item_4').css({ //door
        top: 25,
        left: 575,
        height: 250,
        width: 175
    });
    
});


function clickityClick(currentObject) {
    this.currentObject = currentObject;
    var currentFirstChild = currentObject.children('p:first');

    if (currentFirstChild.is('#exit')) {
        if (($.inArray('doorkey', inToolbox)) > -1) {
            levelOver = true;
        } else {
            changeCommentary('(2c) sorry, you need the key first');
        }
    } else if (currentFirstChild.is('#souppot')) {
        if (($.inArray('ladle', inToolbox)) > -1) {
            changeCommentary('(2d) you found the key');
            removeObject(currentFirstChild);
        } else {
            changeCommentary('(2e) oh no the soup is too hot! we need something to scoop out the tool');
        }
    }
};

function getLevel() {
    return 2;
}

function getSolution() {
    var s1 = '1: click on the ladle to add to toolbox; ';
    var s2 = '2: click on the pot of soup with ladle in the toolbox to fish out the key; ';
    var s3 = '3: click on the door with the key in toolbox';
    return s1 + s2 + s3;
}
