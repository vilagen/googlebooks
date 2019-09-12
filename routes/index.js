const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;

// 				title = items.volumeInfo.title
// 				subtitle = items.volumeInfo.subtitle;
// 				author = items.volumeInfo.authors
// 				description = items.volumeInfo.description
// 				image = items.volumeInfo.imageLinks.thumbnail
// 				infoLink = items.volumeInfo.infoLink