import express from 'express';
import { getAllBlogs, addBlog, updateBlog, getBlogById, deleteBlog } from '../controllers/blog-controller.js';
const  blogRouter = express.Router();

blogRouter.get("/",getAllBlogs);
blogRouter.post("/add",addBlog);
blogRouter.put("/update/:id",updateBlog);
blogRouter.get("/:id",getBlogById);
blogRouter.delete("/:id",deleteBlog);

export default blogRouter;