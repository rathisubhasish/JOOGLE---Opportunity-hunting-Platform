//Importing Modules
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    }
    },
    {
        timestamps: true,
    }
);

UserSchema.pre('save', function (next){
    if(this.password && this.isModified('password')) {
        bcrypt.hash(this.password, 10, (err, hashed) => {
            if(err) return next(err);
            this.password = hashed;
            next();
        });
    } else {
        next();
    }
});

//Compare password in database
UserSchema.methods = {
    verifyPassword: async function(password){
        return await bcrypt.compare(password, this.password);
    },
    changingPassword : async function(plainText){
        const hashed = await bcrypt.hash(plainText, 10);
        return hashed;
    }
}


module.exports = mongoose.model("users", UserSchema);