import {useState} from 'react';

const NewUser = ({handleSubmit}) => {

    const [login, setLogin] = useState({username: "", password: ""})

    const change = (e) => {
        if (e.target.name == "username") {
            setLogin({username: e.target.value, password: login.password});
        } else {
            setLogin({username: login.username, password: e.target.value});
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(login);
        setLogin({username: '', password: ''});
    }

    return (
        <div className="login-div">
            <div className="login_title">
                Sign in to BlackJack Trainer!
            </div>

            <div className="form">
                <form>
                    <div className="username">
                        <input type="text" value={login.username} onChange={e => change(e)} name="username" placeholder="Username" required/>
                    </div>
                    <div className="password">
                        <input type="password" value={login.password} onChange={e => change(e)} name="password"  placeholder="Password" required/>
                    </div>
                    <div className="submit">
                        <input type="submit" onClick={e => onSubmit(e)} value="Submit" />
                    </div>
                </form>
            </div>
            {/* Add text to change the typeOfUser, triggers new user page to show */}
        </div>
    )
}

export default NewUser;