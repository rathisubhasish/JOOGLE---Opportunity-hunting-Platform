const explores = require('../DB/exploreCollection');

const EditPost = async (req,res) => {
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
            var myData = req.body;
            myData.userId = _id;
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

module.exports = EditPost;