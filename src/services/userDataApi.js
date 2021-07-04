import Parse from 'parse';

// Create a new user - CREATE
export const createNewUser = (username, password) => {
    const user = new Parse.Object("UserData");
    user.set("username", username);
    user.set("password", password);
    user.set("points", 0);
    user.set("rounds_wrong", 0);
    user.set("rounds_right", 0);
    try {
        return user.save();
    } catch (error) {
        console.log("Error creating new user", error);
    }
}

// Read in User Data - except password
export const getDataByUserName = async (username) => {
    const userData = Parse.Object.extend("UserData");
    const query = new Parse.Query(userData);
    query.equalTo('username', username);
    try {
        const results = await query.find();
        const data = new Object();
        data.points = results[0].get('points');
        data.rounds_right = results[0].get('rounds_right');
        data.rounds_wrong = results[0].get('rounds_wrong');
        return data;
    } catch (error) {
        console.log("Error getting user data", error);
    }
}

// Find user -- verify if in database for login page
export const verifyUserCreds = async (username, password) => {
    const userData = Parse.Object.extend("UserData");
    const query = new Parse.Query(userData); 
    query.equalTo('username', username);
    var user = [];
    if ((user = await query.find()).length !== 0) {
        if (user[0].get('password') === password) {
            return true;
        }
    }
    return false;
}