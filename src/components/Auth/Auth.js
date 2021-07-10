import {useState} from "react";
import AuthForm from "./AuthForm";
import {createUser, loginUser} from "./AuthService";

const Auth = ({user, setUser}) => {

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
        loginUser(newUser);
    }

    const onRegister = async (e) => {
        e.preventDefault();
        await createUser(newUser);
        setUser({...user, username: newUser.username});
    }
    
    return (
        <div>
            <AuthForm user={newUser} onChange={onChangeFields} onLogin={onLogin} onRegister={onRegister}/>
        </div>
    );
}

export default Auth;