const NewUser = ({handleSubmit, handleLogin}) => {

    return (
        <div className="login-div">
            <div className="title">
                Sign in to BlackJack Trainer!
            </div>

            <div className="form" onSubmit={handleSubmit}>
                <form>
                    <div className="username">
                        <input type="text" name="username" onChange={handleLogin} placeholder="Username" required/>
                    </div>
                    <div className="password">
                        <input type="password" name="password" onChange={handleLogin} placeholder="Password" required/>
                    </div>
                    <div className="submit">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
            {/* Add text to change the typeOfUser, triggers new user page to show */}
        </div>
    )
}

export default NewUser;