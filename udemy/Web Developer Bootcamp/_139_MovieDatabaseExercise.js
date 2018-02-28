var movies = [
	{
		title: "Avangers",
		rating: 4.5,
		hasWatched: true,
	},
	{
		title: "Harry Potter",
		rating: 5,
		hasWatched: true,
	},
	{
		title: "Dunkirk",
		rating: 4,
		hasWatched: false,
	},
	{
		title: "Scary Movie",
		rating: 1,
		hasWatched: false
	}
];

buildStatus = function(movie) {
	var result = "You have ";	
	if (movie.hasWatched === true) {
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + " stars";
	return result;
}

movies.forEach(function(movie) {
	console.log(buildStatus(movie));
});