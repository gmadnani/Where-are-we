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
}

// Event listener for answer container. 
const answerChosen = event => {
    const answerPicked = event.target;
    const correctAnswer = document.querySelector(".correct");
    if (answerPicked === correctAnswer) {
        score++; // This needs to be pushed to the page, currently no container for it. 
        pushQuestions(questionObject);
        console.log(score);
    } else {
        score--; // This needs to be pushed to the page.
        pushQuestions(questionObject);
        console.log(score);
    };
    pushPhotograph();
    resetTimer();
}
answerContainer.addEventListener("click", answerChosen);

// Timer that resets with each new question.
const resetTimer = () => {
    console.log("The timer should be reset.")
}

/*
function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correctAns = questions[que_count].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correctAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn.classList.add("show"); //show the next button if user selected any option
        }
    }
}
*/

// Function to present scores.
// Function to collect user input / their name.
// Function to push high scores and username to local storage.
// Fucntion to retrieve high scores and username from local storage.
// Function to restart the game.