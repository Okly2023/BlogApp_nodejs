# BlogApp Backend

This is the backend for the BlogApp, a simple blogging platform. It's built with Node.js, Express, and MongoDB.

## Features

- User registration and authentication
- CRUD operations for blog posts
- Each blog post is associated with a user

## Endpoints

- `POST /api/users/register`: Register a new user
- `POST /api/users/login`: Authenticate a user
- `GET /api/blogs`: Get all blog posts
- `GET /api/blogs/:id`: Get a specific blog post by ID
- `POST /api/blogs`: Create a new blog post
- `PUT /api/blogs/:id`: Update a specific blog post by ID
- `DELETE /api/blogs/:id`: Delete a specific blog post by ID

## Setup

1. Clone the repository: `git clone git@github.com:Okly2023/BlogApp_nodejs.git`
2. Install dependencies: `npm install`
3. Start the server: `npm start`

## Environment Variables

You'll need to set the following environment variables:

- `DB_URL`: The connection string for your MongoDB database
- `PORT`: The port on which the server should run (default is 5000)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
