require('dotenv').config();

const express = require('express');
const expresLayouts = require('express-ejs-layouts');
const connectDB = require('./server/config/db')
const session= require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo');
const app = express();
const port = 5000 || process.env.PORT;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use( passport.initialize());
// app.use(passport.session());

connectDB() // connectionn to database
//using public files

app.use(express.static('public'));

//templating engine
app.use(expresLayouts);
app.set('layout','./layouts/main');
app.set('view engine','ejs');

// To access all the routes
app.use('/',require('./server/routes/auth'))
app.use('/',require('./server/routes/index'))
app.use('/',require('./server/routes/dashboard'))




// handle 404
app.use('*',(req,res)=>{
   res.render('404');
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
