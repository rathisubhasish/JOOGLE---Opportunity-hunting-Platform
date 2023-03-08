const explores = require('../DB/exploreCollection');

const ApplyPost = async (req,res) => {
    const {_id} = req.user;
    const {postId} = req.params;
    try{
        const postExists = await explores.findOne({
            _id: postId,
        });

        if(!postExists) {
            return res.status(400).json({
                error: "Post Doesn't Exists",
            });
        }

        const findAlreadyApplied = await explores.findOne(
            {
                _id: postId,
                registered: {$elemMatch:{_id : _id}}
            },
            {_id:1,registered:1}
        )
        if(findAlreadyApplied)
        {
            return res.status(400).json({
                error: "Already Applied!",
            });
        }

        await explores.updateOne(
            {_id:postId},
            {
                $push:{
                    registered: {_id: _id}
                }
            }    
        ).exec((err,_) => {
            if(err)
            {
                return res.status(400).json({
                    error: "Unable to apply , please try later",
                });
            }
            else
            {
                return res.status(200).json({
                    message: "Applied successfully"
                })
            }
        });
    }
    catch(err)
    {
        res.status(503).json({
            err,
            message: "Service Unavailable, please try later"
        });
    }
    
};

module.exports = ApplyPost;