var nextOpen = 1;
var levelOver = false;
var inToolbox = [];
//add timer!!!!!

$(document).ready(function() {

    /*    $('.clickable').keydown(function(e) {
            if (e.keyCode == 32) {
                e.which = 9;
                $(this).trigger(e);
            }
        });*/

    //triggers tab event on spacebar
    $('.clickable').keydown(function(e) {
        if (e.keyCode == 13) {
            $(this).trigger('click');
        }
    });

    $('.clickable').on('mouseenter mouseleave', function() {
        $(this).toggleClass('entered');
    });

    //triggers click event on enterkey
    $('.clickable').keydown(function(e) {
        if (e.keyCode == 13) {
            $(this).trigger('click');
        }
    });

    //click event
    $('.clickable').click(function() {
        var currentLayer = $(this);
        var currentP = $(this).children('p:first');
    
        if (currentLayer.is('#solution')) {
            changeCommentary(getSolution());

        } else if (currentP.hasClass('dummy')) {
            changeCommentary('nothing under the ' + currentP.text() + ', keep looking');

        } else {
            var currentImg = currentP.children('img:first');
            if (currentP.hasClass('tool')) {
                moveToToolbox(currentP, currentImg);
                $(this).remove();
            } else {
                clickityClick(currentLayer);
            }
        }

        isLevelOver();
    });

});


function removeObjectLayer(currentLayer, removeP) {
    alert('removeP html: ' + removeP.html());
    removeP.remove();

    currentP = currentLayer.children('p:first');
    alert('the new p child html: ' + currentP.html());

    currentP.removeClass('hidden');
};


/*
    taking a tool and its corresponding image, called from the main click() function above
    
*/
function moveToToolbox(tool, image) {
    var openToolboxCell = '#toolboxItem_' + nextOpen;       // sets a variable for the exact #id of the toolbox cell to be filled
    var toolboxImage = image.attr('src');       // gets the image from the current image in the parameters, used to place image in toolbox

    $(openToolboxCell).append('<img src="' + toolboxImage + '"" width="130">');
    inToolbox.push($(tool).text()); // adds the text of the p tag with this current object to the array for searching later
    nextOpen++;     // increments the counter keeping track of the next open cell in the toolbox table

    changeCommentary('you have sucessfully added the ' + $(tool).text() + ' into your toolbox');
};


/*
    this function replaces the text in the solutions div at the bottom of the page
    used for comments, suggestions, encouragement, 
    and storyline depending on the level and objects clicked
*/
function changeCommentary(text) {
    $('#text').text(text);
};


/*
    whenever the level's #exit element is clicked, we will check to see if the level has been won
    the booleen 'levelOver' is changed to true in the L*.js file after the #exit is clicked with...
    the appropriate tools in the toolbox
*/
function isLevelOver() {
    if (levelOver) {
        var nextLevel = getLevel() + 1;
        var nextLevelLink = 'L' + nextLevel + '.php';
        if (nextLevel < 9) {
            changeCommentary('Congratulations! You made it to level ' + nextLevel);
            setTimeout(function() {
                window.location.replace(nextLevelLink);
            }, 5000);
        } else {
            changeCommentary('Wow, great job! You made through all the levels! Enjoy the outside world again.');
        }
    }
    return levelOver;
};