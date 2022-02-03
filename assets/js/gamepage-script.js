// ID Tags we will need to store under variables in the HTML:
const pictureContainer = "";
const ansContainer1 = "";
const ansContainer2 = "";
const ansContainer3 = "";
const ansContainer4 = "";

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


// Function to generate an object that contains the image and all four answers.


// Function to randomise the order of the four answers.
// Function to run when correct answer is selected.
// Function to run when incorrect answer is selected.
// Function that generates a new question when the question is answered.
// Timer that resets with each new question.

// Function to present scores.
// Function to collect user input / their name.
// Function to store score and name.
// Function to restart the game. 