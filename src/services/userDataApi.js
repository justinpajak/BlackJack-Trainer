import Parse from 'parse';

// export const createNewUser = (username) => {
//     const user = new Parse.Object("UserData");
//     user.set("username", username);
//     user.set("points", 0);
//     user.set("rounds-wrong", 0);
//     user.set("rounds-right", 0);
//     return user.save();
// }

// this need to be changed a lot, it ssimply prints the amount of points
// need to fetch all user data (username, points, rounds_right, roudns_wrong)
// and return them in a single object or promise(idk)
// Then get the data in app.js in a useeffect call

export const getByUserName = (username) => {
    const UserData = Parse.Object.extend("UserData");
    const query = new Parse.Query(UserData);
    query.equalTo("username", username);
    try {
        query.find().then((results) => {
            for (const object of results) {
                const points = object.get("points");
                console.log(points);
            }
        });
    } catch(error) {
        console.error('Error while fetching UserData', error);
    }
}