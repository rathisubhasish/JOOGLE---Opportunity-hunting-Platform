const login = async ({email, password}) => {
    const user = {email, password};

    try{
        const res = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
            method:"POST",
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        return await res.json();

    } catch(err) {
        throw new Error(`Cannot login! ${err}`);
    }
};

module.exports = login;