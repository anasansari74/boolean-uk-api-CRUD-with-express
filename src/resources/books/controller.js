const db = require("../../utils/database");

const Books = require("./model");

const { findAll } = Books();

function getAll(req, res) {
  findAll(allBooks => {
    res.json({ data: allBooks });
  });
}

module.exports = { getAll };
