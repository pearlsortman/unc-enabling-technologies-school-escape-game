$(document).ready(function() {

    // set up this level as a unique view adding all images and clickable objects
    $('#header h1').text('Level 5: Principals Office');
    $('#background').attr('src', 'images/backgrounds/L5.jpg');

    //activate items to be used by adding tab order and contents
    $('#item_0').append('<p class="dummy" id="desk">desk</p>');
    $('#item_1').append('<p class="covering" id="cabinet">cabinet</p>\
                        <p class="hidden tool" id="hammer">hammer<img src="images/hammer.png"></p>');
    $('#item_2').append('<p class="covering" id="couch">couch</p>\
                        <p class="hidden tool" id="cabinetkey">cabinetkey<img src="images/smallkey.png"></p>');
    $('#item_3').addClass('clickable')
                .append('<p class="covering" id="plant">plant<img src="images/plant.png"></p>\
                        <p class="hidden tool" id="doorkey">doorkey<img src="images/doorkey.png"></p>');
    $('#item_4').addClass('clickable')
                .append('<p id="exit">door</p>');

    changeCommentary('After learning about “numbers” you realized that there is not a lot of recess time left. \
            You bolt out the classroom and rocket down the hallway. However, you see a teacher coming. \
            Knowing that you should not be wandering around the school unsupervised, you duck into the nearest room. \
            The door shuts behind you and locks with a “Click!” You stumble around in the darkness and blindly reach out for a light switch. \
            The light flickers on and the true nature of the situation dawns upon you. Oh no! You’ve locked yourself in the Principal’s Office!');

    $('#item_0').css({ //desk
        top: 150,
        left: 500
    });
    $('#item_1').css({ //cabinet & hammer
        top: 100,
        left: 325,
        height: 200
    });
    $('#item_2').css({ //couch & cabinet key
        top: 200,
        left: 0,
        width: 200,
        height: 225
    });
    $('#item_3').css({ //potted plant & door key
        top: 310,
        left: 590
    });
    $('#item_4').css({ //door
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
            changeCommentary('This door is locked tightly!');
        }

    } else {
        var currentImg = currentLayer.children('img:first');

        if (currentP.is('#cabinet')) {
            if (($.inArray('cabinetkey', inToolbox)) > -1) {
                removeObjectLayer(currentLayer, currentP);
                changeCommentary('You find a hammer in the filing cabinet');
            } else {
                changeCommentary('You keep trying to pick the lock but its not working. You will have to find another way in.');
            }
        } else {
            var currentImg = currentLayer.children('img:first');

            if (currentP.is('#plant')) {
                if(($.inArray('hammer', inToolbox)) > -1) {
                    removeObjectLayerWithImage(currentLayer, currentP, currentImg);
                    changeCommentary('You break the pot and a giant key falls out! I wonder what this could go to...');
                } else {
                    changeCommentary('This plant looks suspicious, you should find something to smash it to see what is there.');
                }
            } else if (currentP.is('#couch')) {
                removeObjectLayer(currentLayer, currentP);
                changeCommentary('You find a key under the couch.');
            }
        }
       
    }
};

function getLevel() {
    return 5;
};

function getSolution() {
    var s1 = '1-Find the filing cabinet key hidden under the couch. ';
    var s2 = '2-With the key, find the hammer in the cabinet. ';
    var s3 = '3-Use the hammer to break one of the potted plants, revealing the door key. ';
    var s4 = '4-Once you found the key under the plant, reach the door to escape.';
    return s1 + s2 + s3 + s4;
};