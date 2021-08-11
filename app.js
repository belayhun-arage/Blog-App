const express = require('express');
const ejs = require('ejs');
const logger = require('morgan');
const mongoose = require('mongoose');
const { result } = require('lodash');
const blogRouter = require('./routes/blogRoutes.js')

console.log("starting express framework");
const app = express();

//register view engine
//app.set('view engine','ejs');
app.set('view engine', 'ejs');

//database part
// const MongoClient = require('mongodb').MongoClient;

// // connection string
// const uri = "mongodb+srv://belay:24teklyeatlas@cluster0.yupyq.mongodb.net/blogdb?retryWrites=true&w=majority"
const uri = "mongodb://localhost/blogDB"
mongoose.connect(uri,{ useNewUrlParser: true,useUnifiedTopology: true  })
.then((result)=>{
    app.listen(3000);
}).catch((err)=>{
        console.log(err)
})
mongoose.connection.once('open',function(err){
    console.log("connecting to database:")
    console.log(err)}
).on('error',function(err){
    console.log(err)
})

//serving static files
app.use(express.static('public'))

//logging 
app.use(logger('tiny'))
 
//to accept form data use the following middleware
app.use(express.urlencoded({extended :true}));

app.listen(3000,"localhost")

console.log("handling request:")
app.use('/blogs',blogRouter);
app.use((req,res)=>{
    res.render('404');
})

// MongoClient.connect(uri, function(err, client) {
//    if(err) {
//         console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
//    }
//    console.log('Connected...');
//    const collection = client.db("test").collection("devices");
//    // perform actions on the collection object
//    client.close();
// });

//middleware
// app.use((req,res,next)=>{
//     console.log('method',req.method)
//     console.log("path",req.path)
//     console.log('host',req.hostname)
//     next()
// })

//how to serve static files like css and images



//getting and saving data---start transaction
// app.get('/add-blog',(req,res)=>{
    
//     //create new blog
//     const blog = new Blog({
//         title : "new blog",
//         snippet : "new snnipet",
//         body : "more about the new blog"
//     });

//     //save the new blog to the database
//     blog.save()
//         .then((result)=>{
//              res.send(result);
//         }).catch((err)=>{
//             console.log(err);
//         });
// })

// //retrieve all data from the database
// app.get('/all-blogs',(req,res)=>{
//     Blog.find()
//         .then((result)=>{
//             res.send(result);
//         })
//         .catch((err)=>{console.log(err);})
// })

// //retrieve single blog from the database
// app.get('/single-blog',(req,res)=>{
//     Blog.findById('60f111742643d324c4ee4dbb')
//         .then((result)=>{
//             res.send(result);
//         })
//         .catch((err)=>{console.log(err);})
// })

//redirection
// app.get('./about-me',(req,res)=>{
//     res.redirect('./about')
// })