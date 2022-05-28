// Variables for initials and high score.
var userInput = ""
var userInitials = []
var playerScore = ""
var highScore = []

// Question 1
var questionOne = {
    question1: "1. Which of the following keywords is used to define a variable in Javascript?",
    answer1A: "var",
    answer1B: "let",
    answer1C: "Both A and B",
    answer1D: "None of the Above",
    // Correct answer is C
}

// Question 2
var questionTwo = {
    question2: "2. Which method returns the character at the specified index?",
    answer2A: "charAt()",
    answer2B: "getCharAt()",
    answer3C: "characterAt()",
    answer4D: "None of the Above",
    // Correct answer is A
}

// Question 3
var questionThree = {
    question3: "3. What type of language is Javascript?",
    answer3A: "Object-Based",
    answer3B: "Object-Oriented",
    answer3C: "Procedural",
    answer3D: "Coffee",
    // Correct answer is B
}

// Question 4
var questionFour = {
    questionA: "4. Which of these contain an executable statement?",
    answer4A: "// var x = 0; // var y = 0;", 
    answer4B: "/* var x = 0; // var y = 0; */",
    answer4C: "// var x = 0; /* var y = 0; */",
    answer4D: "/* var x = 0; */ var y = 0;",
    // Correct answer is D
}

// Question 5
var questionFive = {
    question5: "5. Which of the following methods is used to access HTML elements using Javascript?",
    answer5A: "getElementByID()",
    answer5B: "getElementsByClassName",
    answer5C: "Both A and B",
    answer5D: "None of the Above",
    // Correct answer is C
}

// Declaring Timer for 60 seconds
function timer() {
var time = 1
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
}

// Replaces the original "#divstartquiz" element with "#divquestion" element
function showQuestion() {

}

// Changes question information to next question.
// For correct answer, keep score at 5
// For incorrect answer, subtract 1 point and subtract 10 seconds from the timer
function changeQuestion() {

}

// If player timer runs out, or they get to the end of the quiz, bring them to the final "slide" and 
function endGame() {

}

// Call all functions in sequential order, to be started with a button click of "#start-button"
function startQuiz() {
    showQuestion();
    changeQuestion();
    endGame();
}

// When I click the start button
    // Event listener for "#start-button" to start function startQuiz() to start timer and bring up question 1
    
    // Event listener for 

    // I am presented with another question
        // Bring up the second question, etc.

    // When I answer a question incorrectly
        // Then time is subtracted from the clock

    // When all questions are answered or the time reaches 0
        // Then the game is over

    // When the game is over
        // Then I can save my initials and score
        // Save score array to localstorage.