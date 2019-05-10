var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var sessions = require('express-session');
var bcrypt = require('bcrypt');
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

//BODYPARSER INVOKED
app.use(bodyParser.json());

//SESSIONS
app.use(sessions({
    saveUninitialized: false,
    resave: false,
    secret: "shhh it's a secret"
}));

//AUTH WITH PASSPORT
app.use(passport.initialize());
app.use(passport.session());

passport.use( 'login', new LocalStrategy( function ( username, password, done ) {
    if( username.length === 0 || password.length === 0 ) {
        return done ( null, false, { message: 'Username and Password are required' });
    };
    
    const dbInstance = app.get( 'db' );
    dbInstance.users.find({ username }).then( userInfo => {
        const user = userInfo[0];
        if(user === undefined) {
            return done( null, false, { message: 'username does not exist' })
        }
        delete user.password
        done( null, user );
    }).catch( error => {
        console.log( error.message );
    })
}));

//we're not using this right now
passport.use( 'register', new LocalStrategy ( function ( username, password, done ) {
    if ( username.length === 0 || password.length === 0 ) {
        return done( null, false, { message: 'Username and Password are required' } );
    }

    const dbInstance = app.get( 'db' )
    const hashedPassword = bcrypt.hashSync( password, 15 );

    dbInstance.users.find( { username } ).then( userInfo => {
        if( userInfo.length > 0) {
            return done( null, false, { message: "Username is not available" });
        }
        return dbInstance.add_new_user( [ username, hashedPassword ] );
    }).then( user  => {
        const newUser = user[0];
        delete newUser.password;
        done( null, newUser );
    }).catch( error => {
        console.log(error.message)
    })
}));



passport.serializeUser(( user, done ) => {
    done( null, user );
});

passport.deserializeUser(( id, done ) => {
    done( null, id );
});


//ENDPOINTS
//always lead with a slash!
//shelf endpoints
app.post(`/api/addBook`, shelfCtrl.addBook)
app.get(`/api/getBooks`, shelfCtrl.getBooks)
app.delete(`/api/deleteBook/:id`, shelfCtrl.deleteBook)

//book endpoints
app.get(`/api/getBook/:id`, shelfCtrl.getBook)

//new chapter endpoints
app.get(`/api/bookInfo/:id`, chapterCtrl.bookInfo)
app.get(`/api/getChapterList/:id`, chapterCtrl.getChapterList)
app.post(`/api/newChapterNotes`, chapterCtrl.postChapterInfo)
app.delete(`/api/deleteChapter/:id`, chapterCtrl.deleteChapter)
app.put(`/api/editChapter`, chapterCtrl.editChapter)

//auth endpoints
app.post('/auth/login', passport.authenticate( 'login' ), (req, res) => {
    const { user } = req;
    res.send(user);
});
app.post('/auth/register', passport.authenticate('register'), (req, res) => {
    const { user } = req;
    res.send(user);
});
app.get('/auth/logout', (req, res) => {
    req.logout();
    res.status(200).send({message: 'User is logged out'})
});

//SERVER LISTINING
var port = process.env.PORT || 4545;
app.listen(port, () => {
    console.log(`The server is listening on port ${port}`)
});

