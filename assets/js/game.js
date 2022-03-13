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
        question: 'What is 2 + 2?',
        Choice1: '2',
        Choice2: '4',
        Choice3: '21',
        Choice4: '17',
        answer: 2,
    },
    {
        question: 'What the capital of England?',
        Choice1: 'London',
        Choice2: 'Paris',
        Choice3: 'Madrid',
        Choice4: 'Rome',
        answer: 1,
    },
    {
        question: 'What team does Harry Kane play for?',
        Choice1: 'Man Utd',
        Choice2: 'Man City',
        Choice3: 'Spurs',
        Choice4: 'Chelsea',
        answer: 3,
    },
    {
        question: 'What is the hottest planet?',
        Choice1: 'Earth',
        Choice2: 'Mars',
        Choice3: 'Saturn',
        Choice4: 'Venus',
        answer: 4,
    }
]