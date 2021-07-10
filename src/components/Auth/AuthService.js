import Parse from 'parse';

export const createUser = async (newUser) => {
    const userData = new Parse.Object("UserData");
    userData.set("username", newUser.username);
    userData.set("points", 0);
    userData.set("rounds_right", 0);
    userData.set("rounds_wrong", 0);

    const user = new Parse.User();
    user.set("username", newUser.username);
    user.set("password", newUser.password);
    try {
        await user.signUp();
        userData.set("UserCreds", user);
        try {
            alert("Account successfully created");
            return await userData.save();
        } catch(error) {
            alert("Error: account was not created");
        }
    } catch (error) {
        alert("Account already exists or username not provided");
        console.log(error);
    }
};

export const loginUser = async (userInfo) => {
    try {   
        await Parse.User.logIn(userInfo.username, userInfo.password);
        alert("Login Success");
        return true;
    } catch (error) {
        alert("Incorrect username or password");
        return false;
    }
}