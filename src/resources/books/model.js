const db = require("../../utils/database");

function Book() {
  function createTable() {
    const sql = `
          DROP TABLE IF EXISTS books;
          
          CREATE TABLE IF NOT EXISTS books (
            id              SERIAL        PRIMARY KEY,
            title           VARCHAR(255)   NOT NULL,
            type            VARCHAR(255)   NOT NULL,
            author          VARCHAR(255)   NOT NULL,
            topic           VARCHAR(255)   NOT NULL,
            publicationdate DATE           NOT NULL
          );
        `;

    db.query(sql)
      .then(result => console.log("[DB] Book table ready."))
      .catch(console.error);
  }

  function findAll(callback) {
    const sql = `
        SELECT * FROM books;
    `;
    db.query(sql)
      .then(result => {
        callback(result.rows);
      })
      .catch(console.error);
  }

  createTable();

  return { findAll };
}

module.exports = Book;
