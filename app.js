//LIKE SERVER.JS BUT WITH EXPRESS
const express = require('express');
const { result } = require('lodash');
const mongoose = require('mongoose');
// const Blog = require('./models/blog')
const bodyParser = require('body-parser');
const cors = require('cors');

const blogRoutes= require('./routes/blogRoutes');


//express app
const app = express();
//db connection mongodbs
const db= 'mongodb://era1:era12345@localhost:27017/testblog';
//listen for request
app.listen(5005);
 
//database conn
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=>{ console.log('db connected') })
        .catch((err)=>  { console.log('Unable to connect... :(',err) });


//register view engine
app.set('view engine','ejs');
app.use(bodyParser.json());
app.use('/blogs',blogRoutes);


//middleware and static files(css...)
app.use(express.static('public')); //is public to the browser so we can access localhost:5000/style.css
app.use(express.urlencoded({extended: true}));//pranon data from a form,and we can use in req object, pra ne kte rast te shfaqim te dhenat e new blog form

app.get('/',(req,res)=>{
    res.redirect('/blogs');
});

app.get('/about',(req,res)=>{
    res.render('about',{title:'About'});
    });
 
//404 page
//use-use this function for every request
app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
});


