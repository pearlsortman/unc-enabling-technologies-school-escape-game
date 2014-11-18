var nextOpen = 1;
var levelOver = false;
var inToolbox = [];
//add timer!!!!!

$(document).ready(function() {

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

        if (currentObject.is('#solution')) {
            changeCommentary(getSolution());
        } else if (currentFirstChild.hasClass('dummy')) {
            changeCommentary('nothing under the ' + currentFirstChild.text() + ', keep looking');
        } else if (currentFirstChild.hasClass('tool')) {
            moveToToolbox(currentFirstChild);
            currentObject.remove();
        } else {
            clickityClick(currentObject, currentFirstChild);
        }
       
        isLevelOver();
    });

});

function moveToToolbox(tool) {
    var openToolboxCell = '#toolboxItem_' + nextOpen;
    var insertInToolbox = $(tool).text();

    $(openToolboxCell).text(insertInToolbox);
    inToolbox.push(insertInToolbox);
    nextOpen++;

    changeCommentary('you have sucessfully added the ' + insertInToolbox + ' into your toolbox');
};

function changeCommentary(text) {
    $('#text').text(text);
};

function removeObject(currentFirstChild) {
    this.currentFirstChild = currentFirstChild;
    currentFirstChild.remove();
    currentFirstChild = currentObject.children('p:first');
    currentFirstChild.removeClass('hidden');
};

function isLevelOver() {
    if (levelOver) {
        var nextLevel = getLevel() + 1;
        var nextLevelLink = 'L' + nextLevel + '.php';
        if (nextLevel < 9) {
            changeCommentary('Congratulations! You made it to level ' + nextLevel);
            setTimeout(function(){
                window.location.replace(nextLevelLink);
            }, 5000);
        } else {
            changeCommentary('Wow, great job! You made through all the levels! Enjoy the outside world again.');
        }
    }
    return levelOver;
};