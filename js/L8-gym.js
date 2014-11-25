var ropeAttached = false;

$(document).ready(function() {

    // set up this level as a unique view adding all images and clickable objects
    $('#header h1').text('Level 8: Gym');
    $('#background').attr('src', 'images/backgrounds/L8.jpg');
    
    //activate items to be used by adding tab order and contents
    $('#item_0').append('<p class="dummy">basketballs</p>');
    $('#item_1').append('<p class="covering" id="ballmachine">ballmachine</p><p class="hidden tool" id="coiledrope">coiled rope<img src="images/coiledrope.png"></p>');
    $('#item_2').append('<p class="dummy">weights</p>');
    $('#item_3').addClass('clickable')
                .append('<p class="dummy">basketball hoop</p>');
    $('#item_4').addClass('clickable')
                .append('<p class="covering" id="hook">hook</p><p class="hidden" id="rope">rope<img src="images/extendedrope.png"></p>');
    $('#item_5').addClass('clickable')
                .append('<p class="dummy">bleachers</p>');
    $('#item_6').addClass('clickable')
                .append('<p class="tool" id="tennisballs">tennis balls<img src="images/tennisballs.png"></p>');
    $('#item_7').addClass('clickable')
                .append('<p class="covering" id="paper">paper<img src="images/paperslip.png"></p><p class="hidden tool" id="password">password<img src="images/password.png"></p>');
    $('#item_8').addClass('clickable')
                .append('<p id="ceiling">ceiling</p>');

    changeCommentary('You step through the ruined library doors and find yourself oddly in the school gymnasium. You \
        take a moment to contemplate the bizarre fact that the school library is connected directly to the \
        school gym. Because of your past experiences, you do not even hesitate to check whether the \
        gym exit is locked and delve directly into the task of finding items that will help with your escape.');

    $('#item_0').css({ // basketballs
        top: 200,
        left: 250,
        width: 325
    });
    $('#item_1').css({ // ballmachine & coiled rope
        top: 225,
        left: 100
    });
    $('#item_2').css({ // weights
        top: 360,
        left: 400
    });
    $('#item_3').css({ // basketball hoop
        top: 120,
        left: 0,
        height: 100
    });
    $('#item_4').css({ // hook
        top: 75,
        left: 125,
        height: 250
    });
    $('#item_5').css({ // bleachers
        top: 175,
        left: 600
    });
    $('#item_6').css({ // tennis balls
        top: 325,
        left: 600
    });
    $('#item_7').css({ // paper & password
        top: 375,
        left: 0
    });
    $('#item_8').css({
        top: 0,
        left: 0,
        width: 800,
        height: 75
    });

});

function clickityClick(currentLayer) {
    var currentP = currentLayer.children('p:first');

    if (currentP.is('#ceiling')) { //EXIT
        if (ropeAttached) {
            levelOver = true;
        } else {
            changeCommentary('Good thinking, but we need a way to get up here first.');
        }
    } else {

        if (currentP.is('#ballmachine')) {
            if ( (($.inArray('tennis balls', inToolbox)) > -1) && (($.inArray('password', inToolbox)) > -1) ) {
                removeObjectLayer(currentLayer, currentP);
                changeCommentary('When you use the password to unlock the ball machine and insert the tennis ball stash, it spits out a rope instead!');
            } else {
                changeCommentary('You found the tennis ball machine, but do not have what you need to use it yet. Keep exploring!');
            }
        } else if (currentP.is('#paper')) {
            removeObjectLayer(currentLayer, currentP);
            changeCommentary('You found a password on this piece of paper. Make sure to add it to the toolbox.');
        } else if (currentP.is('#hook')) {
            if (($.inArray('coiled rope', inToolbox)) > -1) {
                ropeAttached = true;
                removeObjectLayer(currentLayer, currentP);
                changeCommentary('Awesome, you attached the rope from the ball machine to the hook. You climb up the rope to get closer to an exit.');
            } else {
                changeCommentary('If we could attach something to the hook, maybe we could escape through the ceiling.');
            }
        }
    } 

};

function getLevel() {
    return 8;
};

function getSolution() {
    var s1 = '1-Click the box to reveal a stash of tennis balls. ';
    var s2 = '2-Move the tennis balls to your toolbox. ';
    var s3 = '3-Find the sheet of paper on the floor containing a password. ';
    var s4 = '4-Unlock the tennis ball machine using the password once you have the tennis balls. ';
    var s5 = '5-Click the filled ball machine to have it spit out a rope into your toolbox. ';
    var s6 = '6-Use the rope with a hook on the ceiling to attach the rope. ';
    var s7 = '7-Click on the attached rope to climb out of the room.';
    return s1 + s2 + s3 + s4 + s5 + s6 + s7;
};