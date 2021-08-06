const express = require("express");
const morgan = require("morgan");

const db = require("./utils/database");

// Import Routers

const booksRouter = require("./resources/books/router");

const app = express();

// Middlewares

app.use(morgan("dev"));
app.use(express.json());

// Routes

app.use("/books", booksRouter);

// .catch Route

app.get("*", (req, res) => {
  res.json({ msg: "OK!" });
});

// Run server

const port = 3030;

app.listen(port, () => {
  db.connect(error => {
    if (error) {
      console.error("[ERROR] Connection error:", error.stack);
    } else {
      console.log("\n[DB] Connected...\n");
    }
  });

  console.log(`[SERVER] Running on http:localhost:${port}/`);
});
