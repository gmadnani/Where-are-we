// flickr Key:
// var apikey= "8b490cb315b9b22931c2ddb2cf874056";
// Secret:
// f68539db0a12a37c

// pictures Access Key
// 1tOjV5-F3U0hFpgkRGZtFpfT_LjrRVAzn3Ho6t522oQ
// Secret key
// FOQftVae2YdQSYHyigg3xabCR4A3x8ZgerU-R7L5lkA

//city API Key	nqkAVAuvzGPmrydtswPleNqPjEwoDmOJ


//https://www.flickr.com/services/api/explore/flickr.photos.search
// 'https://api.unsplash.com/search/photos?query=london&client_id=<YOUR CLIENT ID GOES HERE>';

// function getGeoNames(){
//     var queryURL = 'http://dataservice.accuweather.com/locations/v1/topcities/50?apikey=nqkAVAuvzGPmrydtswPleNqPjEwoDmOJ';
//     let randomNumber = Math.floor(Math.random() * 49);
//     var array=[]
//     return fetch(queryURL)
//         .then((res) => res.json())
//         .then((data) => {
//         //   let country = data;
//         //   console.log(country[randomNumber].LocalizedName);
//           let country = data[randomNumber].Country.LocalizedName;
//           let city = data[randomNumber].LocalizedName

//           array.push(city, country)
          
//           console.log(array);
//           return (array);
//         })
// }

// async function photo() {
//     //URL
//     city = await getGeoNames();
//     console.log(city)
//     var queryURL = 'https://api.unsplash.com/search/photos?query='+city+'&client_id=1tOjV5-F3U0hFpgkRGZtFpfT_LjrRVAzn3Ho6t522oQ';
//     console.log(queryURL)
//     let randomNumber = Math.floor(Math.random() * 5);
//       return fetch(queryURL)
//         .then((response) => response.json())
//         .then((data) => {
//           let allImages = data.results[randomNumber];
//           console.log(allImages.urls.regular);

//           document.getElementById("img-answer").style.backgroundImage = "url(" + allImages.urls.regular + ")"
//         //   var img = document.createElement("img");
//         //   img.src = allImages.urls.regular;
//         //   var src = document.getElementById("img-answer")
//         //   src.appendChild(img)
          
//         //   $("#img-answer").append(`
//         //   <img src= "${allImages.urls.regular}"/> 
//         //   `)
//         });
// }


// function randomCity(){
//     var queryURL = 'https://countriesnow.space/api/v0.1/countries';
//     return fetch(queryURL)
//         .then((res) => res.json())
//         .then((country) => {
//           let allcountries = country;
//           console.log(country);
//         })
// }

// function randomCity(){
//     var queryURL = 'https://akabab.github.io/superhero-api/api/all.json';
//     let randomNumber = Math.floor(Math.random() * 563);
//     return fetch(queryURL)
//         .then((res) => res.json())
//         .then((superhero) => {
//             console.log(superhero[randomNumber].name);
//           console.log(superhero[randomNumber].images.md);
//         })
// }


// randomCity();
// photo();

