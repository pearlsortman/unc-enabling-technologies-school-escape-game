var nextOpen = 1;
var gameOver = false;
var inToolbox = [];
//add timer!!!!!

$(document).ready(function() {

    $('.clickable, .dummy').on('mouseenter mouseleave', function() {
        $(this).toggleClass('entered');
    });

    //triggers click event on enterkey
    $('.clickable, .dummy').keydown(function(e) {
        if (e.keyCode == 13) {
            $(this).trigger('click');
        }
    });

    //click event
    $('.clickable, .dummy').click(function() {
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
       
        isGameOver();
    });

});

function moveToToolbox(tool) {
    var openToolboxCell = '#toolboxItem_' + nextOpen;
    var insertInToolbox = $(tool).text();

    $(openToolboxCell).text(insertInToolbox);
    inToolbox.push(insertInToolbox);
    nextOpen++;

    changeCommentary('(generic-1) you have sucessfully added the ' + insertInToolbox + ' into your toolbox');
};

function changeCommentary(text) {
    $('#text').text(text);
};

function removeObject(currentFirstChild) {
    this.currentFirstChild = currentFirstChild;
    currentFirstChild.remove();
    currentFirstChild = currentObject.children('p:first');
    currentFirstChild.removeClass('hidden');
}

function isGameOver() {
    var nextLevel = getLevel() + 1;
    var nextLevelLink = 'level-' + nextLevel + '.html';
    if (gameOver) {
        changeCommentary('(generic-2) Congratulations! You made it to level ' + nextLevel);
        if (nextLevel <= 8) {
            setTimeout(function() {
                window.location.replace(nextLevelLink);
            }, 2000);
        }
    }
    return gameOver;
};