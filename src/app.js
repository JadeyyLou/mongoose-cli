require('./db/connection');
const yargs = require('yargs');
const { addMovie, listMovies, updateMovies, deleteMovie, searchMovies } = require('./movie/methods')
const {default: mongoose} = require('mongoose')

const app = async (yargsObj) => {
	try{
		if (yargsObj.add) {
			// add movie fn takes yargsObj terminal input
			await addMovie({title: yargsObj.title, actor: yargsObj.actor, year: yargsObj.year})
			console.log(`Successfully added ${yargsObj.title}`)
		} else if (yargsObj.list) {
			// list movies in db
			console.log(await listMovies())
			await listMovies(yargsObj)
		} else if (yargsObj.update) {
			// update movies with filterObj and updateObj
			await updateMovies({title: yargsObj.title, actor: yargsObj.actor, year: yargsObj.year})
			console.log(`Successfully updated${yargsObj.title}`)
		} else if (yargsObj.delete) {
			// deletes movie with filter from db
			await deleteMovie({title: yargsObj.title})
			console.log(`Successfully deleted ${yargsObj.title} from database`)
        // } else if (yargsObj.search) {
		// 	await searchMovies({title: yargsObj.title})
		// 	console.log(searchMovies())
		} else {
			console.log('Incorrect Command')
		}
		await mongoose.disconnect()
	} catch(err){
		console.log(err);
		
	}
}

app(yargs.argv);