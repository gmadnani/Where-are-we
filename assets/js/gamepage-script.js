// Retrieve all the relevant objects from the HTML through the DOM.
const pictureContainer = "";
const answerContainer = document.getElementById("answer-buttons");
const ansContainer1 = document.getElementById("answer-1"); // Want to rename these, but need to change throughout the document.
const ansContainer2 = document.getElementById("answer-2");
const ansContainer3 = document.getElementById("answer-3");
const ansContainer4 = document.getElementById("answer-4");
const questionImage = document.getElementById("img-answer");

//global variables
let quesNum = 0;
let numQues = 0;
let flag = 0;
let score = 0;
let rightAnswer = [];

const timerContainer = document.getElementById("start-btn"); // This needs changing when a new element is built.
const scoreContainer = document.getElementById("next-btn"); // This needs changing when a new element is built.

// This function will run both API functions, and return the place name and photo of the right answer in an array.
async function getLocation() {
  //using the api to get a random city and country name
  const newLocation = await getGeoName();
  //using the api to get a random picture of the city
  const locationPhoto = await getPhoto(newLocation[0]);
  //adding the answer in a string format
  const newLocString = `${newLocation[0]}, ${newLocation[1]}`;
  rightAnswer = newLocString;
  return [newLocString, locationPhoto];
}

function getGeoName() {
  //URL for getting the 50 famous cities
  var queryURL =
    "https://dataservice.accuweather.com/locations/v1/topcities/50?apikey=nqkAVAuvzGPmrydtswPleNqPjEwoDmOJ";
  let randomNumber = Math.floor(Math.random() * 49);
  var array = [];
  //fetch them using a random variable
  return fetch(queryURL)
    .then((res) => res.json())
    .then((data) => {
      let country = data[randomNumber].Country.LocalizedName;
      let city = data[randomNumber].LocalizedName;
      array.push(city, country);
      return array;
    });
}

function getPhoto(city) {
  //URL for getting a city picture
  var queryURL =
    "https://api.unsplash.com/search/photos?query=" +
    city +
    "&client_id=1tOjV5-F3U0hFpgkRGZtFpfT_LjrRVAzn3Ho6t522oQ";
    //randomising from the first 5 pictures
  let randomNumber = Math.floor(Math.random() * 5);
  //fetch them using a random variable
  return fetch(queryURL)
    .then((response) => response.json())
    .then((data) => {
      let allImages = data.results[randomNumber];
      return allImages.urls.regular;
    });
}

// This will run the GeoNames API function 3 times, and make sure the same result isn't selected.
async function getOtherLocations() {
  const threeCities = [];
  //looping till threeCities reaches 3 random cities
  while (threeCities.length != 3) {
    //using the api to get 3 random city names
    const newCity = await getGeoName();
    //check for if the random cities dont repeat or doesn't match with the answer
    if (
      !threeCities.includes(`${newCity[0]}, ${newCity[1]}`) &&
      !threeCities.includes(rightAnswer)
    ) {
      threeCities.push(`${newCity[0]}, ${newCity[1]}`);
    }
  }
  return threeCities;
}

// Function to generate an object that contains the image and all four answers.
async function generateQuestionObject() {
  //getting the right answer
  const correctLocation = await getLocation();
  //getting the other locations
  const otherLocations = await getOtherLocations();
  //returing the right option, image of the correct option and the other options 
  const questionObject = {
    image: correctLocation[1],
    answer1: correctLocation[0],
    answer2: otherLocations[0],
    answer3: otherLocations[1],
    answer4: otherLocations[2],
  };

  return questionObject;
}

// Function to push the answer options to the HTML in a random order.
async function generateNewQuestion() {
  //increamenting the question number
  quesNum++;
  //check for if the question number is within the number of questions chosen
  if (quesNum < numQues) {
    const questionObject = await generateQuestionObject();
    const allAnswers = [
      questionObject.answer1,
      questionObject.answer2,
      questionObject.answer3,
      questionObject.answer4,
    ];
    const allPlacements = [
      ansContainer1,
      ansContainer2,
      ansContainer3,
      ansContainer4,
    ];
    const usedPlacements = [];

    //randomising the options for the cities
    const correctPlacement = Math.floor(Math.random() * 4);
    allPlacements[correctPlacement].innerHTML = allAnswers[0];
    allPlacements[correctPlacement].setAttribute("class", "btn correct");

    usedPlacements.push(allPlacements[correctPlacement]);

    //adding the options to the html
    while (usedPlacements.length < 4) {
      const nextPosition = Math.floor(Math.random() * 4);
      const nextPlacement = allPlacements[nextPosition];
      const nextAnswer = usedPlacements.length;
      if (!usedPlacements.includes(nextPlacement)) {
        nextPlacement.innerHTML = allAnswers[nextAnswer];
        nextPlacement.setAttribute("class", "btn incorrect");
        usedPlacements.push(nextPlacement);
      }
    }

    //adding the image to the html
    const photo = questionObject.image;
    questionImage.style.backgroundImage = `url(${photo})`;
  } else {
    //if the questions are over save score and display it
    saveScore();
    displayScore();
  }
}

