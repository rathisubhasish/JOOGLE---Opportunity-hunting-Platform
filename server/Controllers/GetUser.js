

const GetUser = async (req,res) =>{
    const {username, _id} = req.user;

    return res.status(200).json({
        message: "user is still logged in",
        username,
        _id
    });
};

module.exports = GetUser;