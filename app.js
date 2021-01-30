const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')
const Blog = require('./models/blog')
require('dotenv').config();
const db = process.env.DB_URI;

//Create app//
const app = express();

//MongoDB//
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => {
        //Listen only when connected to DB
        app.listen(3000);
        console.log('Connected to DB')})
    .catch((err) => console.log(err))

//Register View engine//
app.set('view engine', 'ejs');

//Middleware//
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'));


app.get('/', (req, res) => {
res.redirect('/blogs');
})

app.get('/about', (req, res) => {
    res.render('about', {pageTitle: 'About'})
})


///Blog routes///

//GET
app.get('/blogs', (req, res) => {
    Blog.find().sort({createdAt: -1})
    .then((result) => {
        res.render('index', {pageTitle: 'All Blogs', blogs: result})
    })
    .catch((err) => console.log(err))
})

app.get('/blogs/create', (req, res) => {
    res.render('create', {pageTitle: 'Create'})
})

//POST
app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body)

    blog.save()
    .then((result) => {
        res.redirect('/blogs')
    })
    .catch((err) => console.log(err))
})


//404 page//
app.use((req, res) => {
    res.status(404).render('404', {pageTitle: '404'})
})