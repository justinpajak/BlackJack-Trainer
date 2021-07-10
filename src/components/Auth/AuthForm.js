import "../../styles/Login.css"

const AuthForm = ({user, onChange, onLogin, onRegister }) => {
    return (
        <div>
            <div className="login-div">
                <div className="login_title">
                    Login to BlackJack Trainer
                </div>
                <div className="form">
                    <form autoComplete="off">
                        <div className="username">
                            <input
                                type="text"
                                id="username-input"
                                value={user.username}
                                onChange={onChange}
                                placeholder="Username"
                                name="username"
                                autoComplete="current-username"
                                required
                            />
                        </div>
                        <div className="password">
                            <input
                                type="password"
                                id="password-input"
                                value={user.password}
                                onChange={onChange}
                                placeholder="Password"
                                autoComplete="current-password"
                                name="password"
                                required
                            />
                        </div>
                        <button className="submit" onClick={onLogin}>
                            Login
                        </button>
                        <button className="submit" onClick={onRegister}>
                            Create Acccount
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AuthForm;