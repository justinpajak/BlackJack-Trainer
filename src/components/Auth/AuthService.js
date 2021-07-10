import Parse from 'parse';

export const createUser = async (newUser) => {
    const userData = new Parse.Object("UserData");
    userData.set("points", 0);
    userData.set("rounds_right", 0);
    userData.set("rounds_wrong", 0);

    const user = new Parse.User();
    user.set("username", newUser.username);
    user.set("password", newUser.password);
    try {
        await user.signUp();
    } catch (error) {
        alert("Error");
        console.log(error);
    }

    userData.set("UserCreds", user);
    try {
        return await userData.save();
    } catch(error) {
        alert("Error");
    }
};

export const loginUser = async (userInfo) => {
    try {
        const ret = await Parse.User.logIn(userInfo.username, userInfo.password);
    } catch (error) {
        alert("Invalid Username or Password");
    }
}