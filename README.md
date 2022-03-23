# Quiz Time!

## Hello and welcome to my second Portfolio Project for my Diploma in Software Development (E-commerce Applications). 

For this project, I have created a fun & interactive, multiple-choice quiz. The aim of my site is to encourage individuals to take part in the quiz, testing their general knowledge skills, and saving their score to see how they have done against other users. 

This Leaderboard element adds a much needed sense of competition and will inspire the user to continue playing.

You can see my website here: [Quiz Time!](https://jakepennell.github.io/quiz-time/)

![Am I Responsive Image](https://github.com/JakePennell/quiz-time/blob/main/assets/quiz-time-amiresponsive.jpeg)

## Existing Features

### The Home Page
- The big, bold heading here starts off with a challenge for the user to gain buy in. 
- The colour scheme is clearly set out with a dark background against an almost neon blue that is reminiscent of old school gaming.
- The use of Font Awesome icons makes the page more visually appealing.
- The Leaderboard button is intentionally a contrasting colour. The gold-like colour links well with the trophy icon and everyone is aiming to win.
![Home Page](https://github.com/JakePennell/quiz-time/blob/main/assets/images/home-page.jpeg)

### The Game Page
- The game page is a continuation of the main colour theme. 
- The inclusion bar is a visually stimulating addition that counts the users progress throughout the game.
- The users score is added up and displayed on the top right to monitor player success.
- One of my favourite features is fact the correct answers highlight green, and the incorrect answers highlight red. 
![Game Page](https://github.com/JakePennell/quiz-time/blob/main/assets/images/game-page.jpeg)
#### Correct Answer
![Correct Answer](https://github.com/JakePennell/quiz-time/blob/main/assets/images/correct-answer.jpeg)
#### Incorrect Answer
![Incorrect Answer](https://github.com/JakePennell/quiz-time/blob/main/assets/images/incorrect-answer.jpeg)

### The End Page
- The end page brings the quiz experience to a nice close. 
- The user is presented with their score and is encouraged to save the score. Alternatively, they can play the quiz again for head back to the home page.
- If the customer choses to save their score they can enter their name so it is saved with their score to the Leaderboard.
- The handy 'disable' function on the save button means they cannot save without entering their name. 
- Again, by using icons it brings the options to life for the user and adds visual appeal. 
![End Page](https://github.com/JakePennell/quiz-time/blob/main/assets/images/end-page.jpeg)

### The Leaderboard
- The final feature to mention is he Leaderboard.
- This is an important part of the project to include this function as it brings the player back to play again. 
- The top 5 players and their score will show at any one time. 
![The Leaderboard](https://github.com/JakePennell/quiz-time/blob/main/assets/images/leaderboard.jpeg)


## Future Features

To further improve my website, I would like to add additional features in the future. These include:
1. Improved visuals by adding a neon glow effect to the buttons.
2. Add different difficulty levels to make the experience more challenging.

## Testing

Testing was a crucial part of my process to ensure my website performed as well as possible. Below I have detailed the steps I took to test my site comprehensively. I successfully tested my website in the following browsers: Chrome, Safari & Firefox. With the help of friends and family, I am confident my website works responsively on all popular devices. 

### Validation
- HTML: No errors were returned when passing through the official W3C validator. Files tested:
1. index.html
2. game.html
3. end.html
4. leaderboard.html
- CSS: No errors were found when passing through the official W3C validator. Files tested:
1. style.css
- JavaScrip: No errors were returned when passing through the official JShint validator. Files tested:
1. game.js
2. end.js
3. leaderboard.js

### Lighthouse
- I am really pleased to have such strong Lighthouse scores:
![Lighthouse](https://github.com/JakePennell/quiz-time/blob/main/assets/images/quiz-time-lighthouse.jpeg)

## Bugs

I encountered several bugs along my journey. The main issues were around content display and responsiveness.
- Text and button sizes - I found that the text (H1s & H2s) and buttons were very difficult to get responsive on all device sizes. I fixed this by added media queries for various different max-widths and using bespoke sizing on each. 
- Score showing on Leaderboard - I spent a long time trying to determine why my scores, once saved, did not appear on my Leaderboard. The fix was simple but took me a long time to find. I had linked the wrong .js file. The save function was trying to send the score and username to game.js, not leaderboard.js. The error was my file paths. 
- Displaying my questions - I created my first question with holding text which worked fine. However, when I replaced it with my 10 actual questions that I had written on a separate document, it still displayed the placeholder text. The fix here was again quite simple. I had used a mix of different quotation marks (" and ') which lead to the questions not being registered.

## Unfixed Bugs

I have no unfixed bugs. 

## Deployment 

This website was deployed to GitHub pages. The steps to deploy are as follows:

1. In the GitHub repository, navigate to settings tab.
2. From the source section drop-down menu, select the Master Branch.
3. Once the Master Branch has been selected, the page provided the link to the completed website.

- Here is the link to the repository: [My Repository](https://github.com/JakePennell/quiz-time)
- Here is the link to the live website: [Quiz Time!](https://jakepennell.github.io/quiz-time/)

## Credits

### Content
- The Slack Community were amazing and helped me fix bugs and improve my designs throughout my project.
- My mentor Jack gave me numerous suggestions on layout and section sizing to make my website more visually appealing. 
- I utilised a number of really useful guides & tutorials from various YouTube accounts. Specifically:
1. [Brian Designs](https://www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A)
2. [Code Instinct](https://www.youtube.com/c/CodeInstinct)
3. [Free Code Camp](https://www.youtube.com/c/Freecodecamp)
- I used W3C regularly for bug fixes and suggested features.

### Media
- All my Icons are from: [Font Awesome](https://fontawesome.com/)
- My Font is from: [Google Fonts](https://fonts.google.com/)
