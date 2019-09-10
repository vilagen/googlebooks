const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedSchema = new Schema({
    title: { type: String, required: true }, // res.items.volumeInfo.title
    subtitle: String, // res.items.volumeInfo.subtitle
    author: [{ type: String, required: true }], // res.items.volumeInfo.authors
    synopsis: String, // res.items.volumeInfo.description
    image: { type: String, required: true }, // res.items.volumeInfo.imageLinks.thumbnail
    infoLink: { type: Date, default: Date.now }, // res.items.volumeInfo.infoLink
    date: { type: Date, default: Date.now }
});

const Saved = mongoose.model("Saved", savedSchema);

module.exports = Saved;