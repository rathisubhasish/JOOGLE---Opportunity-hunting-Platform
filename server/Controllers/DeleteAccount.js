const users = require('../DB/userCollection');


const DeleteAccount = async (req,res) => {
    const {_id} = req.user;
    try{
        await users.deleteOne({_id:_id}).then(()=>{
            res.clearCookie("jwt");
            return res.status(200).json({
                message: "Account deleted successfully"
            });
        })
    }
    catch(err)
    {
        res.status(503).json({
            message: "Service Unavailable, please try later"
        });
    }
      
};


module.exports = DeleteAccount;