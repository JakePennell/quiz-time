# Quiz Time!

## Hello and welcome to my second Portfolio Project for my Diploma in Software Development (E-commerce Applications). 

For this project, I have created a fun & interactive, mulitple choice quiz. The aim of my site is to encourage individuals to take part in the quiz, testing their general knowledge skills, and saving their score to see how they have done against other users. 

This leaderboard element adds a much needed sense of competition and will inspite the user to continue playing.

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
- One of my favourite feature is fact the correct answers highlight green, and the incorrect answers highlight red. 
![Game Page](https://github.com/JakePennell/quiz-time/blob/main/assets/images/game-page.jpeg)
#### Correct Answer
![Correct Answer](https://github.com/JakePennell/quiz-time/blob/main/assets/images/correct-answer.jpeg)
#### Incorrect Answer
![Incorrect Answer](https://github.com/JakePennell/quiz-time/blob/main/assets/images/incorrect-answer.jpeg)

### The End Page
- The end page brings the quiz experience to a nice close. 
- The user is presented with their score and is encouraged to save the score. Alternetievly, they can play the quiz again for head back to the home page.
- If the customer choses to save their score they can enter their name so it is saved with their score to the leaderboard.
- The handy 'disable' function on the save button means they cannot save without enterng their name. 
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

![Lighthouse](https://github.com/JakePennell/the-box-hub/blob/main/assets/images/lighthouse-readme.png)

## Bugs

I encountered several bugs along my journey. The main issues were around content display and responsiveness.
- Section Heights: I had originally given each section of a defined height. This meant that although they looked fine on my desktop, they would not respond to my effort to make the website responsive on different devises. This was resolved by removing the height value on various sections. 
- My navigation links overlapped on smaller devices. My initial solution was to reduce the text size but that negatively affected the aesthetics of the site. Therefore, to fix this I used the display: flex function to re-order the Nav links. 
- My Social Media links were also problematic as they were stacking on smaller devices. This was due to unnecessarily large border and margins. When these were reduced, the links lined up a behaved how I intended. 

## Unfixed Bugs

I have no unfixed bugs. 

## Deployment 

This website was deployed to GitHub pages. The steps to deploy are as follows:

1. In the GitHub repository, navigate to settings tab.
2. From the source section drop-down menu, select the Master Branch.
3. Once the Master Branch has been selected, the page provided the link to the completed website.

- Here is the link to the repository: [My Repository](https://github.com/JakePennell/the-box-hub)
- Here is the link to the live website: [The Box Hub](https://jakepennell.github.io/the-box-hub/)

## Credits

### Content
- The Slack Community were amazing and helped me fix bugs and improve my designs throughout my project.
- My mentor Jack gave me numerous suggestions on layout and section sizing to make my website more visually appealing. 
- I used W3C regularly for bug fixes and suggested features.
- The code in the CI Love Running Project served as inspiration for my website within many places. No coded directly used but used as inspiration to create my own.

### Media
- All my images are from: [Pexels](https://www.pexels.com/)
- All my Icons are from : [Font Awesome](https://fontawesome.com/)