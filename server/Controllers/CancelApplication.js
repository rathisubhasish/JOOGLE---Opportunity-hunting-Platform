const explores = require('../DB/exploreCollection');

const CancelApplication = async (req,res) => {
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

        const findApplied = await explores.findOne(
            {
                _id: postId,
                registered: {$elemMatch:{_id : _id}}
            },
            {_id:1,registered:1}
        )
        if(!findApplied)
        {
            return res.status(400).json({
                error: "You are not enrolled",
            });
        }

        await explores.updateOne(
            {_id:postId},
            {
                $pull:{
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
                    message: "Cancelled Application Successfully"
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

module.exports = CancelApplication;