const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host : conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});
connection.connect();

app.get('/api/customers',(req,res)=> {
    setTimeout(function() {
        connection.query(
            "SELECT * FROM CUSTOMER",
            (err, rows, fields) => {
                res.send(rows);
            }
        )
    },2000);
})

app.listen(port, () => console.log(`listen on port ${port}`));