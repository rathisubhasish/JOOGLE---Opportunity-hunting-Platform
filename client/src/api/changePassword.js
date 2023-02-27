const changePassword = async ({password}) => {
    const Newpassword = {password};
    try{
        const res = await fetch(`${process.env.REACT_APP_API_URL}/changePassword`,{
            method: "PUT",
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Newpassword),
        });
        return await res.json();
    } catch(err) {
        throw new Error("Please login to continue!");
    }
};

module.exports = changePassword;