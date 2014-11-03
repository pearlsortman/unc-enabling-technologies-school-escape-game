var nextOpen = 1;
var gameOver = false;
var inToolbox = [];



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

        if (currentObject.hasClass('dummy')) {
            if ( currentObject.children('p').is('#desk') ) {
            	changeCommentary('sorry, nothing in the desk right now');
            }
        } else {
            if (currentObject.children('p:first').hasClass('tool')) {
                moveToToolbox(currentObject.children('p:first'));
                currentObject.remove();
            } else {
				if ( currentObject.children('p').is('#exit') ) {
                    if ( ($.inArray('key', inToolbox)) > -1 ) {
                        changeCommentary('door clicked with key in toolbox');
                        gameOver=true;
                    } else {
                        changeCommentary('sorry you need the key first');
                    }
                } else {
                	if ( currentObject.children('p').is('#fishbowl')) {
                   		changeCommentary('you found the fishbowl');
               		}

               		currentObject.children('p:first').remove();
                	currentObject.children('p:first').removeClass('hidden');
                	currentObject.children('p:first').attr('class', 'tool');
               	}
            }
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

    changeCommentary('you have sucessfully added this item to your toolbox');
};

function changeCommentary(text) {
    $('#text').text(text);
};

function isGameOver() {
    if (gameOver === true) {
        changeCommentary('Congratulations! You have passed level 1');
        setTimeout(function() {
			window.location.replace('level-2.html');
        }, 2000);
    }
    return gameOver;
};
