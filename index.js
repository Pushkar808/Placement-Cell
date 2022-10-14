const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');//express ejs layouts
const DB=require('./config/dbconfig');//DB configuration to connect to database


// const session = require('express-session');
// const passport = require('passport');
// const passportLocal = require('./config/passport');
// const MongoStore = require('connect-mongo');
// const cookieParser = require('cookie-parser');
// const passportGoogle = require('./config/google-config');

const port = 8000;//port for server
const app = express();

//setting template engine
app.set('view engine', 'ejs');
//setting where to find views for ejs
app.set('views', path.join(__dirname, 'views'));

//setting up static files so that we can use css and js inside layouts
app.use(express.static('./assets'));
app.use(expressLayouts)
app.set('layout extractStyles', true);
app.set("layout extractScript", true)



//local server

//using routes folder all routes starting from '/'
app.use('/', require('./routes'));

//starting server at port 
app.listen(port, (err) => {
    if (err) {
        console.log("error in connecting to server");
    }
    console.log("Connected to server at port: " + port);
})