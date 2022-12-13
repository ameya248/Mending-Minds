
var myQuestions = [
    {
        question: "Question 1 :     I feel that there are too many deadlines in my work 1ife that are difficult to meet?",
        answers: {
            a: 'Most of the times',
            b: 'Sometimes',
            c: 'Never',
        },
        correctAnswer: 'a'
    },
    
    {
        question: "Question 2 : I do the jobs myself to ensure they are done properly?",
        answers: {
            a: 'Most of the times',
            b: 'Sometimes',
            c: 'Never',
        },
        correctAnswer: 'a'
    },
    {
        question: "Question3 : I have guilty feelings if I relax and do nothing?",
        answers: {
            a: 'Most of the times',
            b: 'Sometimes',
            c: 'Never',
        },
        correctAnswer: 'a'
    },
    {
        question: "Question 4 : I find myself thinking about problems even when I am supposed to be relaxing?",
        answers: {
            a: 'Most of the times',
            b: 'Sometimes',
            c: 'Never',
        },
        correctAnswer: 'a'
        
    },
    {
        question: "Question 5 : I feel fatigued or tired even when I wake after an adequate sleep?",
        answers: {
            a: 'Most of the times',
            b: 'Sometimes',
            c: 'Never',
        },
        correctAnswer: 'a'
        
    },
    {
        question: "Question 6 : I feel irritated or angry if the car or traffic in front seems to be going too slowly/I become very frustrated at having to wait in a queue?",
        answers: {
            a: 'Most of the times',
            b: 'Sometimes',
            c: 'Never',
        },
        correctAnswer: 'a'
        
    },
    {
        question: "Question 7 : I experience mood swings, difficulty making decisions, concentration and memory is impaired?",
        answers: {
            a: 'Most of the times',
            b: 'Sometimes',
            c: 'Never',
        },
        correctAnswer: 'a'
        
    },
    {
        question: "Question 8 : I am unable to perform tasks as well as I used to, my judgment is clouded or not as good as it was?",
        answers: {
            a: 'Most of the times',
            b: 'Sometimes',
            c: 'Never',
        },
        correctAnswer: 'a'
        
    },
    {
        question: "Question 9 : I find I have a greater dependency on alcohol, caffeine, nicotine or drugs?",
        answers: {
            a: 'Most of the times',
            b: 'Sometimes',
            c: 'Never',
        },
        correctAnswer: 'a'
        
    },
    
    {
        question: "Question 10 : I find that I don't have time for many interests / hobbies outside of work?",
        answers: {
            a: 'Most of the times',
            b: 'Sometimes',
            c: 'Never',
        },
        correctAnswer: 'a'
        
    }
    
    
];



var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                
            }
            else if(userAnswer==='c'){
                numCorrect--;
            }
                // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }
        

        // show number of correct answers out of total
        
        if((numCorrect>=-10) && (numCorrect <= -4)){
            resultsContainer.textContent = numCorrect + ' out of ' + questions.length + ' and you are normal.';
            
        }
        else if((numCorrect>=-3) && (numCorrect<=3)){
            resultsContainer.textContent = numCorrect + ' out of ' + questions.length + ' and you are moderately stressed.';
        }
        else if((numCorrect>=4) && (numCorrect<=10)){
            resultsContainer.textContent = numCorrect + ' out of ' + questions.length + ' and you are highly stressed.';
        }

    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}
