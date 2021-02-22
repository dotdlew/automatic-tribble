let quizScore = 0;
let timeLeft = 30;
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const quizContainerEl = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
let shuffledQuestions, currentQuestionIndex;

// start quiz
startButton.addEventListener('click', startQuiz);

function startQuiz() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    quizContainerEl.classList.remove('hide');
    setNextQuestion();
    // start timer
    countdown();
};

// next question
function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    // display question
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

function resetState() {
    // nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

// select answer
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    //   nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
  }
  
  function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
      quizScore++
      currentQuestionIndex++
      setNextQuestion()
    } else {
      element.classList.add('wrong')
      timeLeft--
      currentQuestionIndex++
      setNextQuestion()
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
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
            { text: "Douglas Crockford", correct: false },
            { text: "Sheryl Sandberg", correct: false },
            { text: "Brendan Eich", correct: true },
            { text: "option d", correct: false },
        ]
    },
    {
        question: "Which one of these is a JavaScript package manager?",
        answers: [
            { text: "Node.js", correct: false },
            { text: "TypeScript", correct: false },
            { text: "npm", correct: true },
            { text: "option d", correct: false },
        ]
    },
    {
        question: "Which tool can you use to ensure code quality?",
        answers: [
            { text: "Angular", correct: false },
            { text: "jQuery", correct: false },
            { text: "RequireJS", correct: false },
            { text: "ESLint", correct: true },
        ]
    },
    {
        question: "VSCode is short for?",
        answers: [
            { text: "very short code", correct: false },
            { text: "vulnerable string code", correct: false },
            { text: "visual studio code", correct: true },
            { text: "option d", correct: false },
        ]
    },
    {
        question: "Which one of these is option d?",
        answers: [
            { text: "option a", correct: false },
            { text: "option b", correct: false },
            { text: "option c", correct: false },
            { text: "option d", correct: true },
        ]
    },
    {
        question: "which is better?",
        answers: [
            { text: "a dog", correct: true },
            { text: "a cat", correct: false },
            { text: "a bird", correct: false },
            { text: "a bee", correct: false },
        ]
    }
];
