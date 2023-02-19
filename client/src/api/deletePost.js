const deletePost = async ({postId}) => {

    try{
        const res = await fetch(`${process.env.REACT_APP_API_URL}/explore/deletePost/${postId}`, {
            method:"DELETE",
            credentials: "include",
        });
        return await res.json();

    } catch(err) {
        throw new Error(`Cannot delete Post! ${err}`);
    }
};

module.exports = deletePost;