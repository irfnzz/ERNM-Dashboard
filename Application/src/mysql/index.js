const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const status = require ('http-status');
const redis = require('redis');

app.use(cors());
app.use(express.json()); //convert from json

// configure database
const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'password',
  database: 'testdb',
});

// declare table
const tableName = 'users';

// define the query
const displayTableQuery = '';
const addQuery = 'INSERT INTO ' + tableName + ' set ?';
const deleteQuery = 'DELETE FROM ' + tableName + ' WHERE id = ?';
const updatePasswordQuery =
  'UPDATE ' + tableName + ' SET pass = ? WHERE email = ?';

// declare function
function getQuery(db, sqlQuery, res) {
  db.query(sqlQuery, (err, result) => {
    if (err.sqlState = 42000) {
      res.send("Syntax error");
    } else {
      res.send(getSQL.msj);
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
app.get('/', (req, res) => {
  getQuery(db, displayTableQuery, res);
});

app.post('/', (req, res) => {
  const RegisterUserQuery = "INSERT INTO users set ?";
  const par = req.body;
  setQuery(db, RegisterUserQuery, par, res);
});

app.delete('/:id', (req, res) => {
  const par = req.params.id;
  setQuery(db, deleteQuery, par, res);
});

app.put('/', (req, res) => {
  const par = [req.body.pass, req.body.email];
  setQuery(db, updatePasswordQuery, par, res);
});

// configure server port number
const listener = app.listen(process.env.PORT || 3333, () => {
  console.log('App is listening on port ' + listener.address().port);
});
