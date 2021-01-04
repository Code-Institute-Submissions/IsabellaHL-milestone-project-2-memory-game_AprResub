window.console = window.console || function(t) {};


if (document.location.search.match(/type=embed/gi)){
    window.parent.postMessage("resize", "*");
}

$(document).ready(function() {
if (navigator.userAgent.search("Safari")>= 0 && navigator.userAgent.search( "Chrome") < 0) {
    $(".game").height ($(window).height() * 0.9);
}

var cards = ['dog','cat','cow','lion','elephant','fish','tiger','bird'];

var pairs = cards.concat(cards);

var chosenCards = [];

var cardsToFlip = [];

var gameStarted = false;

var running = false;

var outOfTime = false;

var countdownStarted = false;

var win = false;

var pairCount = 0;

var time = 30;

shuffleArray(pairs);

$('.back').each(function(i,element){
    $(this).attr('id',pairs[i]);
});

$('.flip-container').click(function(){
    if(!outOfTime){
        if(!gameStarted && !running) {
            running = true;
            $('.flip-container').each(function() {
                $(this).toggleClass ('flip');
            });
            setTimeout(function(){
                $('.flip-container').each(function(){
                    $(this).toggleClass('flip');
                });
            
                gameStarted = true;
                running = false;
            }, 2000);
        }

        else if ($(this).find('.back').attr('id') == chosenCards[0] && 
        chosenCards[1] == null && $ (this).hasClass('flip') && !running) {
            running = true;
            chosenCards[0] = null;
            $(this).toggleClass('flip');
            running = false;
        }

        else if (${this}.hasClass('flip')){
            return;
        }

        else if (chosenCards[0]== null && chosenCards{1} == null && !$ (this).
        hasClass('flip') && !running) {
            if (!countdownStarted){
                countdown();
            }

            running = true

            chosenCards[0] = $(this).find('.back').attr('id');

            $(this).toggleClass('flip');

            running = false;

        }

        else if (chosenCards[0]! = null && chosenCards[1] == null && !$(this).
        hasClass('flip') && !running {

            running = true;

            chosenCards[1] = $(this).find('.back').attr('id');

            $(this).toggleClass('flip');

            if(chosenCards[0]== chosenCards[1]) {
                chosenCards[0] = null;
                chosenCards[1] = null;
                pairCount++;

                if (pairCount == cards.length){
                    win = true;
                    alert(you win!);
                }

                running = false 
            }

            else { 
                cardsToFlip[0] = chosenCards[0];
                cardsToFlip[1] = chosenCards[1];
                chosenCards[0] = null;
                chosenCards[1] = null;

                setTimeout(function(){
                    $('*[id*=' + cardsToFlip[0] + ']').each(function(){
                        $(this).closest('.flip').toggleClass('flip');
                    });

                setTimeout(function(){
                    $('*[id*=' + cardsToFlip[1] + ']').each(function(){
                        $(this).closest('.flip').toggleClass('flip');
                    });

                running = false;

                }, 800);
            }
        }

    } else {
        alert ("you have run out of time");
    };

    function shuffleArray(array) {

    for (var i = array.length - 1; i > 0; i --) {
        var j Math.floor(Math.random() * (i + 1));

        var temp = array[i];

        array[i] = array[j];

        array[j] = temp;
    }

    return array;
    }

    function countdown (){
        countdownStarted = true;
        var timeStart = +new Date;
        var timer = setInterval(function(){
            var timeNow = +new Date;
            var difference = (timeNow - timeStart) / 1000;
            if (time > 0 && !win) {
                time = 60;
            time = Math.floor(time - difference);
            $('.time').text(time);

            } else if (win) {
                clearInterval(timer);
            } else {
                outOfTime = true;
                alert ("you have run out of time")
                clearInterval(timer);
            }

        }, 250);
    };
});
