
var userSelections = [];
var numQuestions = 7;
var answerKey = ["C", "D", "B", "C", "B", "D", "B"]
var correctAnswers = 0;
var testSubmitted = false;

function defaultPageSelector(){
    $('.mainPage').hide();
    $('.endPage').hide();
    $(".welcomePage").show();
}
defaultPageSelector();

$('.beginButton').on('click', function(){
    runTimer(180);
    $('.welcomePage').hide();
    $('.mainPage').show();
});

$('.restartButton').on('click', function(){
    $('.endPage').hide();
    $('.welcomePage').show();

    testSubmitted = false;
    correctAnswers = 0;
    userSelections = [];
    for (var i = 1; i < numQuestions + 1; i++) {
        var choices = document.getElementsByName('question' + i);
        for (var j = 0; j < choices.length; j++) {
            choices[j].checked = false;
        }
    }
});

function runTimer(secs){
    $('#timer').html("You have "+secs+" seconds remaining");
    secs--;
    var timerInterval = setTimeout('runTimer('+secs+')', 1000);
    if (testSubmitted == true || secs < 1) {
        clearTimeout(timerInterval);
        if (secs < 1) {
            submitAnswer(numQuestions);
        }
    }
}

var submitAnswer = function(numQuestions) {
    testSubmitted = true;
    for (var i = 1; i < numQuestions + 1; i++) {
        var choices = document.getElementsByName('question' + i);
        for (var j = 0; j < choices.length; j++) {
            if (choices[j].checked) {
                userSelections.push(choices[j].id);
            }
        }
    }
    $('.mainPage').hide();
    $('.endPage').show();
    checkAnswers(userSelections, answerKey);
}

var checkAnswers = function(userSelections, answerKey){
    for (var i = 0; i < answerKey.length; i++){
        if (answerKey[i] === userSelections[i]){
            correctAnswers++;
        }
    }
    $('.results').html(correctAnswers);
}

