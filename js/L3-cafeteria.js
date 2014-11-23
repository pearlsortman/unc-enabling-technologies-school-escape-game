$(document).ready(function() {

    // set up this level as a unique view adding all images and clickable objects
    $('#header h1').text('Level 3: The Cafeteria');
    $('#background').attr('src', 'images/L3.jpg');

    $('#item_0').append('<p class="covering" id="souppot">pot of soup<img src="images/souppot.png"></p>\
                        <p class="hidden tool" id="doorkey">doorkey<img src="images/doorkey.png"></p>');
    $('#item_1').append('<p class="dummy" id="lunchtray">lunch tray</p>');
    $('#item_2').append('<p class="tool" id="ladle"><img src="images/ladle.png">ladle</p>');
    $('#item_3').addClass('clickable')
                .append('<p class="covering" id="exit">door</p>');

    changeCommentary('Getting out of that computer lab burned more calories than you thought was possible. \
        Perhaps grabbing some grub in the cafeteria might power your way through the rest of the school? \
        As you step into the cafeteria, the pungent aroma of soup engulfs your nostrils and fills your head with craving. \
        You dip your finger into the soup and taste it. It has an oddly metallic taste.');

    $('#item_0').css({ //pot of soup & doorkey
        top: 350,
        left: 75,
        height: 175
    });
    $('#item_1').css({ //lunch tray
        top: 200,
        left: 175
    });
    $('#item_2').css({ //ladle
        top: 300,
        left: 375
    });
    $('#item_3').css({ //door
        top: 25,
        left: 575,
        height: 250,
        width: 175
    });
    
});

function clickityClick(currentLayer) {
    var currentP = currentLayer.children('p:first');

    if (currentP.is('#exit')) {
        if (($.inArray('doorkey', inToolbox)) > -1) {
            levelOver = true;
        } else {
            changeCommentary('sorry, you need the key first');
        }

    } else {
        var currentImg = currentP.children('img:first');

        if (currentP.is('#souppot')) {
            if (($.inArray('ladle', inToolbox)) > -1) {
                removeObjectLayerWithImage(currentLayer, currentP, currentImg);
                changeCommentary('you found the key. now add it to your toolbox.');
            } else {
                changeCommentary('oh no the soup is too hot! we need something to scoop out the tool');
            }
        }
    }
};

function getLevel() {
    return 3;
};

function getSolution() {
    var s1 = '1: click on the ladle to add to toolbox; ';
    var s2 = '2: click on the pot of soup with ladle in the toolbox to fish out the key; ';
    var s3 = '3: click on the door with the key in toolbox';
    return s1 + s2 + s3;
};