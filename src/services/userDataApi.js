import Parse from 'parse';

// Read in User Data - except password
export const getDataByUserName = async (username) => {
    const userData = Parse.Object.extend("UserData");
    const query = new Parse.Query(userData);
    query.equalTo('username', username);
    try {
        const results = await query.find();
        const data = new Object();
        if (results[0] !== undefined) {
            data.points = results[0].get('points');
            data.rounds_right = results[0].get('rounds_right');
            data.rounds_wrong = results[0].get('rounds_wrong');
            return data;
        }
    } catch (error) {
        console.log("Error getting user data", error);
    }
}

export const logOutUser = async () => {
    Parse.User.logOut().then(() => {
        return null;
    })
};