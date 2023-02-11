const explores = require('../DB/exploreCollection');

const ExploreDetail = async (req,res) => {
    const {_id} = req.params;
    console.log(req.params);
    try{
        await explores.find({_id:_id}).then((data) => {
            res.status(200).json({
                data : data
            })
        })
    }
    catch(err)
    {
        res.status(403).json({
            error : "Item Not Found"
        })
    }
};

module.exports = ExploreDetail;