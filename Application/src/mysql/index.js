const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json()); //convert from json

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'admin',
  database: 'testdb',
});

var table = 'users';

const postSQL = {
  type: 'INSERT INTO ' + table + ' SET ?',
  msj: 'Added to Database',
};


function sqlQuery(db, postSQL,req, res) {
  db.query(postSQL.type, req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(postSQL.msj);
    }
  });
}

app.post('/reviews', (req, res) => {
  sqlQuery(db, postSQL, req, res);
});


app.listen(3003, () => {
  console.log('Yey, your server is running on port 3003');
});
