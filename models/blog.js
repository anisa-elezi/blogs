const mongoose= require('mongoose');
const Schema= mongoose.Schema;

//create a schema =define the structure of doc in a collection
const blogSchema = new Schema({
    title:{
        type: String,
        required:true
    },
    snippet:{
        type: String,
        required:true
    },
    body:{
        type: String,
        required:true
    }
}, {timestamps: true}); //optional

//create model that alloes us to comunicate with db
const Blog = mongoose.model('Blog',blogSchema);
module.exports = Blog;// we can use where we wont in code