import Blog from '../models/Blog.js';

export const getAllBlogs = async (req, res, next) => {
    let blogs;
    try {
        blogs = await Blog.find();
    } catch (err) {
        return console.log(err);
    }
    if (!blogs) {
        return res.status(404).json({message: "No Blogs found"});
    }
    return res.status(200).json({blogs});
};

export const addBlog = async (req, res, next) => {
    const { title, description, image, user } = req.body;

    let existingUser;
    try {
        existingUser = await Blog.findById(user);
    } catch (err) {
        return console.log(err);
    }
    if (!existingUser) {
        return res.status(404).json({message: "unable to find user by this id"});
    }

    const createdBlog = new Blog({
        title,
        description,
        image,
        user
    });
    try {
        //await createdBlog.save();
        const session = await mongoose.startSession();
        session.startTransaction();
        await createdBlog.save({session});
        existingUser.blogs.push(createdBlog);
        await existingUser.save({session});
        await session.commitTransaction();
    } catch (err) {
        console.log(err);
        return res.status(500).json({message: err});

    }
    return res.status(200).json({createdBlog});
};

export const updateBlog = async (req, res, next) => {
    const { title, description } = req.body; 
    const blogId = req.params.id;
    let blog;
    try{
        blog = await Blog.findByIdAndUpdate(blogId, {
            title, 
            description
        });

    }
    catch(err){
        return console.log(err);
    }
    if(!blog){
        return res.status(500).json({message: "unable to update blog"});
    }
    return res.status(200).json({blog});
};

export const getBlogById = async (req, res, next) => {
    const id = req.params.id;
    let blog;
    try{
        blog = await Blog.findById(id);
    }
    catch(err){
        return console.log(err);
    }

    if(!blog){
        return res.status(404).json({message: "No blog found"});
    }
    return res.status(200).json({blog});
}

export const deleteBlog = async (req, res, next) => {
    const id = req.params.id;
    let blog;
    try {
        blog = await Blog.findByIdAndDelete(id);
    }catch(err){
        return console.log(err);
    }
    if(!blog){
        return res.status(400).json({message: "unable to delete blog"});
    }
    return res.status(200).json({message: "blog deleted successfully"});
}