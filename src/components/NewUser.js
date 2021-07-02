const NewUser = () => {
    return (
        <div class="login-div">
            <div class="title">
                Sign in to BlackJack Trainer!
            </div>
            <div class="form">
                <form>
                    <div class="username">
                        <input type="text" placeholder="Username or Email" />
                    </div>
                    <div class="password">
                        <input type="password" placeholder="Password" />
                    </div>
                    <div class="submit">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
            {/* Add text to change the typeOfUser, triggers new user page to show */}
        </div>
    )
}

export default NewUser;