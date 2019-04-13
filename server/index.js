var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');

require('dotenv').config({ path: __dirname + '/.env'});

var shelfCtrl = require('./shelfController');
var chapterCtrl = require('./chapterController');

var app = express()

//DATABASE CONNECTION
massive(process.env.CONNECTION_STRING,{scripts: __dirname + '/db'}).then(dbInstance => {
    app.set('db', dbInstance)
    console.log(`The database is connected`)
}).catch( e => {
    console.log(process.env.CONNECTION_STRING)
    console.error(e);
});

app.use(bodyParser.json());

//ENDPOINTS
//shelf endpoints
app.post(`/api/addBook`, shelfCtrl.addBook)
app.get(`/api/getBooks`, shelfCtrl.getBooks)
app.delete(`/api/deleteBook/:id`, shelfCtrl.deleteBook)

//book endpoints
app.get(`/api/getBook/:id`, shelfCtrl.getBook)

//new chapter endpoints
app.get(`/api/bookInfo/:id`, chapterCtrl.bookInfo)
app.post(`/api/newChapterNotes`, chapterCtrl.postChapterInfo)

//SERVER LISTINING
var port = process.env.PORT || 4545;
app.listen(port, () => {
    console.log(`The server is listening on port ${port}`)
});

