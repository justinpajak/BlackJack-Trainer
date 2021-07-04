import {useState} from 'react';

const Login = ({handleLogin, handleCreate, createUser, create}) => {

    const [login, setLogin] = useState({username: "", password: ""});

    const change = (e) => {
        if (e.target.name == "username") {
            setLogin({username: e.target.value, password: login.password});
        } else {
            setLogin({username: login.username, password: e.target.value});
        }
    };

    const onLogin = (e) => {
        e.preventDefault();
        handleLogin(login);
        setLogin({username: '', password: ''});
    };

    const onCreate = (e) => {
        e.preventDefault();
        handleCreate(login);
        setLogin({username: '', password: ''});
    }

    return (
        <div>
        {create 
            ? 
            <div className="login-div">
                <div className="login_title">
                    Login in to BlackJack Trainer!
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
                            <input type="submit" onClick={e => onCreate(e)} value="Create" />
                        </div>
                    </form>
                </div>
            </div>
            : 
            <div className="login-div">
                <div className="login_title">
                    Login in to BlackJack Trainer!
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
                            <input type="submit" onClick={e => onLogin(e)} value="Login" />
                        </div>
                    </form>
                </div>
                <button onClick={createUser} className="new-user">New User?</button>
            </div>
        }
        </div>
    )
}

export default Login;