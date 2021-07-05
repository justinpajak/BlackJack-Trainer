import Parse from 'parse';
import {createHmac} from 'crypto';

// Create a new user - CREATE
export const createNewUser = (username, password) => {
    const hash = createHmac('sha256', password).digest('hex');
    const user = new Parse.Object("UserData");
    user.set("username", username);
    user.set("password", hash);
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
    console.log("before if");
    if ((user = await query.find()).length !== 0) {
        console.log("outer if"); 
        if (user[0].get('password') === createHmac('sha256', password).digest('hex')) {
            console.log("inner if");
            return true;
        }
    }
    return false;
}

export const checkUserExists = async (username) => {
    const userData = Parse.Object.extend("UserData");
    const query = new Parse.Query(userData);
    query.equalTo('username', username);
    var user = [];
    console.log("before if");
    if ((user = await query.find()).length !== 0) {
        console.log("return true");
        return true;
    }
    console.log("return false");
    return false;
}