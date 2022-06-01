var time = 60
var timerID;
var playerScore = 50
var highScores = []
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

// Declaring Timer for 60 seconds
function startTimer() {
    var countDown = setTimeout(function() {  
        document.getElementById("countdown").textContent = "Time left: " + time + " seconds"; 
        if (time === 0) {
            alert("Sorry but you have run out of time");
            clearInterval(countDown);
        }
        else if (time > 0) {
            time --;
        }    
    }, 1000)
}

// Execute startGame() when startButton is clicked
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

// Function for the start button click
function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    startTimer()
    setNextQuestion()
}

// Function for the next button click
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

// Shows next question shuffled
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

// Resets form to default question view to properly 
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while  (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

// Function for when we select and an answer, taking the event in as a parameter "e"
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

// Function for taking an element and whether or not it's correct
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
        time -= 10
    }
}

// Clears the class status of correct or wrong
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

// Create questions array
const questions = [
    {
        question: 'Which of the following keywords is used to define a variable in Javascript?',
        answers: [
            {text: 'A: var', correct: false},
            {text: 'B: let', correct: false},
            {text: 'C: Both var and let', correct: true},
            {text: 'D: None of these', correct: false},
        ]
    },
    {
        question: 'Which method returns the character at the specified index?',
        answers: [
            {text: 'A: chatAt()', correct: true},
            {text: 'B: getCharAt()', correct: false},
            {text: 'C: characterAt()', correct: false},
            {text: 'D: None of these', correct: false},
        ]
    },
    {
        question: 'What type of language is Javascript?',
        answers: [
            {text: 'A: Object-Based', correct: false},
            {text: 'B: Object-Oriented', correct: true},
            {text: 'C: Procedural', correct: false},
            {text: 'D: Coffee', correct: false},
        ]
    },
    {
        question: 'Which of these contain an executable statement?',
        answers: [
            {text: 'A: // var x = 0; // var y = 0;', correct: false},
            {text: 'B: /* var x = 0; // var y = 0; */', correct: false},
            {text: 'C: // var x = 0; /* var y = 0; */', correct: false},
            {text: 'D: /* var x = 0; */ var y = 0;', correct: true},
        ]
    },
    {
        question: 'Which of the following methods is used to access HTML elements using Javascript?',
        answers: [
            {text: 'A: getElementByID()', correct: false},
            {text: 'B: getElementsByClassName', correct: false},
            {text: 'C: Both A and B', correct: true},
            {text: 'D: None of these', correct: false},
        ]
    }
]