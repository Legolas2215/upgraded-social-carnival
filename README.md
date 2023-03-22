# Social Media Clone



This is a full-stack web application that serves as a clone of a general social media platform. The app is built with React as the frontend, Node.js as the backend, and MongoDB as the database.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Features](#features)
- [Technologies](#technology)
- [Contributing](#contributing)
- [License](#license)

## Install

Clone the repository:

```
git clone https://github.com/your-username/upgraded-social-carnival.git

```
Change directory to the project:
```
cd upgraded-social-carnival

```
Install the dependencies:
```
npm install

```
Set up the environment variables:
Create a .env file in the root directory of the project and add the following variables:
```
NODE_ENV=development
PORT=5000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>

```
Start the server:
```
npm run server

```
Start the client:
```
npm run client

```
## Usage

Open your web browser and navigate to http://localhost:3000 to see the app running.

## Features
The app includes the following features:

1. User authentication and authorization <br />
2. Ability to create, edit, and delete posts <br />
3. Ability to like and comment on posts <br />
4. Ability to follow and unfollow users <br />
5. Newsfeed that displays posts from followed users <br />
6. User profile that displays user information and their posts <br />

## Technologies
The app is built with the following technologies:
*React*: A JavaScript library for building user interfaces <br />
*Node.js*: A JavaScript runtime for building server-side applications <br />
*Express*: A Node.js framework for building web applications <br />
*MongoDB*: A document-oriented NoSQL database <br />
*Mongoose*: A MongoDB object modeling tool for Node.js <br />
*JWT*: A standard for securely transmitting information between parties <br />
*Axios*: A promise-based HTTP client for making API requests <br />

## Contributing

1.Fork the repository <br />
2.Create a new branch: `git checkout -b <branch-name>` <br />
3.Make your changes and commit them: `git commit -m '<commit-message>'` <br />
4.Push to the branch: `git push origin <branch-name>` <br />
5.Create a pull request


## License

This project is licensed under the [MIT](LICENSE)
