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
        var currentObject = $(this);
        var currentFirstChild = currentObject.children('p:first');
        var currentFirstChildImg = currentFirstChild.children('img:first');

        if (currentObject.is('#solution')) {
            changeCommentary(getSolution());
        } else if (currentFirstChild.hasClass('dummy')) {
            changeCommentary('nothing under the ' + currentFirstChild.text() + ', keep looking');
        } else if (currentFirstChild.hasClass('tool')) {
            moveToToolbox(currentFirstChild, currentFirstChildImg);
            currentObject.remove();
        } else {
            clickityClick(currentObject, currentFirstChild, currentFirstChildImg);
        }

        isLevelOver();
    });

});

function moveToToolbox(tool, image) {
    var openToolboxCell = '#toolboxItem_' + nextOpen;
    var toolboxImage = image.attr('src');
    var imageTag = '<img src="' + toolboxImage + '"" width="130">';

    $(openToolboxCell).append(imageTag);
    inToolbox.push($(tool).text());
    nextOpen++;

    changeCommentary('you have sucessfully added the ' + insertInToolbox + ' into your toolbox');
};



function removeObject(currentText, currentImg) {
    this.currentText = currentText;
    this.currentImg = currentImg;
    currentText.remove();
    currentImg.remove();

    currentFirstChild = currentObject.children('p');
    currentFirstChildImg = currentFirstChild.children('img');

    currentFirstChild.removeClass('hidden');
    currentFirstChildImg.removeClass('hidden');
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
