const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = []

let questions = [{
        question: 'What is the biggest city in the world by population?',
        choice1: 'Beijing',
        choice2: 'Moscow',
        choice3: 'Tokyo',
        choice4: 'London',
        answer: 1,
    },
    {
        question: 'Which country won the first ever FIFA World Cup in 1930 ?',
        choice1: 'Spain',
        choice2: 'Brazil',
        choice3: 'Uruguay',
        choice4: 'France',
        answer: 3,
    },
    {
        question: 'Which nuts are used in marzipan ?',
        choice1: 'Almonds',
        choice2: 'Brazil Nuts',
        choice3: 'Pecans',
        choice4: 'Cashews',
        answer: 1,
    },
    {
        question: 'Which actor played Private Ryan in Saving Private Ryan ?',
        choice1: 'Tom Hanks',
        choice2: 'Vin Disel',
        choice3: 'Edward Norton',
        choice4: 'Matt Damon',
        answer: 4,
    },
    {
        question: 'What is 5 x 5 x 5 ?',
        choice1: '100',
        choice2: '125',
        choice3: '150',
        choice4: '225',
        answer: 2,
    },
    {
        question: 'Which spirit is used in a Pina Colada cocktail ?',
        choice1: 'Vodka',
        choice2: 'Gin',
        choice3: 'Whisky',
        choice4: 'Rum',
        answer: 4,
    },
    {
        question: 'Foo Fighters frontman Dave Grohl started out in which other legendary band ?',
        choice1: 'The Beatles',
        choice2: 'Slipknot',
        choice3: 'Nirvana',
        choice4: 'Pearl Jam',
        answer: 3,
    },
    {
        question: 'What is the collective noun for group of Crows ?',
        choice1: 'Bunch',
        choice2: 'Mob',
        choice3: 'Murder',
        choice4: 'Herd',
        answer: 3,
    },
    {
        question: 'How many bones are in an adult human body ?',
        choice1: '201',
        choice2: '206',
        choice3: '233',
        choice4: '236',
        answer: 2,
    },
    {
        question: 'What is the most used colour in national flags ?',
        choice1: 'Red',
        choice2: 'Blue',
        choice3: 'White',
        choice4: 'Yellow',
        answer: 1,
    }

]

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('/end.html');
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    })

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false;
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()