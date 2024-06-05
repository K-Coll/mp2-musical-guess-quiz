//* add code to declare variables for questions to use within the quiz
const questions = [
    {
        question: "Just a small town girl / Livin' in a lonely world / She took the midnight train going anywhere",
        answers: [
            { text: "Don't Stop Believin - Journey", correct: true},
            { text: "Imagine - John Lennon", correct: false},
            { text: "Hey Jude - The Beatles", correct: false},
            { text: "Don’t Let Me Go - The Click Five", correct: false},
        ]
    },
    {
        question: "One taught me love / One taught me patience / And one taught me pain / Now, I'm so amazing",
        answers: [
            { text: "Thank U, Next - Ariana Grande", correct: true},
            { text: "New Rules - Dua Lipa", correct: false},
            { text: "The Climb - Miley Cyrus", correct: false},
            { text: "Blinding Lights - The Weeknd", correct: false},
        ]
    },
    {
        question: "When you leave, I'm begging you not to go / Call your name two, three times in a row",
        answers: [
            { text: "Diamonds - Rihanna", correct: false},
            { text: "Crazy in Love - Beyoncé", correct: true},
            { text: "Call Me Maybe - Carly Rae Jepsen", correct: false},
            { text: "Stay With Me - Sam Smith", correct: false},
        ] 
    },
    {
        question: "You promised the world and I fell for it / I put you first and you adored it / Set fires to my forest / And you let it burn",
        answers: [
            { text: "I Knew You Were Trouble - Taylor Swift", correct: false},
            { text: "Circles - Post Malone", correct: false},
            { text: "Wrecking Ball - Miley Cyrus", correct: false},
            { text: "Lose You to Love Me - Selena Gomez", correct: true},
        ] 
    },
];

//*Declare Variables

//* declare variables for the question, answer options and controls button
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

//* declare and store question index and score variables
let currentQuestionIndex = 0;
let score = 0;

//* Functions

//* Function to start quiz pp, to set or re-set the score and the question index to 0. It will then call the function to show the next quesiton
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

//* Function to show the question number with a full stop to add visual structure and feedback for user to know which question they are on.
//* Function also used to increase the question index and bring in the next question. This also shows the answer options to choose from.
//* Function will also check to see if the answer is true or false from the dataset held within the questions array

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

//* Function to reset and remove all previous question and answer options.
//* This is called in the showQuestions function, in order to reset the html elements to then bring in the new questions and answers
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

//* Function to select answer. Click on answer button, it will add selected button element then it will check selected button dataset.
//* If the data set is true, it will add class name of correct. If the dataset is not true / false, it will add the class name of incorrect.
//* Backgound colour will then be added depending on class name - in css
//* For each button, it will check the dataset to see if it is true / false. Then afterwards it will disable ability to click on different buttons
//* If answer is correct, it will also increase the score by 1
//* It will then display the next button to move to the next question in the quiz

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block"
}

//* Function to show the score
function showScore(){
    resetState();
    questionElement.innerHTML = `Well done for completing the quiz! <br><br> You answered ${score} out of ${questions.length} questions correctly!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

//* Function for if there is another question in the list, it will display this. Otherwise, if there are no more questions, it will display the score if at the end of the quiz
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}

//* Event listener and if / else statement to check the length of the quiz; this will either load the next question, or start the quiz again, if at the end of the questions length
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();