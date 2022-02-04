// ID Tags we will need to store under variables in the HTML:
const pictureContainer = "";
const ansContainer1 = document.getElementById("answer-1");
const ansContainer2 = document.getElementById("answer-2");
const ansContainer3 = document.getElementById("answer-3");
const ansContainer4 = document.getElementById("answer-4");

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

// Function to run when correct answer is selected.
// Function to run when incorrect answer is selected.

// Function that generates a new question when the question is answered.
const questionObject = generateQuestionObj(getNewLocation(), getOtherLocations());

pushQuestions(questionObject);
console.log(ansContainer1)

// Timer that resets with each new question.

// Function to present scores.
// Function to collect user input / their name.
// Function to store score and name.
// Function to restart the game.