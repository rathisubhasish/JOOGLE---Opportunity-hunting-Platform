const users = require('../DB/userCollection');
require('dotenv').config();


const Signup = async (req,res) => {
    try{
        // check if user already exists
        const usernameExists = await users.findOne({
            username: req.body.username,
        });
        if(usernameExists) {
            return res.status(409).json({
                error: "Username is already taken, try another one.",
            });
        }
        const emailExists = await users.findOne({
            email: req.body.email,    
        });
        if(emailExists) {
            return res.status(409).json({
                error: "Email is already registered.",
            });
        }
        // if new user, create a new user
        const newUser = new users(req.body);
        await newUser.save().then(()=> {
            res.status(201).json({
                message: "Signup Successful, Please login to continue",
            });
        });
    }
    catch(err)
    {
        res.status(503).json({
            message: "Service Unavailable, please try later"
        });
    }

};

module.exports = Signup;