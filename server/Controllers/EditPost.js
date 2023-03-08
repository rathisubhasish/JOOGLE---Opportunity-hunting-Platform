const explores = require('../DB/exploreCollection');

const EditPost = async (req,res) => {
    const {_id} = req.user;
    const {postId} = req.params;

    try{
        // check if post title already exists
        const postNameExists = await explores.findOne({
            postName: req.body.postName,
            _id: {$ne: postId},
        });

        if(postNameExists) {
            return res.status(400).json({
                error: "Title is already taken, try another",
            });
        }

        const postEditAccess = await explores.findOne({
            _id: postId,
            userId: _id
        },{_id:1, userId:1});
        console.log(postEditAccess);
        if(!postEditAccess) {
            return res.status(400).json({
                error: "You are not the creator , so can't edit this post!",
            });
        }
        
        // if new title, create a new post
        try{
            var myData = req.body;
            console.log(myData);
            explores.updateOne({_id:postId},
                {$set: myData}
            ).then((e)=>{
                console.log(e);
                res.status(200).json({
                    message: "Post Updated succesfully",
                });
            })
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