# BlogApp Backend

This is the backend RestApi for the BlogApp, a simple blogging platform. It's built with Node.js, Express, and MongoDB.

## Features

- User registration and authentication
- CRUD operations for blog posts
- Each blog post is associated with a user

## Endpoints

- `POST /api/users/signup`: Register a new user
- `POST /api/users/login`: Authenticate a user
- `GET /api/blogs`: Get all blog posts
- `GET /api/blogs/:id`: Get a specific blog post by ID
- `POST /api/blogs/add`: Create a new blog post
- `PUT /api/blogs/update/:id`: Update a specific blog post by ID
- `DELETE /api/blogs/:id`: Delete a specific blog post by ID

## Setup

1. Clone the repository: `git clone git@github.com:Okly2023/BlogApp_nodejs.git`
2. Initialize npm: `npm init`
3. Install dependencies: `npm install`
4. Install Express: `npm install express`
5. Install Mongoose: `npm install mongoose`
6. Install Nodemon: `npm install nodemon --save-dev`
7. Start the server: `npm start`

## MongoDB Atlas Configuration

1. Sign up for a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a new cluster.
3. Whitelist your IP address.
4. Create a new MongoDB user.
5. Get the connection string and replace `<password>` with the password for the MongoDB user. This will be your `DB_URL`.

## Environment Variables

You'll need to set the following environment variables:

- `DB_URL`: The connection string for your MongoDB database
- `PORT`: The port on which the server should run (default is 5000)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)