# Apollo MERN GraphQL

This repository contains a full-stack web application built with the MERN (MongoDB, Express, React, Node.js) stack and GraphQL using Apollo Server and Apollo Client.

The application allows users to create, read, update, and delete (CRUD) articles. It also includes user authentication using JSON Web Tokens (JWT).

## Project Structure

The project is structured as follows:

- `client`: Contains the React frontend code.
- `server`: Contains the Node.js and Express backend code.
  - `src`: Contains the GraphQL schema and resolvers.
  - `models`: Contains the MongoDB models for the application data.
  - `routes`: Contains the Express routes for the application.

## Getting Started

To get started with the application, follow these steps:

1.  Clone the repository: `git clone https://github.com/JuanSebastianGB/apollo-mern-graphql.git`.
2.  Install dependencies for the client and server by running `npm install` in both the `client` and `server` directories.
3.  Create a `.env` file in the `server` directory and set the following environment variables:

    makefileCopy code

    `PORT=<port>
MONGODB_URI=<mongodb_uri>
SECRET_KEY=<secret_key>`

    Replace `<port>` with the port number you want the server to run on, `<mongodb_uri>` with the URI for your MongoDB instance, and `<secret_key>` with a secret key of your choice for JWT authentication.

4.  Run `npm start` in both the `client` and `server` directories to start the application.
5.  Open your web browser and go to `http://localhost:<port>` to view the application.

## Technologies Used

The following technologies were used to build this application:

- MongoDB
- Express
- React
- Node.js
- GraphQL
- Apollo Server
- Apollo Client
- JSON Web Tokens (JWT)

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.
