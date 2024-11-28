const mysql = require("mysql");
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");

const saltRounds = 10;

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

const PORT = 8081;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  port: 3306,
  database: "signup", // Specify your database name here
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to the database");
  }
});

app.post("/signup", async (req, res) => {
  const sql =
    "INSERT INTO login (firstname, lastname, username, password) VALUES (?, ?, ?, ?)";

  const { firstname, lastname, username, password } = req.body;

  bcrypt.hash(password.toString(), saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
      return res.json("Error hashing password");
    }
    const values = [firstname, lastname, username, hash];

    db.query(sql, values, (err, data) => {
      if (err) {
        console.log(err);
        return res.json("Error inserting data");
      } else {
        return res.json("User registered successfully");
      }
    });
  });
});

app.post("/login", async (req, res) => {
  const sql = "SELECT * FROM login WHERE username = ?";
  db.query(sql, [req.body.username], (err, data) => {
    if (err) {
      return res.json("Error querying database");
    }
    if (data.length > 0) {
      bcrypt.compare(
        req.body.password.toString(),
        data[0].password,
        (err, response) => {
          if (err) {
            return res.json("Error comparing passwords");
          }
          if (response) {
            return res.json("Login successful");
          } else {
            return res.json("Invalid username or password");
          }
        }
      );
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is working on port ${PORT}`);
});
