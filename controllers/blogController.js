//blog_index,blog_details, blog_create_get,blog_create_post,blog_delete
const Blog = require('../models/blog');//blog module



const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
      .then(result => {
        res.render('index', { blogs: result, title: 'All blogs' });
      })
      .catch(err => {
        console.log(err);
      });
  }
//une
  // const update = (req, res) => {
  //   // Validate Request
 
  //   Blog.findByIdAndUpdate(
  //       req.params.id, {
  //         $set: req.body.body,
  //       }, {
  //         new: true
  //       }
  //     )}

      // router.put("/up/:id", update);

      
  module.exports={
    blog_index
    
  }