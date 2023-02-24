//Importing Modules
const mongoose = require('mongoose');

var postCategoryOptions = {
    values: ['Hiring Challenges', 'Jobs', 'Bootcamps', 'Others']
  , message: 'Category is required.'
};

var PostTagOptions = {
    values: ['Others', 'Accounts', 'Acting', 'Animation', 'Architecture', 'Automobile','Aviation', 'Banking', 'Big Data', 'BPO', 'Brand Management', 'Business Development', 'Content Writing', 'Data Analytics', 'Data Entry', 'Data Science', 'Digital marketing', 'Ecommerce', 'Education', 'Engineering', 'Entertainment', 'Event Management', 'Fashion', 'Finance', 'Game Development', 'Graphic Design', 'Healthcare', 'Hotel Management', 'Human Resource', 'IT Comsultant', 'Medical', 'App Development', 'Photography', 'Programming', 'Research', 'Robotics', 'Sales', 'Software Development', 'Automation Testing', 'Full Stack Developer', 'UI/UX Design', 'Web Development']
  , message: 'Tag is required.'
};

const ExploreSchema = new mongoose.Schema({
    postName: {
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
    startDate: {
        type: String,
        required: true,
    },
    endDate: {
        type: String,
        required: true,
    },
    aboutUs: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: postCategoryOptions
    },
    registered : {
        type: Array,
        default:[]
    },
    salary : {
        type: String,
    },
    fees : {
        type: String,
    },
    firstPrize: {
        type: String,
    },
    secondPrize: {
        type: String,
    },
    thirdPrize: {
        type: String,
    },
    responsibility: {
        type: String,
        required: true
    },
    requirements: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    minExperience: {
        type: Number,
    },
    maxExperience: {
        type: Number,
    },
    workingDays: {
        type: Number,
    }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("explores", ExploreSchema);