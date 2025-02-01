function getQuizFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return quizzes[params.get('quiz')] || [];
}

function displayQuestion(questionData) {
    $('#question').text(questionData.question);
    $('#answers').empty();
    $('#date-input-container').hide();

    if (questionData.requiresDate) {
        $('#date-input-container').show();
    } else {
        questionData.options.forEach((option, index) => {
            $('#answers').append(
                `<li><button class="answer-button" data-index="${index}">${option.name}</button></li>`
            );
        });
    }
}


function checkAnswer(index, selectedAnswer, quiz) {
    const questionData = quiz[index];
    if (questionData.requiresDate) {
        return selectedAnswer === questionData.correctAnswer;
    }
    return questionData.correctAnswer === selectedAnswer;
}