require('dotenv').config();

const express = require('express');
const expresLayouts = require('express-ejs-layouts');

const app = express();
const port = 5000 || process.env.PORT;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static('public'));

//templating engine
app.use(expresLayouts);
app.set('layout','./layouts/main');
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index');
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
