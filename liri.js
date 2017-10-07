// William Rainaud
// Rutgers Coding Bootcamp 
// Homework 8 - Liri Node App

// NPM Modules / Package dependencies
var request = require("request");
var fs = require("fs");
var llaves = require("nuevo-llaves-rcbc");
var twitter = require("twitter");
var Spotify = require("node-spotify-api");
var inquirer = require("inquirer");
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

  if (songName === "" || songName === undefined){
    songName = "Lower Your Eyelids To Die With The Sun";
  }
  spotify.search({ type: 'track', query: songName }, function(error, data) {
    if (error) {
      return console.log('Error occurred: ' + error);
    } else {
			console.log("\n==============================================\n");
			console.log("Artist: " + data.tracks.items[0].album.artists[0].name);
			console.log("Song: " + data.tracks.items[0].name);
			console.log("Preview: " + data.tracks.items[0].preview_url);
			console.log("Album: " + data.tracks.items[0].album.name);
			console.log("\n==============================================\n");
		} 
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

inquirer.prompt([
  // Here we create a basic text prompt.
  {
    type: "input",
    message: "Welcome to Liri! \n  It’s a blessing just to be here - Everything 1K! \n  What is your name?\n",
    name: "username"
  },

  // Here we give the user a list to choose from.
  {
    type: "list",
    message: "Which function do you want to run?",
    choices: ["my-tweets", "spotify-this-song", "movie-this", "do-what-it-says"],
    name: "command"
  },
]).then(function(response) {
  // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
  if (response.command === "my-tweets") {
    console.log("\nWelcome " + response.username);
    myTweets();
  }
  if (response.command === "spotify-this-song") {
    console.log("\nWelcome " + response.username);
    new inquirer.prompt([{ type: "input", message: "Please enter a song name\n", name: "songName"}])
            .then(function(userResponse){
              spotifySong(userResponse.songName);
            })
  }
  if (response.command === "movie-this") {
    console.log("\nWelcome " + response.username);
    new inquirer.prompt([{ type: "input", message: "Please enter a Movie title\n", name: "movie"}])
    .then(function(userInput){
      movieThis(userInput.movie);
    })
  }
  if (response.command === "do-what-it-says") {
    console.log("\nWelcome " + response.username);
    randomFunction();
  }
});

