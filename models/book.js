const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true }, // res.items.volumeInfo.title
  subtitle: String, // res.items.volumeInfo.subtitle
  author: [{ type: String, required: true }], // res.items.volumeInfo.authors
  description: { type: String}, // res.items.volumeInfo.description
  image: String, // res.items.volumeInfo.imageLinks.thumbnail
  infoLink: { type: Date, default: Date.now }, // res.items.volumeInfo.infoLink
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;


// res.items.volumeInfo.infoLink
//