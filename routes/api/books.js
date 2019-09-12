const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/books")
  .get(booksController.findAll)
  .delete(booksController.remove);

module.exports = router;