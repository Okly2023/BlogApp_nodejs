import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    // Define the properties of the userSchema
    name: {
        type: String,
        required: true  
    },
    email: {
        type: String,
        required: true,
        unique: true  
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
});
export default mongoose.model('User', userSchema);
//users