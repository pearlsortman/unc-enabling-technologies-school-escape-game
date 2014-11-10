$(document).ready(function() {
    $('#scene').prepend('<img src="L4.jpg"/>')
    $('#item_1').css({ //lockbox & powercord
        top: 50,
        left: 50
    });
    $('#item_2').css({ //desk & screwdriver
        top: 100,
        left: 200
    });
    $('#item_3').css({ //computer
        top: 300,
        left: 350
    });
});

function clickityClick(currentObject, currentFirstChild) {
    this.currentObject = currentObject;
    var current = currentFirstChild;

    if (current.is('#computer')) { //EXIT
        if (($.inArray('powercord', inToolbox)) > -1) {
            gameOver = true;
        } else {
            changeCommentary('(4c) ');
        }
    } else if (current.is('#desk')) {
        changeCommentary('(4d) good job, you found the screwdriver');
        removeObject(current);
    } else if (current.is('#lockbox')) {
        if (($.inArray('screwdriver', inToolbox)) > -1) {
            changeCommentary('(4e) yay, you broke into the toolbox with the screwdriver');
            removeObject(current);
        } else {
            changeCommentary('(4f) looks like it is locked.. keep looking for a way to break in');
        }
    }

};

function getLevel() {
    return 4;
};

function getSolution() {
    var step1 = '1: Find screwdriver in teachers desk and add to toolbox; ';
    var step2 = '2: Click lockbox with screwdriver in toolbox to force open and find powercord';
    var step3 = '3: Click computer with powercord in inventory to unlock door and escape';
    return step1 + step2 + step3;
};