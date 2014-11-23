$(document).ready(function() {

    // set up this level as a unique view adding all images and clickable objects
    $('#header h1').text('Level 2: The Computer Lab');
    $('#background').attr('src', 'images/L2.jpg');

    $('#item_0').append('<p class="covering" id="lockbox">lockbox</p>\
        <p class="hidden tool" id="powercord">powercord<img src="images/powercord.png"></p>');
    $('#item_1').append('<p class="covering" id="desk">desk</p>\
        <p class="hidden tool" id="screwdriver">screwdriver<img src="images/screwdriver.png"></p>');
    $('#item_2').append('<p id="computer">computer</p>');

    changeCommentary('As you whip open the door of the classroom, \
            you feel the floor slip out from underneath your feet. \
            You slide across the hallway on your bum, catching a glimpse of the “Wet Floor” \
            sign out of the corner of your eye. When you finally stop sliding, you take a moment to take in your surroundings. \
            Computers. Everywhere. The door clicks shut behind you. Here we go again…');

    $('#item_0').css({ //lockbox & powercord
        top: 0,
        left: 510
    });
    $('#item_1').css({ //desk & screwdriver
        top: 125,
        left: 20,
        width: 200
    });
    $('#item_2').css({ //computer
        top: 0,
        left: 325
    });

});

function clickityClick(currentLayer) {
    var currentP = currentLayer.children('p:first');

    if (currentP.is('#computer')) { //EXIT
        if (($.inArray('powercord', inToolbox)) > -1) {
            levelOver = true;
        } else {
            changeCommentary('It seems this computer is missing something important.');
        }

    } else {
        if (currentP.is('#desk')) {
            removeObjectLayer(currentLayer, currentP);
            changeCommentary('You found a screwdriver and place it in your toolbox.');
        } else if (currentP.is('#lockbox')) {
            if (($.inArray('screwdriver', inToolbox)) > -1) {
                removeObjectLayer(currentLayer, currentP);
                changeCommentary('You break into the toolbox with the screwdriver.');
            } else {
                changeCommentary('This box is locked!  You need a way to get inside.');
            }
        }
    }

        

};

function getLevel() {
    return 2;
};

function getSolution() {
    var step1 = '1: Find screwdriver in desk and add to toolbox; ';
    var step2 = '2: Click lockbox with screwdriver in toolbox to force open and find powercord';
    var step3 = '3: Click computer with powercord in inventory to unlock door and escape';
    return step1 + step2 + step3;
};