//Importing Modules
const mongoose = require('mongoose');

var categoryOptions = {
    values: ['HiringChallenges', 'Jobs', 'Bootcamps']
  , message: 'Category is required.'
};

const ExploreSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    organization: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    userId: {
        type: Object,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: categoryOptions
    }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("explores", ExploreSchema);