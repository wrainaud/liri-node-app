// William Rainaud
// Rutgers Coding Bootcamp 
// Homework 8 - Liri Node App

var request = require("request");
var fs = require("fs");
var moment = require("moment");

// Declare Variables



// Twitter Function
function myTweets (search) {

  // Twitter Keys / NPM Modules
  var twitterKey = require("./keys.js");
  var twitter = require("twitter");
  var client = new twitter (twitterKey);

  // Get Past 20 Tweets from Twitter
  client.get('statuses/user_timeline', search, function (error, tweets, response){
    if (!error) {
      for (i = 0; i < tweets.length; i += 1) {
        console.log("Tweeter: " + tweets[i].user.screen_name + '\n');
        console.log("Tweeted Date: " + tweets[i].created_at + '\n');
        console.log("Tweet: " + tweets[i].text + '\n');
      }
    }
  });
}


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