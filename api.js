// Key:
// var apikey= "8b490cb315b9b22931c2ddb2cf874056";

// Secret:
// f68539db0a12a37c

// Access Key
// 1tOjV5-F3U0hFpgkRGZtFpfT_LjrRVAzn3Ho6t522oQ
// Secret key
// FOQftVae2YdQSYHyigg3xabCR4A3x8ZgerU-R7L5lkA


//https://www.flickr.com/services/api/explore/flickr.photos.search
// 'https://api.unsplash.com/search/photos?query=london&client_id=<YOUR CLIENT ID GOES HERE>';

function photo() {
    //URL
    var queryURL = 'https://api.unsplash.com/search/photos?query=mumbai&client_id=1tOjV5-F3U0hFpgkRGZtFpfT_LjrRVAzn3Ho6t522oQ';
    let randomNumber = Math.floor(Math.random() * 5);
      return fetch(queryURL)
        .then((response) => response.json())
        .then((data) => {
          let allImages = data.results[randomNumber];
          console.log(allImages.urls.regular);

          document.getElementById("img-answer").style.backgroundImage = "url(" + allImages.urls.regular + ")"
        //   var img = document.createElement("img");
        //   img.src = allImages.urls.regular;
        //   var src = document.getElementById("img-answer")
        //   src.appendChild(img)
          
        //   $("#img-answer").append(`
        //   <img src= "${allImages.urls.regular}"/> 
        //   `)
        });
}
photo();

  