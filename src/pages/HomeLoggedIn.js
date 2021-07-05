import React from 'react'
import "../styles/HomeLoggedIn.css"; 

const HomeLoggedIn = ({logOut}) => {
    return (
        <div className="logged-in">
            <h1>Logged In</h1>
            <br/>
            <button onClick={logOut}>Log Out</button>
        </div>
    )
}

export default HomeLoggedIn
