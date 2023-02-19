const users = require('../DB/userCollection');


exports.userRegisterValidator = (req,res,next) => {
    // username is not null
    req.check("username","Username is required!").notEmpty();
    
    //email is not null, valid , and normalized
    req.check("email","Email is required!").notEmpty();
    req.check("email","Invalid Email").isEmail();

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
    req.check("contact","contact must be in digits").matches(/^\d+$/,"i");
    req.check("contact","contact should be of 10 digits").isLength({min:10,max:10})

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
    users.findById(req._id).exec((err,user) => {
        if(err || !user)
        {
            return res.status(400).json({
                error: "User not found",
            });
        }

        //add user object in req with all user info
        req.user = user;
        next();
    });
}

exports.validatePassword = async (req,res,next) => {
    //password
    req.check("password","Password is required").notEmpty();
    req.check("password")
        .isLength({min:6})
        .withMessage("password must contain 6 characters");
    
    req.check(
        "password",
        "Password must contains one uppercase, one lowercase, one number, and one special symbol"
        ).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/,"i");

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
}

exports.validatePost = async (req,res,next) => {
    // itemName is not null
    req.check("postName","Title is required!").notEmpty();
    
    //organization is not null
    req.check("organization","Organization is required!").notEmpty();
    req.check("category","Category is required!").notEmpty();
    
    //dates is required
    req.check("startDate","StartDate is required!").notEmpty();
    req.check("endDate","EndDate is required!").notEmpty();

    //details is required
    req.check("responsibility","Responsibility is required!").notEmpty();
    req.check("requirements","Requirements is required!").notEmpty();
    req.check("location","Location is required!").notEmpty();
    
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
}
