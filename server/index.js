const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "UserDateDB",
    port: "3306"
})

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));

app.post("/api/insert", (req, res) => {

    const fName = req.body.fName;
    const lName = req.body.lName;
    const email = req.body.email;
    const tel = req.body.tel;
    const gender = req.body.gender;
    const dayOfBirth = req.body.dayOfBirth;
    const monthOfBirth = req.body.monthOfBirth;
    const yearOfBirth = req.body.yearOfBirth;
    const comments = req.body.comments;

    const sqlInsert = "INSERT INTO user_form (fName, lName, email, tel, gender, dayOfBirth, monthOfBirth, yearOfBirth, comments) VALUES (?,?,?,?,?,?,?,?,?)"
    db.query(sqlInsert, [fName, lName, email, tel, gender, dayOfBirth, monthOfBirth, yearOfBirth, comments], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    })
})

app.listen(3001, () => {
    console.log("Server started on port 3001");
})