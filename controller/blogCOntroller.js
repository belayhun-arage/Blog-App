const Blog = require('../models/blogs')

const blog_index=(req,res)=>{
    console.log("handling get request");
    Blog.find()
        .then(
            (result)=>{
                res.render('index',{blogs:result});
            }
        )
        .catch((err)=>{
            console.log(err);
        })
}

const blog_details=(req,res)=>{
    const id = req.params.id;
    Blog.findById(id)
        .then((result)=>{
            res.render('details',{blog:result})
        })
        .catch((err)=>{
            console.log(err);
        })
}

const blog_create_get=(req,res)=>{
    res.render('create');
}

const blog_create_post=(req,res)=>{
    const blog = new Blog(req.body);
    blog.save()
        .then((result)=>{
            res.redirect('/blogs');
        })
        .catch((err)=>{
            console.log(err);
        })
}

const blog_about=(req,res)=>{
    res.render('about')
}
const blog_delete=(req,res)=>{
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
    .then(()=>{
        //this is the response for the ajax requist
        //in node we can't redirect rather we will respond json data back to the browser
        //that json data will have redirect property
        res.json({redirect : '/blogs'})
    }) 
    .catch((err)=>{
        console.log(err);
})
}

module.exports={
    blog_index,
    blog_create_get,
    blog_create_post,
    blog_delete,
    blog_details,
    blog_about
}
