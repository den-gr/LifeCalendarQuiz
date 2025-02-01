


$(document).ready(function () {
    const quiz = getQuizFromUrl();
    let currentQuestion = quiz[0];
    let selectedOption = null;

    if (!quiz || quiz.length === 0) {
        $('#question-container').html('<p>No quiz selected or quiz is empty!</p>');
        $('#next-button').hide();
        return;
    }

    displayQuestion(currentQuestion);
    $('#next-button').hide();


    $('#answers').on('click', '.answer-button', function () {
        $('.answer-button').removeClass('selected');
                
        $(this).addClass('selected');

        // Store the selected option
        selectedOption = currentQuestion.options[$(this).data('index')];

        $('#next-button').show();
    });

    $('#date-submit').click(function () {
        const selectedDate = $('#date-input').val();
        
        if (selectedDate) {
            selectedOption = {
                value: selectedDate,
                next: currentQuestion.next
            };

            if (selectedOption.next !== undefined && selectedOption.next !== -1) {
                currentQuestion = findQuestionById(selectedOption.next, quiz);
                displayQuestion(currentQuestion);
                
                // Reset selection state
                selectedOption = null;
                $('#next-button').hide();
            } else {
                showQuizComplete();
            }
        }
    });

    $('#next-button').click(function () {
        if (!selectedOption) {
            return;
        }

        // Move to the next question if specified
        if (selectedOption.next !== undefined && selectedOption.next !== -1) {
            currentQuestion = findQuestionById(selectedOption.next, quiz);
            displayQuestion(currentQuestion);
            
            // Reset selection state
            selectedOption = null;
            $('#next-button').hide();
        } else {
            showQuizComplete();
        }
    });
});


function findQuestionById(id, questions) {
    return questions.find(q => q.id === id);
}

function handleAction(action) {
    console.log('Handling action:', action);
}

function showQuizComplete() {
    $('#question-container').hide();
    $('#quiz-complete').show();
    $('#next-button').hide();
}