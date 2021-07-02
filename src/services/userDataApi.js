import Parse from 'parse';

export const createNewUser = (username) => {
    const user = new Parse.Object("UserData");
    user.set("username", username);
    user.set("points", 0);
    user.set("rounds-wrong", 0);
    user.set("rounds-right", 0);
    return user.save().then((result) => {
        return result;
    })
}

export const getByUserName = (username) => {
    const UserData = Parse.Object.extend("UserData");
    const query = new Parse.Query(UserData);
    return query.get(username);
}