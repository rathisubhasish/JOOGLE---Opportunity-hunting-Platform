// Importing Modules
const express = require('express');
require("dotenv").config();
const cors = require('cors');
const {json, urlencoded} = express;
const mongoose = require('mongoose');
const expressValidator = require("express-validator");
const cookieParser = require("cookie-parser");


//-----------------
const app = express();


// PORT
const port = process.env.PORT || 4050;


mongoose.set('strictQuery',true);

//Listener
const server = app.listen(port , ()=> {
    console.log(`Server is running on port - ${port}`);
});

//Connecting DB
mongoose
    .connect(process.env.DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(()=> {
        console.log("Connected to Database Successfully");
    })
    .catch((err) => {
        console.log("Getting Database Connectivity Issue - ",err);
    })

//Middlewares
app.use(cors({ origin: true, credentials: true }));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cookieParser());
// Routes
const UserRoutes = require('./Routes/UserRoute');
app.use('/',UserRoutes);