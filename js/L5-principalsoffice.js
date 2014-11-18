$(document).ready(function() {

    // set up this level as a unique view adding all images and clickable objects
    $('#header h1').text('Level 5: Principals Office');
    $('#background').attr('src', 'images/L5.jpg');

    //activate items to be used by adding tab order and contents
    $('#item_1').append('<p class="dummy" id="desk">desk</p>');

    $('#item_2').append('<p class="covering" id="cabinet">cabinet</p>\
                        <p class="hidden tool" id="hammer">hammer<img src="images/hammer.png"></p>');

    $('#item_3').append('<p class="covering" id="couch">couch</p>\
                        <p class="hidden tool" id="cabinetkey">cabinetkey<img src="images/cabinetkey.png"></p>');

    $('#item_4').attr('class', 'clickable')
                .attr('tabindex', '4')
                .append('<p class="covering" id="plant">plant</p>\
                        <p class="hidden tool" id="doorkey">doorkey<img src="images/key.png"></p>');

    $('#item_5').attr('class', 'clickable')
                .attr('tabindex', '4')
                .append('<p id="exit">door</p>');

    changeCommentary('After learning about “numbers” you realized that there is not a lot of recess time left. \
            You bolt out the classroom and rocket down the hallway. However, you see a teacher coming. \
            Knowing that you should not be wandering around the school unsupervised, you duck into the nearest room. \
            The door shuts behind you and locks with a “Click!” You stumble around in the darkness and blindly reach out for a light switch. \
            The light flickers on and the true nature of the situation dawns upon you. Oh no! You’ve locked yourself in the Principal’s Office!');

    $('#item_1').css({ //desk
        top: 150,
        left: 500
    });
    $('#item_2').css({ //cabinet & hammer
        top: 100,
        left: 325,
        height: 200
    });
    $('#item_3').css({ //couch & cabinet key
        top: 200,
        left: 0,
        width: 200,
        height: 225
    });
    $('#item_4').css({ //potted plant & door key
        top: 310,
        left: 490
    });
    $('#item_5').css({ //door
        top: 50,
        left: 200,
        height: 225
    });

});

function clickityClick(currentLayer) {
    var currentP = currentLayer.children('p:first');

    if (currentP.is('#exit')) { //EXIT
        if (($.inArray('doorkey', inToolbox)) > -1) {
            levelOver = true;
        } else {
            changeCommentary('locked up pretty tight here');
        }

    } else {
        var currentImg = currentLayer.children('img:first');

        if (currentP.is('#cabinet')) {
            if (($.inArray('cabinetkey', inToolbox)) > -1) {
                removeObjectLayer(currentLayer, currentP);
                changeCommentary('a hammer was hidden in the filing cabinet');
            } else {
                changeCommentary('you keep trying to pick the lock but its not working. we will have to find another way in');
            }
        } else if (currentP.is('#plant')) {
            if(($.inArray('hammer', inToolbox)) > -1) {
                removeObjectLayerWithImage(currentLayer, currentP, currentImg);
                changeCommentary('awesome, you broke the pot and a giant key fell out! wonder what this could go to...');
            } else {
                changeCommentary('this plant pot...');
            }
        } else if (currentP.is('#couch')) {
            removeObjectLayer(currentLayer, currentP);
            changeCommentary('you found a key under the couch');
        }
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