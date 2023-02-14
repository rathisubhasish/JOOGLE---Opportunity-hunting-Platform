const profile = async () => {
    
    try{
        const res = await fetch(`${process.env.REACT_APP_API_URL}/profile`, {
            method:"GET",
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        return await res.json();

    } catch(err) {
        throw new Error(`Cannot open profile! ${err}`);
    }
};

module.exports = profile;