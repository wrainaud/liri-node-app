// William Rainaud
// Rutgers Coding Bootcamp 
// Homework 8 - Liri Node App

// NPM Modules / Package dependencies
var request = require("request");
var fs = require("fs");
var llaves = require("nuevo-llaves-rcbc");
var twitter = require("twitter");
var Spotify = require("node-spotify-api");
var command = process.argv[2];
var movie;
var songName;

// Twitter Function
function myTweets (search) {

  var client = new twitter (llaves.twitterKey);

  // Get Past 20 Tweets from Twitter
  client.get('statuses/user_timeline', llaves.twitterParams, function (error, tweets, response){
    if (!error) {
      for (i = 0; i < tweets.length; i += 1) {
        console.log("\n==============================================\n");
        console.log("Tweeter: " + tweets[i].user.screen_name + '\n');
        console.log("Tweeted Date: " + tweets[i].created_at + '\n');
        console.log("Tweet: " + tweets[i].text + '\n');
        console.log("\n==============================================\n");
      }
    }
  });
}

// Spotify Function
function spotifySong(songName) {

  var spotify = new Spotify (llaves.spotifyKey);

  spotify.search({ type: 'track', query: songName }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    
  console.log(data); 
  });

}


// OMDB Function
function movieThis(movie) {
    "use strict";
    request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece", function(error, response, body) {
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



// fs Function
function randomFunction() {
	fs.readFile("./random.txt", "utf8", function(err, data) {
		if (err) throw err;
		console.log(data);
	});
};

//Switch statement to run above functions
switch(command) {
	
	case "my-tweets":
	myTweets();
	break;

	case "spotify-this-song":
	spotifySong(songName);
	break;

	case "movie-this":
	movieThis(movie);
	break;

	case "do-what-it-says":
	randomFunction();
	break;

	default:
	console.log("Not a valid request.");
	break;
};