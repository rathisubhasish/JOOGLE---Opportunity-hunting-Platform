const signup = async ({username, email, password, contact}) => {
    const user = {username, email, password, contact};

    try{
        const res = await fetch(`${process.env.REACT_APP_API_URL}/signup`, {
            method:"POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        return await res.json();

    } catch(err) {
        throw new Error(`Cannot signup! ${err}`);
    }
};

module.exports = signup;