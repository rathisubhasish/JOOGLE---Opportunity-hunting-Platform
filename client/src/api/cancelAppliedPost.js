
const cancelAppliedpost = async ({postId}) => {
    try{
        const res = await fetch(`${process.env.REACT_APP_API_URL}/cancelApplication/post/${postId}`,{
            method: "POST",
            credentials: "include",
        });
        return await res.json();
    } catch(err) {
        throw new Error("unable to fetch data");
    }
};

module.exports = cancelAppliedpost;