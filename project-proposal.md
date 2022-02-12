# Where Are We?

## 01 Project Description
An education quiz game that uses APIs to retrieve photographs and geographical data. This data will be used to automatically generate multiple choice quiz questions that ask the user to guess where the photo was taken, or 'Where Are We?', and earn points based on the answers they give. 

Using APIs to generate the questions will allow every gameplay experience to be unique, meaning the users are constantly tested to improve their knowledge and learn about the places that the game selects. 

## 02 User Story
As a USER, I WANT to test my geographical knowledge,
So THAT I can improve it for exams, tests, or feeling smart and good about myself.

As a USER, I WANT to track my score,
So THAT I know if my geographical knowledge is improving as I play the game.

As a USER, I WANT the questions to be generated randomly,
So THAT each play through of the game is unique / different.

As a USER, I WANT there to be photographs in the questions,
So THAT I learn what the places in the quiz look like / test visual knowledge of countries.

As a USER, I WANT there to be an audio description of an image if possible,
So THAT if I can't see pictures, I can still play the game. (?)

As a USER, I WANT an adjustable settings page,
So THAT I can decide how long the game takes, how the timer works, etc.

As a USER, I WANT an input where I can put my own city or country,
So THAT I can test my ability to recognise my own city/country, and see if I recognise Where I'm from!


## 03 Wireframe / Sketch of Design
- Landing Page (or Rules Page)
- - Name of the game
- - List of the rules
- - Start button
- - (Maybe a link to a settings page)

- Quiz Game Page
- - Already built a version (link to here: )
- - Main image
- - Four question/answer options
- - A timer / score element

- End Game Page
- - Score
- - Enter your name / high score table
- - Replay button
- - (Maybe a link to the settings page)
- - Exit/back to title page button

- Maybe Settings Page
- - How many questions? (Scroll Bar?)
- - Difficulty settings?
- - Timer settings
- - User input for their own city / country? 

We are going to build a wire frame model in Figma. 

## 04 APIs to Be Used
Flickr API - use to get random (or most popular) images of a randomly generated place, and present them in a webpage.

GeoNames API - use to get random place names / locations, to put into the image search AND generate the other answers.

## 05 Breakdown of the Tasks
https://trello.com/b/DGC1aKYk/where-are-we

### 05A HTML / CSS
- Build a main quiz / question page.
- Build a wire frame / figma model of what the four pages should look like.
- Look the Skeleton CSS framework and work out which features we want to include.
- Work this Skeleton CSS into the main question page.
- Build the landing page and results page.
- Work the Skeleton CSS onto the landing + results pages.
- Build a settings page.

### 05B Javascript (for the Quiz)
- Reset page every time a question is answered.
- Randomise where the 'correct' answer is located.
- Change the image each time the page resets.
- Display a timer, reset the timer each time the page reloads.
- Collect a score and update the page with the score.
- Store user score and a user name into local storage.
- Get the image from an external source / write a function to get the image.
- Get the answers from an external source / write a function for this. 

### 05C APIs
- Work out how to get a random location from GeoNames API.
- Work out how to search for this with the Flickr API.
- Sort the Flickr images so that 'good' images (ie ones with recognisable landmarks) are selected.