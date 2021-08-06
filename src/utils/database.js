const { Client } = require("pg");

const dotenv = require("dotenv");
dotenv.config();

const connectionUrl = process.env.PGURL;

const db = new Client(connectionUrl);

module.exports = db;
