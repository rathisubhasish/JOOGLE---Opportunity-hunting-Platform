const explores = require('../DB/exploreCollection');

const DeletePost = async (req,res) => {
    
    // check if post title already exists
    try{
        await explores.findOne({_id: req.params.postId,},{userId:1,_id:1}).exec(async (err,postData)=>{
            // If err or no post
            if(err || !postData)
            {
                return res.status(400).json({
                    error: "Post does not exists",
                });
            }
    
            //if post found and only created by the logged in user
            if(postData.userId.equals(req.user._id))
            {
                await explores.deleteOne({_id:req.params.postId}).then(()=>{
                    return res.status(200).json({
                        message: "Post deleted successfully"
                    });
                })
            }
            else
            {
                return res.status(403).json({
                    error : "Post not created by you, so you can't delete it."
                });
            }
        });
    }
    catch(err)
    {
        res.status(503).json({
            message: "Service Unavailable, please try later"
        });
    }
      
};


module.exports = DeletePost;