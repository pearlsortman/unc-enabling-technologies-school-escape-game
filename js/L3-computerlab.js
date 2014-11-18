$(document).ready(function() {

    // set up this level as a unique view adding all images and clickable objects
    $('#header h1').text('Level 3: The Computer Lab');
    $('#background').attr('src', 'images/L3.jpg');

    $('#item_1').append('<p class="covering" id="lockbox">lockbox</p>\
        <p class="hidden tool" id="powercord">powercord<img src="images/powercord.png"></p>');

    $('#item_2').append('<p class="covering" id="desk">desk</p>\
        <p class="hidden tool" id="screwdriver">screwdriver<img src="images/screwdriver.png"></p>');

    $('#item_3').append('<p id="computer">computer</p>');

    changeCommentary('As you whip open the door of the cafeteria, \
            you feel the floor slip out from underneath your feet. \
            You slide across the hallway on your bum, catching a glimpse of the “Wet Floor” \
            sign out of the corner of your eye. When you finally stop sliding, you take a moment to take in your surroundings. \
            Computers. Everywhere. The door clicks shut behind you. Here we go again…');

    $('#item_1').css({ //lockbox & powercord
        top: 0,
        left: 510
    });
    $('#item_2').css({ //desk & screwdriver
        top: 125,
        left: 20,
        width: 200
    });
    $('#item_3').css({ //computer
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
            changeCommentary('seems this computer is missing something important');
        }

    } else {
        if (currentP.is('#desk')) {
            removeObjectLayer(currentLayer, currentP);
            changeCommentary('good job, you found the screwdriver');
        } else if (currentP.is('#lockbox')) {
            if (($.inArray('screwdriver', inToolbox)) > -1) {
                removeObjectLayer(currentLayer, currentP);
                changeCommentary('yay, you broke into the toolbox with the screwdriver');
            } else {
                changeCommentary('looks like it is locked.. keep looking for a way to break in');
            }
        }
    }

        

};

function getLevel() {
    return 3;
};

function getSolution() {
    var step1 = '1: Find screwdriver in teachers desk and add to toolbox; ';
    var step2 = '2: Click lockbox with screwdriver in toolbox to force open and find powercord';
    var step3 = '3: Click computer with powercord in inventory to unlock door and escape';
    return step1 + step2 + step3;
};