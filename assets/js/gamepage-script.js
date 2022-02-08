// Retrieve all the relevant objects from the HTML through the DOM.
const pictureContainer = "";
const answerContainer = document.getElementById("answer-buttons");
const ansContainer1 = document.getElementById("answer-1"); // Want to rename these, but need to change throughout the document. 
const ansContainer2 = document.getElementById("answer-2");
const ansContainer3 = document.getElementById("answer-3");
const ansContainer4 = document.getElementById("answer-4");
const questionImage = document.querySelector(".img-answer").style;

const timerContainer = document.getElementById("start-btn"); // This needs changing when a new element is built.
const scoreContainer = document.getElementById("next-btn"); // This needs changing when a new element is built.
console.log(timerContainer);
console.log(scoreContainer);

// Function to retrieve photo. Will replace with API function.
// This function will generate a random picture of London, and can be used to test the code. 
const getNewLocation = () => {
    const photoArray = ["test-image-1.jpg", "test-image-2.jpg", "test-image-3.jpg", "test-image-4.jpg"];
    const randNo = Math.floor(Math.random() * 4);
    const randPhoto = photoArray[randNo];
    return [randPhoto, "London, UK"];
}

// This is closer to what the API function will actually look like:
const getNewLocationFinal = () => {
    const newLocation = getGeoName();
    const locationPhoto = getPhoto();
    return [newLocation, locationPhoto];
}

// Function to generate four answers. Will replace with API function.
const randomCities = ["Manchester, UK", "Chicago, US", "St. Petersburg, RU", "Dubai, AE", "Marrakesh, MA", "Buenos Aires, AR"]

const getOtherLocations = () => {
    const threeCities = [];
    while (threeCities.length != 3) {
        const newCityPosition = Math.floor(Math.random() * randomCities.length);
        const newCity = randomCities[newCityPosition];
        if (!threeCities.includes(newCity)) {
            threeCities.push(newCity);
        };
    };
    return threeCities;
}

// This will run the GeoNames API function 3 times, and make sure the same result isn't selected.
const getOtherLocationsFinal = () => {
    const threeCities = [];
    while (threeCities.length != 3) {
        const newCity = getGeoNames();
        if (!threeCities.includes(newCity)) {
            threeCities.push(newCity);
        }
    }
    return threeCities;
}

// Function to generate an object that contains the image and all four answers.
const generateQuestionObj = (correctLocation, otherAnswers) => {
    return {
        image: correctLocation[0],
        answer1: correctLocation[1],
        answer2: otherAnswers[0],
        answer3: otherAnswers[1],
        answer4: otherAnswers[2],
    }
}

// Function to push the answer options to the HTML in a random order. 
const pushQuestions = (questions) => {
    const allAnswers = [questions.answer1, questions.answer2, questions.answer3, questions.answer4];
    const allPlacements = [ansContainer1, ansContainer2, ansContainer3, ansContainer4];
    const usedPlacements = [];
    
    const correctPlacement = Math.floor(Math.random() * 4);
    allPlacements[correctPlacement].innerHTML = allAnswers[0];
    allPlacements[correctPlacement].setAttribute("class", "btn correct");
    usedPlacements.push(allPlacements[correctPlacement]);

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
}

// Function to store and display scores.
let score = 0;

// Function that generates a new question when the question is answered.
const questionObject = generateQuestionObj(getNewLocation(), getOtherLocations());

pushQuestions(questionObject); // Should replace this with a 'ReloadPage()' function eventually. 

// Function to push the new photograph:
const pushPhotograph = () => {
    const photo = getNewLocation()[0];
    questionImage.backgroundImage = `url("assets/js/${photo}")`;
} // This needs tidying; the same object needs to pass through this function and the ones above. 

// Event listener for answer container. 
const answerChosen = event => {
    const answerPicked = event.target;
    const correctAnswer = document.querySelector(".correct");
    if (answerPicked === correctAnswer) {
        score++; // This needs to be pushed to the page, currently no container for it. 
        pushQuestions(questionObject);
    } else {
        score--; // This needs to be pushed to the page.
        pushQuestions(questionObject);
    };
    scoreContainer.innerText = score;
    pushPhotograph();
    secondsLeft = 15;
}
answerContainer.addEventListener("click", answerChosen);

// Timer that resets with each new question.
startTimer();
let secondsLeft = 15;
function startTimer() {
    const timerInterval = setInterval(function () {
      timerContainer.innerHTML = secondsLeft + " seconds remaining.";
      secondsLeft--;
      if (secondsLeft < 0) {
        secondsLeft = 15;
        score--;
        scoreContainer.innerText = score;
        pushQuestions(questionObject);
        pushPhotograph();
      }
    }, 1000);
  }



// Function to collect user input / their name.
// Function to push high scores and username to local storage.
// Function to retrieve high scores and username from local storage.
// Function to restart the game.