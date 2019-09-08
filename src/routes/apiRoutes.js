const axios = require("axios");
const router = require("express").Router();


router.get("/api/books", (req, res) => {
    axios        
        .get(`https://www.googleapis.com/books/v1/volumes?q=${{ params: req.query }}&key=AIzaSyAGZGl6a-ZLYJDU2Cnh5wFN3A0IFjqD1W0`)
        .then( ({ data: { results } }) => res.json(results))
        .catch(err => res.status(422).json(err))
}); 

module.exports = router