// Event listener for answer container.
const answerChosen = (event) => {
  const answerPicked = event.target;
  const correctAnswer = document.querySelector(".correct");
  //check if answer is correct
  if (answerPicked === correctAnswer) {
    score++; 
  }
  //display it to the score in the html
  scoreContainer.innerText = score;
  if (flag == 0) {
    //generating the timer based on which type of quiz is it
    secondsLeft = document.querySelector('[name="timeqt"]').value;
    generateNewQuestion();
  } else {
    generateNewQuestion();
  }
};
answerContainer.addEventListener("click", answerChosen);

// check for which type of quiz is chosen
function timerCheck() {
  if (flag == 0) {
    return document.querySelector('[name="timeqt"]').value;
  } else {
    return document.querySelector('[name="timewt"]').value;
  }
}

//function to start the timer for the quiz or the question
function startTimer() {
  secondsLeft = timerCheck();
  //creating a set interval for the timer
  const timerInterval = setInterval(function () {

    //adding it to the html
    timerContainer.innerHTML = secondsLeft + " seconds remaining.";
    secondsLeft--;
    if (flag == 0) {
      if (secondsLeft < 0) {
        secondsLeft = document.querySelector('[name="timeqt"]').value;
        //decrement of score if the time runs out
        if (score > 0) {
          score--;
        }
        scoreContainer.innerText = score;
        generateNewQuestion();
      }
      //stop the timer when quiz is over
      if (quesNum == numQues) {
        clearInterval(timerInterval);
      }
    } else {
      if (quesNum == numQues) {
        clearInterval(timerInterval);
      } else if (secondsLeft < 0) {
        clearInterval(timerInterval);
        saveScore();
        displayScore();
      }
    }
  }, 1000);
}

//function to save the score 
function saveScore() {
  // storing the score in "scores"
  var storedScore = localStorage.getItem("scores");
  var arrayScore = [];
  if (storedScore) {
    arrayScore = JSON.parse(storedScore);
  }
  //different ways of storing based on different quizzes
  if (flag == 0) {
    var playerscore = {
      quizType: "Questions timer",
      totalQues: document.querySelector('input[name="quesNum"]:checked').value,
      scores: score,
    };
  } else {
    var playerscore = {
      quizType: "Quiz timer",
      totalQues: document.querySelector('input[name="quesNum"]:checked').value,
      scores: score,
      time: document.querySelector('[name="timewt"]').value - secondsLeft - 1,
      totaltime: document.querySelector('[name="timewt"]').value,
    };
  }
  arrayScore.push(playerscore);

  var savingArray = JSON.stringify(arrayScore);
  window.localStorage.setItem("scores", savingArray);
}

//function to display the score
function displayScore() {
  document.getElementById("high-score-list").innerHTML = "";
  document.getElementById("home").style.display = "none";
  document.getElementById("quiz").style.display = "none";
  document.getElementById("highscore").style.display = "block";
  document.getElementById("settings").style.display = "none";
  var savedScores = localStorage.getItem("scores");
  if (savedScores == null) {
    return;
  }
  if (savedScores) {
    var AllScores = JSON.parse(savedScores);

    //displaying scores in the html
    for (var i = 0; i < AllScores.length; i++) {
      var eachscore = document.createElement("h5");
      if (!AllScores[i].time) {
        eachscore.innerHTML =
          AllScores[i].quizType +
          " : " +
          AllScores[i].scores +
          "/" +
          AllScores[i].totalQues;
      } else {
        eachscore.innerHTML =
          AllScores[i].quizType +
          " : " +
          AllScores[i].scores +
          "/" +
          AllScores[i].totalQues +
          " in " +
          AllScores[i].time +
          " seconds " +
          " of " +
          AllScores[i].totaltime +
          " seconds";
      }
      document.getElementById("high-score-list").append(eachscore);
    }
  }
}

//function to clear the scores
function clearScores() {
  localStorage.removeItem("scores");
  document.getElementById("high-score-list").innerHTML = "";
}

//fuction to start the quiz
function startquiz() {
  if (document.getElementById("name").value === "") {
    alert("please type your name to start the game");
    return;
  }
  document.getElementById("highest-score").innerHTML =
  document.getElementById("name").value + " your High Scores are:";
  document.getElementById("home").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  document.getElementById("highscore").style.display = "none";
  document.getElementById("settings").style.display = "none";
  numQues = document.querySelector('input[name="quesNum"]:checked').value;
  score = 0;
  scoreContainer.innerText = score;
  quesNum = -1;
  startTimer();
  generateNewQuestion();
}

//function to open the setting
function opensettings() {
  if (document.getElementById("name").value === "") {
    alert("Please type your name to open the settings!");
    return;
  }
  document.getElementById("home").style.display = "none";
  document.getElementById("quiz").style.display = "none";
  document.getElementById("highscore").style.display = "none";
  document.getElementById("settings").style.display = "block";
}

//function to check if the timer is for question
function timerqCheck() {
  flag = 0;
  document.getElementById("qtime").style.display = "block";
  document.getElementById("wtime").style.display = "none";
}

//function to check if the timer is for the whole quiz
function timerwCheck() {
  flag = 1;
  document.getElementById("qtime").style.display = "none";
  document.getElementById("wtime").style.display = "block";
}

//function to go the home page
function gohome() {
  document.getElementById("home").style.display = "block";
  document.getElementById("quiz").style.display = "none";
  document.getElementById("highscore").style.display = "none";
  document.getElementById("settings").style.display = "none";
}
