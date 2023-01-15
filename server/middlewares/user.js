
const User = require("../models/user");
exports.userRegisterValidator = (req,res,next) => {
    // username is not null
    req.check("username","Username is required!").notEmpty();
    
    //email is not null, valid , and normalized
    req.check("email","Email is required!").notEmpty();
    req.check("email","InvalidEmail!").isEmail();

    //password
    req.check("password","Password is required").notEmpty();
    req.check("password")
        .isLength({min:6})
        .withMessage("password must contain 6 characters");
    
    req.check(
        "password",
        "Password must contains one uppercase, one lowercase, one number, and one special symbol"
        ).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/,"i");
    
    //check contact is not null
    req.check("contact","contact is required!").notEmpty();

    // check for errors
    const errors = req.validationErrors();
    //if error , show the first one as it happens
    if(errors)
    {
        const firstError = errors.map((err) => err.msg)[0];
        return res.status(400).json({
            error: firstError,
        });
    }

    //proceed to next middleware
    next();
};


exports.userById = async (req,res,next) => {
    User.findById(req._id).exec((err,user) => {
        if(err || !user)
        {
            return res.status(404).json({
                error: "User not found",
            });
        }

        //add user object in req with all user info
        req.user = user;

        next();
    });
}