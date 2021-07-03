import Parse from 'parse';
import { GiConsoleController } from 'react-icons/gi';

// Create a new user - CREATE
export const createNewUser = (username) => {
    const user = new Parse.Object("UserData");
    user.set("username", username);
    user.set("points", 0);
    user.set("rounds_wrong", 0);
    user.set("rounds_right", 0);
    try {
        return user.save();
    } catch (error) {
        console.log("Error creating new user", error);
    }
}

// Read in User Data

export const getDataByUserName = async (username) => {
    const userData = Parse.Object.extend('UserData');
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