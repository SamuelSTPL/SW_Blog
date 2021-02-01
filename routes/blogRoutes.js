const express = require('express');
const router = express.Router();

const blogController = require('../controllers/blogControllers')

///Blog routes///

//Render the 'create new blog' form
router.get('/create', blogController.blog_create_get)

//GET all blogs
router.get('/', blogController.blog_index)

//GET one blog by ID
router.get('/:id', blogController.blog_details)

//POST new blog
router.post('/', blogController.blog_create_post)

// DELETE existing post 
router.delete('/:id', blogController.blog_delete)


module.exports = router;