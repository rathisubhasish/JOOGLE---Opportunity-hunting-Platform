

const explorePost = async ({postId}) => {
    try{
        const res = await fetch(`${process.env.REACT_APP_API_URL}/explorePost/${postId}`,{
            method: "GET",
            credentials: "include",
        });
        return await res.json();
    } catch(err) {
        throw new Error("unable to fetch data");
    }
};

module.exports = explorePost;