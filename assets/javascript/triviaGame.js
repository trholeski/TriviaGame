
var userSelections = []
var numQuestions = 7;
var answerKey = ["A", "A", "A", "A", "A", "A", "A"]

var submitAnswer = function(numQuestions) {
    for (var i = 1; i < numQuestions; i++) {
        
        var choices = document.getElementsByName('question' + i);
        for (var j = 0; j < choices.length; j++) {
            if (choices[j].checked) {
                userSelections.push(choices[j].id)
                console.log(userSelections);
            }
        }
    }
}
var checkAnswers = function(userSelections, answerKey){
    for (i = 0; i < numQuestions; i++){
        for (j = 0; j < )
    }
}