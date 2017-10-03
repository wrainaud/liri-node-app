// William Rainaud
// Rutgers Coding Bootcamp 
// Homework 8 - Liri Node App

var request = require("request");


// Twitter Function



// Spotify Function




// OMDB Function
function movieThis (movie) {
    "use strict";
    // NPM Package dependencies
    var request = require('request');

    request("http://www.omdbapi.com/?t=" + arg3 + "&y=&plot=short&apikey=40e9cece", function(error, response, body) {
        if (!error && response.statusCode === 200) {
  
          var movieInfo = JSON.parse(body);
          console.log(
            "Rating: " + movieInfo.Rated + '\n',
            "IMDB Rating: " + movieInfo.imdbRating + '\n',
            "Year: " + movieInfo.Year + '\n',
            "Plot: " + movieInfo.Plot + '\n',
            "Actors: " + movieInfo.Actors + '\n',
            "DVD Date: " + movieInfo.DVD + '\n',
            "Box Office: " + movieInfo.BoxOffice + '\n',
            "Website: " + movieInfo.website + '\n',
            "Awards: " + movieInfo.Awards + '\n',
            "Directed By: " + movieInfo.Director + '\n',
            "Genre: " + movieInfo.Genre + '\n',
            "Runtime: " + movieInfo.Runtime + '\n',
            "Language: " + movieInfo.Language + '\n',
            "Country: " + movieInfo.Country + '\n'
          );
  
        }
      });
    }

}



// fs Function