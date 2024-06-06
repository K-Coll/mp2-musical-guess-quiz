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
    {
        question: "So do us all a favour / Would you find somebody else to blame / 'Cause your words are like bullets and I'm the way your weapons aim",
        answers: [
            { text: "Burnin' Up - The Jonas Brothers", correct: false},
            { text: "Who's David - Busted", correct: false},
            { text: "Lies - McFly", correct: true},
            { text: "Toxic - Britney Spears", correct: false},
        ] 
    },
    {
        question: "I gave my all for you / Now my heart's in two / And I can't find the other half",
        answers: [
            { text: "S.O.S - The Jonas Brothers", correct: true},
            { text: "Hey Jude - The Beatles", correct: false},
            { text: "That's The Truth - McFly", correct: false},
            { text: "Sunny Days - The Wanted", correct: false},
        ] 
    },
    {
        question: "Maybe I'm dancing in the dark / With you between my arms / Barefoot on the grass / While listenin' to our favourite song",
        answers: [
            { text: "Unwritten - Natasha Bedingfield", correct: false},
            { text: "Perfect - Ed Sheeran", correct: true},
            { text: "Stay With Me - Sam Smith", correct: false},
            { text: "Counting Stars - One Republic", correct: false},
        ] 
    },
    {
        question: "Come on, come on, turn the radio on / It's Friday night and I won't be long / Gotta do my hair, put my make up on",
        answers: [
            { text: "Just Dance - Lady Gaga", correct: false},
            { text: "Royals - Lorde", correct: false},
            { text: "Diamonds - Rihanna", correct: false},
            { text: "Cheap Thrills - Sia", correct: true,}
        ] 
    },
    {
        question: "Remember those walls I built? / Well, baby, they're tumbling down / And they didn't even put up a fight",
        answers: [
            { text: "Halo - Beyoncé", correct: true},
            { text: "Bleeding Love - Leona Lewis", correct: false},
            { text: "Battlefield - Jordin Sparks", correct: false},
            { text: "Chandelier - Sia", correct: false,}
        ] 
    },
    {
        question: "If you gave me a chance, I would take it / It's a shot in the dark, but I'll make it",
        answers: [
            { text: "Talking to the Moon - Bruno Mars", correct: false},
            { text: "Rather Be - Clean Bandit feat. Jess Glynne", correct: true},
            { text: "Battlefield - Jordin Sparks", correct: false},
            { text: "I'm Yours - Jason Mraz", correct: false,}
        ] 
    },
];

//*Declare Variables

//* declare variables for the question, answer options and controls button
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const startButton = document.getElementById("start-btn");
const questionContainer = document.getElementById("question-container");
const rulesButton = document.getElementById("open-button");

//* declare and store question index and score variables
let currentQuestionIndex = 0;
let score = 0;
let numOfNum = 1;

//* Functions

//* Function to hide menu control buttons, start quiz app, to set or re-set the score and the question index to 0. It will then call the function to show the next quesiton
function startQuiz(){
    startButton.classList.add("hide");
    rulesButton.classList.add("hide");
    questionContainer.classList.remove("hide");
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
    document.getElementById('num-of-num').style.display = 'block';
    document.getElementById('num-of-num').innerHTML = `Question ${numOfNum} of ${questions.length}`;
}

//* Function to show the question number with a full stop to add visual structure and feedback for user to know which question they are on.
//* Function also used to increase the question index and bring in the next question. This also shows the answer options to choose from.
//* Function will also check to see if the answer is true or false from the dataset held within the questions array

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    document.getElementById('num-of-num').innerHTML = `Question ${numOfNum} of ${questions.length}`;
    questionElement.innerHTML = currentQuestion.question;

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
    nextButton.style.display = "block";
}

//* Function to show the score
//* Function also hides the question counter
function showScore(){
    resetState();
    questionElement.innerHTML = `Well done for completing the quiz! <br><br> You answered ${score} out of ${questions.length} questions correctly!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";

    document.getElementById('num-of-num').style.display = 'none';
}

//* Function includes if statement for if there is another question in the list, it will display this. Otherwise, if there are no more questions, it will display the score if at the end of the quiz
//* Function increases question counter by 1 for each question within the array.
//* Function includes if statement which resets the question counter - when it gets to question ten, start again at question 1. Quiz only has 10 questions, so when the user restarts, it will reset the question counter back to 1 of 10.
function handleNextButton(){
    numOfNum++;
    if (numOfNum > 10) {
        numOfNum = 1;
    }
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

// Event listener for start button to start quiz.//
startButton.addEventListener('click', startQuiz);