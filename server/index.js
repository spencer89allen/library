var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');

require('dotenv').config({ path: __dirname + '/.env'});

var shelfCtrl = require('./shelfController');

var app = express()

massive(process.env.CONNECTION_STRING,{scripts: './db'}).then(dbInstance => {
    app.set('db', dbInstance)
    console.log(`The database is connected`)
}).catch( e => {
    console.log(process.env.CONNECTION_STRING)
    console.error(e);
});

app.use(bodyParser.json());

//Shelf Endpoints
app.post(`/api/addBook`, shelfCtrl.addBook)
app.get(`/api/getBooks`, shelfCtrl.getBooks)


var port = process.env.PORT || 4545;
app.listen(port, () => {
    console.log(`The server is listening on port ${port}`)
});

