//  import modules
const express = require("express");
const {json, urlencoded} = express;
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");


// import app
const app = express();


// db
mongoose
    .connect(process.env.DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(()=> {
        console.log("DB Connected");
    })
    .catch((err) => {
        console.log("DB Connection Error",err);
    })

// middleware
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressValidator());

//routes
const userRoutes = require("./routes/user");
app.use("/",userRoutes);

// port
const port = process.env.PORT || 5000;

// listener
const server = app.listen(port, () => 
    console.log(`Server is running on port - ${port}`)
);


