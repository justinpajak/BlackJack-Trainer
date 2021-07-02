import React, { useState, Redirect } from "react";
import "../styles/Home.scss"

import Button from "../components/Button";
import Login from "../components/Login.js";
import NewUser from "../components/NewUser.js";

const Home = () => {
    const [typeOfUser, setUserType] = useState(false);

    const onStart = () => {
        setUserType(!typeOfUser); 
    };

    return ( 
        <div className="home">
        {/* <h1>Home</h1>
        <Button
            onStart={onStart}
            bg="black"
            text="Login"
        />
        {runningTrain ?
            <Login/> :
            <NewUser/>} */}
            {/* <Login/> */}
            <NewUser/>
            {/* I wonder if we can make the login page and the newUser page 
            one component and just change the title...
            but I'm not sure if that would complicate things for when
            we have to interact with the database, meaning for the Login
            page we have to verify the user whereas on the newUser page 
            we have to add to the database...thoughts?  */}
        </div>
    );
}

export default Home;