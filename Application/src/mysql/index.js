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
 
//route name: create
//post from front end to back end
app.post("/create", (req, res) => {
  const email = req.body.email;
  const pass = req.body.password;
 
  db.query(
    "INSERT INTO users (email, pass) VALUES (?,?)",
    [email, pass], //put in array
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});
 
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
 
// app.put("/update", (req, res) => {
//   const id = req.body.id;
//   const wage = req.body.wage;
//   db.query(
//     "UPDATE employees SET wage = ? WHERE id = ?",
//     [wage, id],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );
// });
 
// app.delete("/delete/:id", (req, res) => {
//   const id = req.params.id;
//   db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });
 
app.listen(3003, () => {
  console.log("Yey, your server is running on port 3003");
});