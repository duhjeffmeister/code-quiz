// Reference the start button
const startButton = document.getElementById('start-btn')
// Reference the "next" button
const nextButton = document.getElementById('next-btn')
// Reference the question container
const questionContainerElement = document.getElementById('question-container')
// Grabbing the question element
const questionElement = document.getElementById('question')
// Grabbing the answer grid
const answerButtonsElement = document.getElementById('answer-buttons')
// Create a way to shuffle questions. This will default a value of 
// undefined, which is ok for now. currentQuestionIndex tells us which 
// question we're on within the shuffledQuestions array. Must be a variable
// and not a "const" because it needs to be able to be changed.
let shuffledQuestions, currentQuestionIndex

// Declaring Timer for 60 seconds
// function timer() {
    var time = 60
    var countDown = setInterval(function() {  
        document.getElementById("countdown").textContent = "Time left: " + time + " seconds"; 
        if (time === 0) {
            alert("Sorry but you have run out of time");
            clearInterval(countDown);
            // Put some type of function in here to bring you to the "#divhighscore" slide.
        }
        else if (time > 0) {
            time --;
        }    
    }, 1000)

// Execute startGame() when startButton is clicked
startButton.addEventListener('click', startGame)
// Goes to the next item in the question array to bring another question
nextButton.addEventListener('click', () => {
    // Increases the increment of the currentQuestionIndex to go to the next item
    // in the question array
    currentQuestionIndex++
    // Call setNextQuestion
    setNextQuestion()
})

// Function for the start button click
function startGame() {
    // Removes the start button since it has the hide class
    startButton.classList.add('hide')
    // Create a shuffledQuestions array using the questions array after sorting the array;
    // you can sort by negative or positive number and the below formula does that
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    // Starts on the first question
    currentQuestionIndex = 0
    // Remove the hide class in the question container to make questions show up
    questionContainerElement.classList.remove('hide')
    // Call next question
    setNextQuestion()
}

// Function for the next button click
function setNextQuestion() {
    // Resets everything related to orignal form when we move onto next question
    resetState()
    // Shows question based upon array shuffledQuestions and the index of
    // currentQuestionIndex
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

// Shows next question shuffled
function showQuestion(question) {
    // Grabbing question element and displaying the question out of the array
    questionElement.innerText = question.question
    // Populating answers by looping through the answers
    question.answers.forEach(answer => {
        // Creates a button for each answer
        const button = document.createElement('button')
        // Change button's inner text
        button.innerText = answer.text
        // Create a class and add it
        button.classList.add('btn')
        // Creating a loop to verify if true
        if (answer.correct) {
            // Creating a data attribute for the button element, setting it to
            // answer.correct; we determine if true and not false because using
            // false will make it difficult to determine what is correct or not 
            // due to it being an actual string and not a boolean.
            button.dataset.correct = answer.correct
        }
        // Call function selectAnswer when the button is clicked
        button.addEventListener('click', selectAnswer)
        // Add to the answerButtons element
        answerButtonsElement.appendChild(button)
    })
}

// Resets form to default question view to properly 
function resetState() {
    // Reset body color
    clearStatusClass(document.body)
    // Hide the "next" button
    nextButton.classList.add('hide')
    // Loop through all the children for the answerButtonsElement; if there
    // is an answer inside the firstChild answer element, we want to remove
    // it.
    while  (answerButtonsElement.firstChild) {
        // Removing the first child
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

// Function for when we select and an answer, taking the event in as a parameter "e"
function selectAnswer(e) {
    // Adding a constant representing whatever button we click
    const selectedButton = e.target
    // Verify if the answer on the selected button is correct
    const correct = selectedButton.dataset.correct
    // Takes our document and takes whether or not it should be set to correct or wrong
    setStatusClass(document.body, correct)
    // Create an array because it's returning a live collection that updates on its own
    // this returns it as an array for the "forEach loop"
    Array.from(answerButtonsElement.children).forEach(button => {
        // Sets status for buttons and checks the dataset to make sure the answer
        // is correct
        setStatusClass(button, button.dataset.correct)
    })
    // Check to see if we have questions to go through; this checks to see if there is
    // an additional question to the question we are currently on
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        // Show next button after answering a question to move on to next question
        nextButton.classList.remove('hide')
    } else {
        // If we are on the very last question change startButton text to restart
        startButton.innerText = 'Restart'
        // Show this button
        startButton.classList.remove('hide')
    }
}

// Function for taking an element and whether or not it's correct
function setStatusClass(element, correct) {
    // Clear any status that the element has
    clearStatusClass(element)
    // If correct we're going to add the class of correct or wrong
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

// Clears the class status of correct or wrong
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

// Create questions array
const questions = [
    // First question array element
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