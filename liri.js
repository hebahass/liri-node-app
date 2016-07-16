var command = process.argv[2];

function twitter () {

		var twitterGet = require('./keys.js').twitterKeys;
		var Twitter = require('twitter');
		var client = new Twitter(twitterGet);
		var params = {screen_name: 'hoobiedoobie55'};

	client.get('statuses/user_timeline', params, function(error, tweets, response) {
			if (!error) {
				var twitterObject = JSON.stringify(tweets);
				var twitterParse = JSON.parse(twitterObject);
			} else {
				console.log('error');
			}
			for (var i = 0; i < twitterParse.length; i++) {
				console.log("");
				console.log("I Posted " + twitterParse[i].text + " on " + twitterParse[i].created_at);
				console.log("");
			}
	});
}

function spotify() {

	var spotifyRequest = require('spotify');
	var spotifyLookup = process.argv.slice(3).join('+');

	spotifyRequest.search({ type: 'track', query: spotifyLookup }, function(err, data) {
		if(err) {
			console.log('Error occurred: ' + err);
			return;
		}
  });

    if (!spotifyTitle) {
      process.argv.push("Ace of Base");
      spotify();
    } else {
    var spotifyObject = JSON.parse(body);

		var spotifyStringify = JSON.stringify(data);
		var spotifyParse = JSON.parse(spotifyStringify);
		var spotifyObject = spotifyParse.tracks;
		var spotifyStringify2 = JSON.stringify(spotifyObject.items);
		var spotifyParse2 = JSON.parse(spotifyStringify2);


		function titleCase(str) {
		    var split = str.toLowerCase().split('+');
		    for (var i = 0; i < split.length; i++){
		        split[i] = split[i].charAt(0).toUpperCase() + split[i].substring(1);
		    }
		    return split.join('+');
		}

		var spotifyTitle = titleCase(spotifyLookup);

			if (spotifyObject.total === 0) {

					console.log("");
					console.log("Artist: " + parseArtist[1].artists[0].name);
					console.log("Song Name: " + parseArtist[1].name);
					console.log("Link to Song: " + parseArtist[1].href);
					console.log("Album: " + parseArtist[1].album.name);

					} else {
					console.log("");
					console.log("Artist: " + spotifyParse2[0].artists[0].name);
					console.log("Song Name: " + spotifyTitle.replace(/["+"]/g, " "));
					console.log("Link to Song: " + spotifyParse2[0].album.href);
					console.log("Album: " + spotifyParse2[0].album.name);
					console.log("");
					console.log("Artist: " + spotifyParse2[1].artists[0].name);
					console.log("Song Name: " + spotifyTitle.replace(/["+"]/g, " "));
					console.log("Link to Song: " + spotifyParse2[1].album.href);
					console.log("Album: " + spotifyParse2[1].album.name);
					console.log("");
					console.log("Artist: " + spotifyParse2[2].artists[0].name);
					console.log("Song Name: " + spotifyTitle.replace(/["+"]/g, " "));
					console.log("Link to Song: " + spotifyParse2[2].album.href);
					console.log("Album: " + spotifyParse2[2].album.name);
				}
	}
}
function omdb() {
	var request = require('request');
	var movieTitle = process.argv.slice(3).join('+');

	request('http://www.omdbapi.com/?r=json&t=' + movieTitle, function(error, response, body) {
		if (!error && response.statusCode === 200) {

			if (!movieTitle) {
				process.argv.push("Mr. Nobody");
				omdb();
			} else {
			var movieObject = JSON.parse(body);
			console.log(" ");
			console.log("Movie Title: " + movieObject.Title);
			console.log("Release Date: " + movieObject.Released);
			console.log("IMDB Rating: " + movieObject.imdbRating);
			console.log("Country: " + movieObject.Country);
			console.log("Language: " + movieObject.Language);
			console.log("Plot: " + movieObject.Plot);
			console.log("Actors: " + movieObject.Actors);
			}
		}
	});
}
if (command === "my-tweets") {
	twitter();
} else if (command === "spotify-this-song") {
	spotify();
} else if (command === "movie-this") {
	omdb();
}
