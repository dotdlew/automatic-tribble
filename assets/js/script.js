let quizScore = 0;
let timeLeft = 30;
const startButton = document.getElementById('start-btn');
const quizContainerEl = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
let shuffledQuestions, currentQuestionIndex;

// start quiz
startButton.addEventListener('click', startQuiz);

function startQuiz() {
    console.log("quizzing");
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    quizContainerEl.classList.remove('hide');
    setNextQuestion();
    // start timer
    countdown();
    // create quiz
    // quiz();
};

// next question
function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

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

function resetState(){

}

// select answer
function selectAnswer(e) {

}

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

const questions = [
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
