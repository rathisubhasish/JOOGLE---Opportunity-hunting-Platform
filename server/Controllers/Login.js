const users = require('../DB/userCollection');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const Login = async (req,res) => {
    // find the user based on email
    const {email,password} = req.body;

    if(!email)
    {
        return res.status(400).json({
            error: "EmailId is required!",
        });
    }

    if(!password)
    {
        return res.status(400).json({
            error: "Password is required!",
        });
    }

    try{
        await users.findOne({email}).exec((err,user) => {
            // if err or no user
            if(err || !user)
            {
                return res.status(400).json({
                    error: "Email is not found!",
                });
            }
    
            //if user is found
            user.verifyPassword(password).then((e)=>{
            if(e)
                {
                    //generate a token with userId and jwt secret
                    const token = jwt.sign({_id: user._id},process.env.JWT_SECRET,{
                        expiresIn: "60m",
                    });
    
                    //persist the token as 'jwt' in cookie with an expiry date
                    res.cookie("jwt", token, {expire: new Date() + 9999 , httpOnly: true});
    
                    //return the response with user
                    const {username, _id} = user;
                    return res.status(200).json({
                    message: "Login Successful",
                    username,
                    _id
                    });
                }
            else
                {
                    return res.status(400).json({
                        error: "Invalid Password!",
                    });
                }
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

module.exports = Login;