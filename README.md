<h1 align="center">
MERN Stack
</h1>
<p align="center">
MongoDB, Expressjs, React, Nodejs
</p>

> MERN is a fullstack implementation in MongoDB, Expressjs, React/Redux, Nodejs.
MERN stack is the idea of using Javascript/Node for fullstack web development.

## clone or download
```terminal
$ git clone https://github.com/rathisubhasish/JOOGLE-Opportunity-hunting-Platform-.git
$ yarn # or npm i
```

# Usage (run fullstack app on your machine)

## Prerequisites
- MongoDB
- [Node](https://nodejs.org/en/download/)
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 3000)

```terminal
//Pre-requisite for client to server connect
$ echo "REACT_APP_API_URL=http://localhost:YOUR_API_URL" >> src/.env
```

```terminal
$ cd client          // go to client folder
$ npm i    // npm install packages
$ npm start        // run it locally
```

## Server-side usage(PORT: 8000)

### Prepare your secret

run the script at the first level:

(You need to add a variables in .env to connect to MongoDB, port, JWT_SECRET)

```terminal
// in the root level
$ cd server
$ echo "JWT_SECRET=YOUR_JWT_SECRET" >> src/.env
$ echo "PORT=YOUR_PORT" >> src/.env
$ echo "DB_URL=YOUR_MONGODB_URL" >> src/.env
```

### Start

```terminal
$ cd server   // go to server folder
$ npm i       // npm install packages
$ npm start // run it locally
```

# Dependencies(tech-stacks)
Client-side | Server-side
--- | ---
dotenv: ^16.0.3|bcrypt: ^5.1.0
moment: ^2.29.4 | cookie-parser: ^1.4.6
react: ^18.2.0 | cors: ^2.8.5
react-dom: ^18.2.0 | dayjs: ^1.11.7
react-loading: ^2.0.3 | dotenv: ^16.0.3
react-router-dom: ^6.4.2 | express: ^4.18.2
react-toastify: ^9.0.8 | express-validator: ^5.3.1
: | jsonwebtoken: ^9.0.0
: | moment: ^2.29.4
: | mongoose: ^6.9.0
: | node-fetch: ^3.3.0
: | nodemon: ^2.0.20
