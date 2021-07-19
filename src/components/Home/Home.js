import React from 'react'
import {logOutUser} from "../../services/userDataApi";

const Home = ({setUser, setLoggedIn}) => {

    const logOut = () => {
        logOutUser();
        setUser({username: "", points: 0, rounds_wrong: 0, rounds_right: 0});
        setLoggedIn(false);
    }

    return (
        <div className="logged-in">
            <h1>Logged In</h1>
            <br/>
            <button onClick={logOut}>Log Out</button>
        </div>
    )
}

export default Home
