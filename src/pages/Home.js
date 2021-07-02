import React, { useState, Redirect } from "react";
import "../styles/Home.scss"

import Button from "../components/Button";
import Login from "../components/Login.js";
import NewUser from "../components/NewUser.js";

const Home = () => {
    const [runningTrain, setrunningTrain] = useState(false);

    const onStart = () => {
        setrunningTrain(!runningTrain); 
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
            <Login/>
        </div>
    );
}

export default Home;