let startQuizBtn = document.getElementById('btn-start-quiz');
const questionElement = docu

let quizScore = 0;
let timeLeft = 30;

const quizQuestions = [
    {
        question: "Who invented JavaScript?",
        answers: [
            { a: "Douglas Crockford", correct: false },
            { b: "Sheryl Sandberg", correct: false },
            { c: "Brendan Eich", correct: true },
            { d: "option d", correct: false },
        ]
    },
    {
        question: "Which one of these is a JavaScript package manager?",
        answers: [
            { a: "Node.js", correct: false },
            { b: "TypeScript", correct: false },
            { c: "npm", correct: true },
            { d: "option d", correct: false },
        ]
    },
    {
        question: "Which tool can you use to ensure code quality?",
        answers: [
            { a: "Angular", correct: false },
            { b: "jQuery", correct: false },
            { c: "RequireJS", correct: false },
            { d: "ESLint", correct: true },
        ]
    }
];

function quiz() {
    let quizBox = document.getElementById("quiz-box");

    for (let i = 0; i < quizQuestions.length; i++) {
        let quizItem = `
        <div class="quiz-box" id="quiz-box">
            <div id="questions"><h2>${quizQuestions[i].question}</h2></div>
                <div id="answer-buttons" class="answer-buttons btn">
                    <button>${quizQuestions[i].answers.a}</button>
                    <button>${quizQuestions[i].answers.b}</button>
                    <button>${quizQuestions[i].answers.c}</button>
                    <button>${quizQuestions[i].answers.d}</button>
                </div>
            </div>
        </div>
        `
        quizBox.innerHTML = quizItem;
        // nextQuestion();


    };
};

// Timer that counts down from 60
function countdown() {
    let timerEl = document.getElementById("quiz-timer");
    timerEl.className = "quiz-timer";
    timerEl.textContent = 'Begin!';

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    let timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = timeLeft + ' seconds remaining';
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = 'Game Over';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
        };

    }, 1000);
};

function startQuiz() {
    console.log("quizzing");
    // start timer
    countdown();
    // create quiz
    quiz();
};

startQuizBtn.addEventListener('click', startQuiz);
