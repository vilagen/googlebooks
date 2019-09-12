const db = require("../models");

module.exports = {
	findAll: (req, res) => {
		db.Book
			.find(req.query)
			.sort({ dat: -1}) // return saved books in descending order; most recent to oldest
			.then(dbSaved => res.json(dbSaved))
			.catch(err => res.status(422).json(err));
	},
	
	findById: (req, res) => {
		db.Book
			.create(req.params.id)
			.then(dbSaved => res.json(dbSaved))
			.catch(err => res.status(422).json(err));
	},

	create: (req, res) => {
		db.Book
			.create(req.body)
			.then(dbSaved => res.json(dbSaved))
			.catch(err => res.json(err));
	},

	remove: (req, res) => {
		db.Book
			.findById({ _id: req.params.id })
			.then(dbSaved => dbSaved.remove())
			.then(dbSaved => res.json(dbSaved))
			.catch(err => res.status(422).json(err))
	}
}