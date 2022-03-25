//Credit: The code for this section draws inspiration from YouTube tutorials from various content creators: Brian Designs, Free Code Camp and Code Instinct. Links on README.//
//Set out basic const functions.//
const highScoresList = document.querySelector('#highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScore')) || [];

//Display high scores and which user achieved them.//
highScoresList.innerHTML =
    highScores.map(score => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`;
    }).join('');