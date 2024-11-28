const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

const PORT = 8081;

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    port: 3306,
    database: "register",
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the database');
    }
});

app.post('/login', (req, res) => {
    const sql = "INSERT INTO login (email, password) VALUES (?, ?)";
    const values = [req.body.email, req.body.password];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json("Failed");
        } else {
            return res.json("Success");
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is working on port ${PORT}`);
});
