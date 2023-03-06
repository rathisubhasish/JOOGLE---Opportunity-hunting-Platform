const explores = require('../DB/exploreCollection');

const Explore = async (_,res) => {
    try{
        await explores.find({},{_id:1,postName: 1,organization:1,category: 1, registered: 1, startDate: 1,endDate: 1, salary: 1, fees: 1}).then((data)=>{
            res.status(200).json({
                data: data
            })
        });
    }
    catch(err)
    {
        res.status(503).json({
            message: "Unavailable, please try later"
        });
    }
    
};

module.exports = Explore;