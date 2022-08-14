
d3.json("../json/quiz.json").then(function (quizzes) {
 
const questions = []
const nextButton = document.getElementById('nextButton');
const questionContainerElement = document.getElementById('question-container')
const Restart = document.getElementById('restart-btn');
const quizTitle = document.getElementById('quizTitle');
const contentStart = document.getElementById('content');
const body = document.getElementById('body');
const numberOfQuestions = document.getElementById("numberOfQuestions");
const questionElement = document.getElementById('question')
const sucess = document.getElementById('sucess')
var score = document.getElementById('score')
var any = 1;
var results = document.getElementById('results');




const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions = 0;
let currentQuestionIndex = 0;

body.classList.add('white')
    
    
Restart.addEventListener('click', startGame);

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    any++;
    numberOfQuestions.innerText = any;
    body.classList.add('white')
    setNextQuestion()
})


function startGame(){ 
    body.classList.add('white')
    Restart.classList.add('hide');
    numberOfQuestions.innerText = '1';
    contentStart.classList.add('show');
    quizTitle.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    // console.log(shuffledQuestions)
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    score.innerText = 0;
    Restart.classList.add('hide')
    results.classList.add('hide');
    contentStart.classList.remove('hide');
    contentStart.classList.add('show');
    any = 1;
    b = 0;
    setNextQuestion()
}

function setNextQuestion()
{
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

let b = 0;

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(body, correct)
    body.classList.remove('white')
    Array.from(answerButtonsElement.children).forEach(button =>{
        // setStatusClass(button, button.dataset.correct)
        button.disabled = true; 
        if(correct){
            b++;
            score.innerText = b/4 + " out of 10";
        }      
    })
    if(shuffledQuestions.length > currentQuestionIndex +1){
        nextButton.classList.remove('hidden');
        nextButton.disabled = false
    }else{
        Restart.classList.remove('hide')
        results.classList.remove('hide');
        contentStart.classList.add('hide');
        contentStart.classList.remove('show');
            if((b/4)  <= 5){
                sucess.innerHTML = "Failure";
                body.classList.remove('correct')
                body.classList.add('wrong')
                body.classList.remove('white')
            }else if((b/4) > 5){
                sucess.innerHTML = "Success";
                body.classList.add('correct')
                body.classList.remove('wrong')
                body.classList.remove('white')
            }
    }
}




function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct)
    {
        element.classList.add('correct')
        element.classList.remove('white')
    }else{
        element.classList.add('wrong')
        element.classList.remove('white')
    }
}



function clearStatusClass(element){
        element.classList.remove('correct')
        element.classList.remove('wrong')
}


function showQuestion(question){
    questionElement.innerText = question.question
    question.answers. forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('ansBtns')
        if (answer.correct){
            button.dataset.correct = answer.correct  
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}





function resetState(){
    clearStatusClass(document.getElementById('body'))
    nextButton.classList.add('hidden')
    nextButton.disabled = true
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}




function reload(){
    location.reload();
}


    
var quizID = localStorage.getItem('quiz_id')
var quiz_title = localStorage.getItem('quiz_title')

document.getElementById('quiz_title').innerText = quiz_title
    
if (quizID === null) {
    window.location = "./error.html"
}
var quiz_chosen = quizzes.basic_quiz
// if quiz id matches any secret title?????
if (quizID == "basic_quiz") {
    quiz_chosen = quizzes.basic_quiz
}
if(quizID == "advanced_quiz") {
    quiz_chosen =  quizzes.advanced_quiz
}

for (let q = 0; q < quiz_chosen.questions.length; q++){
    questions.push({
        question: quiz_chosen.questions[q].question,
        answers: [
            { text: quiz_chosen.questions[q].answers.text_one, correct: JSON.parse(quiz_chosen.questions[q].results.correct_one) },
            { text: quiz_chosen.questions[q].answers.text_two, correct: JSON.parse(quiz_chosen.questions[q].results.correct_two) },
            { text:quiz_chosen.questions[q].answers.text_three, correct : JSON.parse(quiz_chosen.questions[q].results.correct_three)},
            { text:quiz_chosen.questions[q].answers.text_four, correct : JSON.parse(quiz_chosen.questions[q].results.correct_four)},
        ]
    })
}


startGame()
  

})




