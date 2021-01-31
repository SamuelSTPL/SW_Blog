const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogRoutes');
require('dotenv').config();
const db = process.env.DB_URI;

//Create app//
const app = express();

//MongoDB//
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => {
        //Listen only when connected to DB
        app.listen(3000);
        })
    .catch((err) => console.log(err))

//Register View engine//
app.set('view engine', 'ejs');

//Middleware//
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'));

//GET//
app.get('/', (req, res) => {
    res.redirect('/blogs');
})

app.get('/about', (req, res) => {
    res.render('about', {pageTitle: 'About'})
})


///Routes///
app.use('/blogs', blogRoutes);

//404 page//
app.use((req, res) => {
    res.status(404).render('404', {pageTitle: '404'})
})