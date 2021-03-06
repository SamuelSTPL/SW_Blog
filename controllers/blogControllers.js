const Blog = require('../models/blog');

const blog_index = (req, res) => {
    Blog.find().sort({createdAt: -1})
    .then((result) => {
        res.render('blogs/index', {pageTitle: 'All Blogs', blogs: result})
    })
    .catch((err) => console.log(err))
}

const blog_details = (req, res) => {
    const id = req.params.id

    // Randomise the banner picture displayed
    const rdm = Math.floor(Math.random() * 4);
    
    Blog.findById(id)
        .then(result => {
            res.render('blogs/details', {blog: result, pageTitle: 'Blog Details', rdm: rdm})
        })
        .catch(err => {
            res.status(404).render('404', {pageTitle: 'Blog not Found'})
        })
}

const blog_create_get = (req, res) => {
    res.render('blogs/create', {pageTitle: 'Create'})
}

const blog_create_post = (req, res) => {
    const blog = new Blog(req.body)

    blog.save()
    .then((result) => {
        res.redirect('/blogs')
    })
    .catch((err) => console.log(err))
}

const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then( result => {
            res.json({redirect: '/'})
        })
        .catch(err => console.log(err))
}

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete,
}