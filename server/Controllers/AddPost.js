const explores = require('../DB/exploreCollection');

const AddPost = async (req,res) => {
    const {_id} = req.user;

    try{
        // check if post title already exists
        const postNameExists = await explores.findOne({
            postName: req.body.postName,
        });

        if(postNameExists) {
            return res.status(400).json({
                error: "Title is already taken, try another",
            });
        }

        // if new title, create a new post
        try{
            var myData = {
                "postName": req.body.postName,
                "organization": req.body.organization,
                "startDate": req.body.startDate,
                "endDate": req.body.endDate,
                "aboutUs": req.body.aboutUs,
                "responsibility": req.body.responsibility,
                "requirements": req.body.requirements,
                "category": req.body.category,
                "location": req.body.location
            }
            myData.userId = _id;
            if(req.body.minExperience){
                myData.minExperience = req.body.minExperience;
            }
            if(req.body.maxExperience){
                myData.maxExperience = req.body.maxExperience;
            }
            if(req.body.category === "Hiring Challenges")
            {
                if(req.body.firstPrize)
                {
                    myData.firstPrize = req.body.firstPrize;
                }
                if(req.body.secondPrize)
                {
                    myData.secondPrize = req.body.secondPrize;
                }
                if(req.body.thirdPrize)
                {
                    myData.thirdPrize = req.body.thirdPrize;
                }
            }
            else if(req.body.category === "Jobs")
            {
                if(req.body.salary)
                {
                    myData.salary = req.body.salary;
                }
                if(req.body.workingDays)
                {
                    myData.workingDays = req.body.workingDays;
                }
            }
            else if(req.body.category === "Bootcamps")
            {
                if(req.body.fees)
                {
                    myData.fees = req.body.fees;
                }
            }
            console.log(myData);
            const newPost = new explores(myData);
            await newPost.save().then(()=>{
                res.status(201).json({
                    message: "Post created succesfully",
                });
            });
        }
        catch(err)
        {
            console.log(err);
            res.status(400).json({
                error: err
            });
        }
    }
    catch(err)
    {
        res.status(503).json({
            message: "Service Unavailable, please try later"
        });
    }
    

};

module.exports = AddPost;