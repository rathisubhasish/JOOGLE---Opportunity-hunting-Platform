const explores = require('../DB/exploreCollection');

const AddPost = async (req,res) => {
    const {_id} = req.user;

    try{
        // check if post title already exists
        const itemNameExists = await explores.findOne({
            itemName: req.body.itemName,
        });

        if(itemNameExists) {
            return res.status(400).json({
                error: "Title is already taken, try another",
            });
        }

        // if new title, create a new post
        try{
            const newPost = new explores({itemName:req.body.itemName, organization: req.body.organization, userId: _id, category: req.body.category});
            await newPost.save().then(()=>{
                res.status(201).json({
                    message: "Post created succesfully",
                });
            });
        }
        catch(err)
        {
            res.status(400).json({
                message: "category should match with one of the required enumValues only",
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