const express = require('express');
const morgan = require('morgan');

//Create app
const app = express();

//Register View engine
app.set('view engine', 'ejs');

//Listen 
app.listen(3000);

//Morgan
app.use(morgan('dev'))


app.get('/', (req, res) => {
const blogs = [
    {title: 'first', snippet: "[nodemon] restarting due to changes..[nodemon] starting `node app.js`"},
    {title: 'second', snippet: "[nodemon] restarting due to changes..[nodemon] starting `node app.js`"},
    {title: 'third', snippet: "[nodemon] restarting due to changes..[nodemon] starting `node app.js`"},
]

    res.render('index', {pageTitle: 'Home', blogs});
})

app.get('/about', (req, res) => {
    res.render('about', {pageTitle: 'About'})
})

app.get('/blogs/create', (req, res) => {
    res.render('create', {pageTitle: 'Create'})
})

//404 page
app.use((req, res) => {
    res.status(404).render('404', {pageTitle: '404'})
})