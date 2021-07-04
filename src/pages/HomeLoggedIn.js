import React from 'react'

const HomeLoggedIn = ({logOut}) => {
    return (
        <div>
            <h1>Logged In</h1>
            <button onClick={logOut}>Log Out</button>
        </div>
    )
}

export default HomeLoggedIn
