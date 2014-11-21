var nextOpen = 1;
var levelOver = false;
var inToolbox = [];
var focused = 0;
var focusObject;
//add timer!!!!!

$(document).ready(function() {

    // used for EyeGaze to hi-light objects when hovering with a mouse
    $('.clickable').on('mouseenter mouseleave', function() {
        $(this).toggleClass('entered');
    });
    
    // allows keyboard accessibility with multiple key options (2-switch accessible)
    $(document).keydown(function(e) {
        if (e.keyCode == 9 || e.keyCode == 37 || e.keyCode == 32) { // tab=9, left arrow=37, space=32 <<<< TAB KEYS
            e.preventDefault();
            $('.clickable').removeClass('entered');
            focused = (focused + 1) % $('.clickable').length;
            focusObject = $('.clickable').get(focused);
            $(focusObject).addClass('entered');
        } else if (e.keyCode == 13 || e.keyCode == 39) { // enter=13, right arrow=39 <<<< ENTER KEYS
            alert('enter key pressed');
            $(focusObject).trigger('click');
        }
    });

    // click event determines what to do when the focused object is click and delegates to level-specific js when needed
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
    removeP.remove();
    currentP = currentLayer.children('p:first');
    currentP.removeClass('hidden');
};

function removeObjectLayerWithImage(currentLayer, removeP, removeImg) {
    removeP.remove();
    removeImg.remove();
    currentP = currentLayer.children('p:first');
    currentP.removeClass('hidden');
};


/*
    taking a tool and its corresponding image, called from the main click() function above
    
*/
function moveToToolbox(tool, image) {
    var openToolboxCell = '#toolboxItem_' + nextOpen; // sets a variable for the exact #id of the toolbox cell to be filled
    var toolboxImage = image.attr('src'); // gets the image from the current image in the parameters, used to place image in toolbox

    $(openToolboxCell).append('<img src="' + toolboxImage + '"" width="130">');
    inToolbox.push($(tool).text()); // adds the text of the p tag with this current object to the array for searching later
    nextOpen++; // increments the counter keeping track of the next open cell in the toolbox table

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
