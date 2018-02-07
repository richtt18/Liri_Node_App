//look in .env file for my keys
require("dotenv").config();

//load the fs pack and npm files & set up required variables
var keys = require('./keys.js');
var fs = require('fs');
var request = require('request');
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');


//API variables
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

//user input
var command = process.argv[2];

	switch (command) {
		case "my-tweets":
			myTweets();
			break;
		case "spotify-this-song":
			spotifyThisSong();
			break;
		case "movie-this":
			movieThis();
			break;
		case "do-what-it-says":
			doWhatItSays();
			break;
		default:
			console.log("enter valid command");
	}

//////COMMANDS//////

function myTweets() {
  //create a variable to hold the parameter (user screen name)
  var params = {screen_name: '@realrichpaul', count:20};
  //call the twitter npm
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      //loop through the first 20 tweets and log their text and time created
      for (var i = 0; i < 20 && i < tweets.length;  i++) {
		console.log(tweets[i].text);
        console.log(tweets[i].created_at);
      }
    }
  });
}
