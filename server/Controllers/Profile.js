const users = require('../DB/userCollection');

const Profile = async(req,res) => {
    const {username, _id, email, contact} = req.user;

    return res.status(200).json({
        _id,
        username,
        email,
        contact
    });
};

module.exports = Profile;