import {useState} from "react";
import AuthForm from "./AuthForm";
import {createUser, loginUser} from "./AuthService";

const Auth = ({user, setUser, setLoggedIn, getUserData}) => {

    const [newUser, setNewUser] = useState({
        username: "",
        password: ""
    });

    const onChangeFields = (e) => {
        e.preventDefault();
        const {name, value: newValue} = e.target;
        setNewUser({
            ...newUser, [name]: newValue
        });
    };

    const onLogin = async (e) => {
        e.preventDefault();
        if (await loginUser(newUser)) {
            setUser({...user, username: newUser.username});
            setLoggedIn(true);
        };
        getUserData(newUser.username);
    }

    const onRegister = async (e) => {
        e.preventDefault()
        if (newUser.password.length >= 8) {
            if (await createUser(newUser)) {
                setUser({...user, username: newUser.username});
                setLoggedIn(true);
            }
        } else {
            alert("Password must be at least 8 characters");
        }
    }
    
    return (
        <div>
            <AuthForm user={newUser} onChange={onChangeFields} onLogin={onLogin} onRegister={onRegister}/>
        </div>
    );
}

export default Auth;