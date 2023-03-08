const users = require('../DB/userCollection');
const moment = require('moment');

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

exports.validateAddPost = async (req,res,next) => {
    const checkDate = (myDate) => {
        return moment(myDate, "MM/DD/YYYY",true).isValid();
    }

    const validateStartDate = (dateInput) => {
        const d1 = new Date(dateInput);
        const d2 = new Date();
        if(d1 < d2)
        {
            return false;
        }
        return true;
    }

    const validateEndDate = (compareDate,dateInput) => {
        const d1 = new Date(dateInput);
        const d2 = new Date(compareDate);
        if(d1 < d2)
        {
            return false;
        }
        return true;
    }
    
    // itemName is not null
    req.check("postName","Post Name is required!").notEmpty();
    req.check("postName")
        .isLength({max:30})
        .withMessage("postName should be <= 30 Letters");
    
    //organization is not null
    req.check("organization","Organization is required!").notEmpty();
    
    //dates is required
    req.check("startDate","StartDate is required!").notEmpty();
    req.check("endDate","EndDate is required!").notEmpty();

    if(!checkDate(req.body.startDate) || !checkDate(req.body.endDate))
    {
        return res.status(400).json({
            error: "Start/End Date should be in format mm-dd-yyyy",
        });
    }

    if(!validateStartDate(req.body.startDate))
    {
        return res.status(400).json({
            error: "Start Date should not be before today's date",
        });
    }

    if(!validateEndDate(req.body.startDate,req.body.endDate))
    {
        return res.status(400).json({
            error: "End Date should not be before Start's date",
        });
    }

    //details is required
    req.check("aboutUs","About Us is required!").notEmpty();
    req.check("category","Category is required!").notEmpty();
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

exports.validateEditPost = async (req,res,next) => {
    const checkDate = (myDate) => {
        return moment(myDate, "MM/DD/YYYY",true).isValid();
    }
    const validateStartDate = (dateInput) => {
        const d1 = new Date(dateInput);
        const d2 = new Date();
        if(d1 < d2)
        {
            return false;
        }
        return true;
    }

    const validateEndDate = (compareDate,dateInput) => {
        const d1 = new Date(dateInput);
        const d2 = new Date(compareDate);
        if(d1 < d2)
        {
            return false;
        }
        return true;
    }
    if('postName' in req.body)
    {
        req.check("postName","PostName is required").notEmpty();
        req.check("postName")
            .isLength({max:30})
            .withMessage("postName should be <= 30 Letters");
    }
    if('organization' in req.body)
    {
        req.check("organization","Organization is required").notEmpty();
    }
    if('aboutUs' in req.body)
    {
        req.check("aboutUs","About Us is required!").notEmpty();
    }
    if('category' in req.body)
    {
        req.check("category","Category is required!").notEmpty();
    }
    if('responsibility' in req.body)
    {
        req.check("responsibility","Responsibility is required!").notEmpty();
    }
    if('requirements' in req.body)
    {
        req.check("requirements","Requirements is required!").notEmpty();
    }
    if('location' in req.body)
    {
        req.check("location","Location is required!").notEmpty();
    }

    if('startDate' in req.body)
    {
        req.check("startDate","StartDate is required!").notEmpty();
        req.check("endDate","EndDate is required!").notEmpty();
        if(!checkDate(req.body.startDate))
        {
            return res.status(400).json({
                error: "Start/End Date should be in format mm-dd-yyyy",
            });
        }
        if(!validateStartDate(req.body.startDate))
        {
            return res.status(400).json({
                error: "Start Date should not be before today's date",
            });
        }
    }

    if('endDate' in req.body)
    {
        req.check("startDate","StartDate is required!").notEmpty();
        req.check("endDate","EndDate is required!").notEmpty();
        if(!checkDate(req.body.endDate))
        {
            return res.status(400).json({
                error: "Start/End Date should be in format mm-dd-yyyy",
            });
        }
        if(!validateEndDate(req.body.startDate,req.body.endDate))
        {
            return res.status(400).json({
                error: "End Date should not be before Start's date",
            });
        }
    }

    // check for errors
    const Errors = req.validationErrors();
    //if error , show the first one as it happens
    if(Errors)
    {
        const firstError = Errors.map((err) => err.msg)[0];
        return res.status(400).json({
            error: firstError,
        });
    }

    //proceed to next middleware
    next();
}