$(".levelLink").bind("click", function() {
            $(".level").hide();
            var divId= $(this).attr("divId");
            $("#" + divId).show();
            level1();
        });

        $(document).ready(function(){
            alert('doc ready!!');
        });

var nextOpen = 1;
var gameOver = false;
var inToolbox = [];
//add timer!!!!!
$(document).ready(function() {

    alert('in ready function');

    $('.clickable').on('mouseenter mouseleave', function() {
        alert('another alert');
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
            changeCommentary('nothing under the ' + currentFirstChild + ', keep looking');
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
    var insertInToolbox = $(tool).id;

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

function isGameOver() {
    if (gameOver) {
        var nextLevel = getLevel() + 1;
        changeCommentary('Congratulations! You made it to level ' + nextLevel);

        if (nextLevel === 2) {
            $.getScript('js/L2.js');
            level2();
        } else if (nextLevel === 3) {
            level3();
        } else if (nextLevel === 4) {
            level4();
        } else if (nextLevel === 5) {
            level5();
        } else if (nextLevel === 6) {
            level6();
        } else if (nextLevel === 7) {
            level7();
        } else if (nextLevel === 8) {
            level8();
        } else {
            changeCommentary('you made it to the end!');
        }
    }
    return gameOver;
};