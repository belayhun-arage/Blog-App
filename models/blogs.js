const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema definition
const blogs =new Schema({
    title: String,
    snippet: String,
    body: String
    // title: {
    //     typeof : String,
    //     // require : true
    // },
    // snippet:{
    //     typeof : String,
    //     require : true
    // },
    // body :{
    //     typeof:String,
    //     // require:true
    // }
});

//creating the model
//Blog--the name of the collection that will contain the documents
//blogs--the above defined schema 
const model = mongoose.model('Blog',blogs);

//in order to use the defined model any where we need to export it
module.exports = model;
