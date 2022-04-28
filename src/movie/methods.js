const Movie = require('./model')

//  add a movie fn takes title and actor and adds it to the database
exports.addMovie = async (movieObj) => {
	try {
		await Movie.create(movieObj)
	} catch (err) {
		console.log(err)
	}
}


// list movies list movies in database
exports.listMovies = async () => {
	try{
	return await Movie.find({})
	} catch (err) {
		console.log(err)
	}
}

// finds a movie and updates it in database
exports.updateMovies = async (movieObj) => {
	try {
		await Movie.findOneAndUpdate(
			{ title: movieObj.title }, 
			{$set:{title: movieObj.title, actor: movieObj.actor, year: movieObj.year}})
		
	} catch (err) {
		console.log(err)
	}
}

// allows you to search for a specific movie and delete it by title
exports.deleteMovie = async (movieObj) => {
	try{
		await Movie.deleteOne({title: movieObj.title})
	} catch (err) {
		console.log(err)
	}
}