const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
 
app.use(cors());
app.use(express.json()); //convert from json
 
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "admin",
  database: "testdb",
});


app.post("/insert", (req, res) => {
  const insertQuery = "INSERT INTO users SET ?";
  db.query(insertQuery, req.body, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Added to Database");
    }
  });
});

 
app.get("/select", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const updateQuery =
    "UPDATE users SET email = ?, pass = ? WHERE id = ?";
  db.query(
    updateQuery,
    [req.body.email, req.body.pass, req.body.id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  db.query(
    "DELETE FROM users WHERE id = ?",
    req.params.id,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});


app.listen(3003, () => {
  console.log("Yey, your server is running on port 3003");
});