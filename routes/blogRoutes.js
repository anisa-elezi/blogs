const express = require('express');
const router = express.Router(); 
const Blog = require('../models/blog');//blog module
var bodyParser = require('body-parser')
 

// blog routes
router.get('/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
  });
  
router.get('/', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
      .then(result => {
        res.render('index', { blogs: result, title: 'All blogs' });
      })
      .catch(err => {
        console.log(err);
      });
  });
  
  router.post('/', (req, res) => {
    // console.log(req.body);
    const blog = new Blog(req.body);
  
    blog.save()
      .then(result => {
        res.redirect('/blogs');
      })
      .catch(err => {
        console.log(err);
      });
  });
  
   
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
      .then(result => {
        res.render('detail', { blog: result, title: 'Blog Details' });

      })
      .catch(err => {
        res.render('404',{title:'404'});
      });
  });
  
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    
    Blog.findByIdAndDelete(id)
      .then(result => {
        res.json({ redirect: '/blogs' });
      })
      .catch(err => {
        console.log(err);
      });
  });

  //une
//  router.put("/up/:id", update);
  router.put('/:id', (req, res) => {
    // Validate Request
    const id = req.params.id;
    const body = req.body.body;
    Blog.findById( id )
    .then(blog => {
      blog.body = body;
      console.log(req.body);
      blog.save()
      res.json({ redirect: '/blogs' });
    })
    .catch(err => {
      console.log(err);
    });
  });

  module.exports = router;// export this mini-app