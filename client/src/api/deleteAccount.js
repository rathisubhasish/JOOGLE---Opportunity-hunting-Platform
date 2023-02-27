const deleteAccount = async ({postId}) => {

    try{
        const res = await fetch(`${process.env.REACT_APP_API_URL}/profile/deleteAccount`, {
            method:"DELETE",
            credentials: "include",
        });
        return await res.json();

    } catch(err) {
        throw new Error(`Cannot delete Account! ${err}`);
    }
};

module.exports = deleteAccount;