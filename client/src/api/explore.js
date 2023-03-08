

const explore = async ({getCategory}) => {
    var requestTo = "explore";
    if(getCategory)
    {
        requestTo = `explore?category=${getCategory}`;
    }
    try{
        const res = await fetch(`${process.env.REACT_APP_API_URL}/${requestTo}`,{
            method: "GET",
            credentials: "include",
        });
        return await res.json();
    } catch(err) {
        throw new Error("unable to fetch data");
    }
};

module.exports = explore;