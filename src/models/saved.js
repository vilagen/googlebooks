const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: Date, default: Date.now }
});

const Saved = mongoose.model("Saved", bookSchema);

module.exports = Saved;