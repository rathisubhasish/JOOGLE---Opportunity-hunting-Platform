const users = require('../DB/userCollection');

const ChangePassword = async (req,res) => {
    const {email} = req.user;
    try{
        await users.findOne({email}).exec((err, user) => {
            // if err or no user
            if(err || !user)
            {
                return res.status(400).json({
                    error: "Unable to change password , please try later",
                });
            }
            
            user.changingPassword(req.body.password).then((newHashedPassword)=>{
                
                users.updateOne(
                    {email: email},
                    {
                        $set: {
                            password : newHashedPassword 
                        }
                    }
                ).exec((err,e) => {
                    if(err)
                    {
                        return res.status(400).json({
                            error: "Unable to change password , please try later",
                        });
                    }
                    else
                    {
                        return res.status(200).json({
                            message: "password updated successfully"
                        })
                    }
                });
    
            });
    
        });
    }
    catch(err)
    {
        res.status(503).json({
            message: "Service Unavailable, please try later"
        });
    }
    
};

module.exports = ChangePassword;