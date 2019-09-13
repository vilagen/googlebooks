const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes)


const MONGODB_URI = process.env.MONGODB_URI || "mongodb://user1:user01@ds037768.mlab.com:37768/heroku_2x21rcfd";

mongoose.connect(
    MONGODB_URI,
    {useMongoClient: true});

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/GoogleBooks", { useNewUrlParser: true });


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
