// Variables for initials and high score.
var userInitials = []
var userInput = ""
var highScore = []



// Variables for questions
var questionOne = {
    question1: "1. Which of the following keywords is used to define a variable in Javascript?",
    answer1A: "var",
    answer1B: "let",
    answer1C: "Both A and B",
    answer1D: "None of the Above",
    // Correct answer is C
}

var questionTwo = {
    question2: "2. Which method returns the character at the specified index?",
    answer2A: "charAt()",
    answer2B: "getCharAt()",
    answer3C: "characterAt()",
    answer4D: "None of the Above",
    // Correct answer is A
}

var questionThree = {
    question3: "3. What type of language is Javascript?",
    answer3A: "Object-Based",
    answer3B: "Object-Oriented",
    answer3C: "Procedural",
    answer3D: "Coffee",
    // Correct answer is B
}

var questionFour = {
    questionA: "4. Which of these contain an executable statement?",
    answer4A: "// var x = 0; // var y = 0;", 
    answer4B: "/* var x = 0; // var y = 0; */",
    answer4C: "// var x = 0; /* var y = 0; */",
    answer4D: "/* var x = 0; */ var y = 0;",
    // Correct answer is D
}

var questionFive = {
    question5: "5. Which of the following methods is used to access HTML elements using Javascript?",
    answer5A: "getElementByID()",
    answer5B: "getElementsByClassName",
    answer5C: "Both A and B",
    answer5D: "None of the Above",
    // Correct answer is C
}

// Declaring Timer for 60 seconds
// Event listeneer starting when "start Quiz" is clicked
var time = 5
var countDown = setInterval(function() {  
    document.getElementById("countdown").textContent = "Time left: " + time + " seconds"; 
    if (time === 0) {
        alert("Sorry but you have run out of time");
        clearInterval(countDown);
    }
    else if (time > 0) {
        time --;
    }    
}, 1000)

// Event listener for start button starting the timer and showing the first question.

// Question 1
    // Array with answers

// Question 2
    // Array with answers

// Question 3
    // Array with answers

// Question 4
    // Array with answers

// Question 5
    // Array with answers


// When I click the start button
    // Create start button with event listener
    // A timer starts and I am presented with a question
    
    // When I answer a question
        // Create an event listener for the various answers

    // I am presented with another question
        // Bring up the second question, etc.

    // When I answer a question incorrectly
        // Then time is subtracted from the clock

    // When all questions are answered or the time reaches 0
        // Then the game is over

    // When the game is over
        // Then I can save my initials and score
        // Save score array to localstorage.