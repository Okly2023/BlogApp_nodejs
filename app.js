// Import the express module
import express from 'express';

// Import the mongoose module
import mongoose from 'mongoose'; 

// Create a new express application
const app = express();

// Connect to MongoDB
mongoose
.connect(
    // Connection string for MongoDB
    "mongodb+srv://okly:nlA2GekGUGHS0wph@cluster0.feiqmi7.mongodb.net/?retryWrites=true&w=majority"
)
.then(() => 
    // Start the express application on port 5000 after a successful database connection
    app.listen(5000)
)
.then(() => 
    // Log a message to the console once the server is running
    console.log("connected to MongoDB successfull and server is running")
)
.catch((err) => 
    // Log any errors that occur during the connection process
    console.log(err)
);