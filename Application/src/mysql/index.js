const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const { response } = require('express');

app.use(cors());
app.use(express.json()); //convert from json

// configure database 
const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'admin',
  database: 'testdb',
});

// declare table 
const tableName = 'users';

// define the query
const displayTableQuery = "SELECT * FROM users";
const addQuery = "INSERT INTO " + tableName + " set ?";
const deleteQuery = "DELETE FROM "+ tableName + " WHERE id = ?";
const updatePasswordQuery = "UPDATE "+ tableName + " SET pass = ? WHERE email = ?";

// declare function
function getQuery(db, sqlQuery, res) {
  db.query(sqlQuery, (err, result) => {
    if (err) {
      res.send(err.sqlMessage);
    } else {
      res.send(result);
    }
  });
}

function setQuery(db, sqlQuery, par, res) {
  db.query(sqlQuery, par, (err, result) => {
    if (err) {
      res.send(err.sqlMessage);
    } else {
      res.send(result);
    }
  });
}


// call function
app.get("/", (req, res) => {
  getQuery(db, displayTableQuery, res)
});

app.post("/", (req, res) => {
  const par = req.body;
  setQuery(db, addQuery, par, res)
});

app.delete("/:id", (req, res) => {
  const par = req.params.id;
  setQuery(db, deleteQuery, par, res)
});

app.put("/", (req, res) => {
  const par = [req.body.pass, req.body.email]
  setQuery(db, updatePasswordQuery, par, res)
});


//error handling

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});


app.use((error, req, res, next) => {
    res.status(error.status || 500).send({
      error: {
        status: error.status || 500,
        message: error.message || 'Internal Server Error',
      },
    });
  });


// configure server port number
const listener = app.listen(process.env.PORT || 3333, () => {
  console.log('App is listening on port ' + listener.address().port)
})