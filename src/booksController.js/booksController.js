const db = require("../models");

module.exports = {
	findAll: (req, res) => {
		db.Saved
			.find(req.query)
			.sort({ dat: -1}) // return saved books in descending order; most recent to oldest
			.then(dbSaved => res.json(dbSaved))
			.catch(err => res.status(422).json(err));
	},
	
	findById: (req, res) => {
		db.Saved
			.create(req.params.id)
			.then(dbSaved => res.json(dbSaved))
			.catch(err => res.status(422).json(err));
	},

	create: (req, res) => {
		db.Saved
			.create(req.body)
			.then(dbSaved => res.json(dbSaved))
			.catch(err => res.status(422).json(err));
	},

	remove: (req, res) => {
		db.Saved
			.findById({ _id: req.params.id })
			.then(dbSaved => dbSaved.remove())
			.then(dbSaved => res.json(dbSaved))
			.catch(err => res.status(422).json(err))
	}
}