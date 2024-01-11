import mongoose from 'mongoose';
// Create a new mongoose schema
const Schema = mongoose.Schema;
// Define the schema for a blog 
const blogSchema = new Schema({
    // The title of the blog
    title: {
        type: String,
        required: true
    },
    // The content of the blog
    description: {
        type: String,
        required: true
    },
    image : {
        type: String,
        required: true
    },
    user : {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
});
// Export the model for the blog schema
export default mongoose.model('Blog', blogSchema);