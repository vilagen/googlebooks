const axios = require("axios");
const router = require("express").Router();

router.get("/books", (req, res) => {
	axios
	// axios.get(`https://www.googleapis.com/books/v1/volumes?q=${{ params: req.query }}&key=AIzaSyAGZGl6a-ZLYJDU2Cnh5wFN3A0IFjqD1W0`)
	.get("http://www.recipepuppy.com/api/", { params: req.query })
	.then(( {data: { results }}) => res.json(results))
	.catch(err => res.status(422).json(err))
});
	 

module.exports = router

// router.get("/api/books", (req, res) => {
// 	axios        
// 		.get(`https://www.googleapis.com/books/v1/volumes?q=${{ params: req.query }}&key=AIzaSyAGZGl6a-ZLYJDU2Cnh5wFN3A0IFjqD1W0`)
// 		.then((res) => {
// 			let results = res.data.items
// 			results.forEach( (items) => {

// 				let bookResults = {}

// 				bookResults.title = items.volumeInfo.title
// 				bookResults.subtitle = items.volumeInfo.subtitle;
// 				bookResults.author = items.volumeInfo.authors
// 				bookResults.description = items.volumeInfo.description
// 				bookResults.image = items.volumeInfo.imageLinks.thumbnail
// 				bookResults.infoLink = items.volumeInfo.infoLink

// 				db.Book.create(bookResults)
// 				.then((dbBook) => {
// 					console.log(dbBook)
// 				})
// 				.catch((err) => {
// 					if (err) throw `There was an error retrieving book information. ${err}`;
// 				})
// 				res.send("Books Retrieved!")
// 			})
// 		})
// 	.catch(err => res.status(422).json(err))
// }); 

// router.get("/books", (req, res) => {
// 	axios.get(`https://www.googleapis.com/books/v1/volumes?q=${{ params: req.query }}&key=AIzaSyAGZGl6a-ZLYJDU2Cnh5wFN3A0IFjqD1W0`)
// 		.then((res) => {
// 			let results = res.data.items
// 			results.forEach( (items) => {

// 				title = items.volumeInfo.title
// 				subtitle = items.volumeInfo.subtitle;
// 				author = items.volumeInfo.authors
// 				description = items.volumeInfo.description
// 				image = items.volumeInfo.imageLinks.thumbnail
// 				infoLink = items.volumeInfo.infoLink

// 				.then(( {data: { bookResults }}) => res.json(bookResults))
// 					console.log(bookResults)
// 				})
// 				.catch((err) => {
// 					if (err) throw `There was an error retrieving book information. ${err}`;
// 				})
// 			})
// 		.catch(err => res.status(422).json(err))
// 	})