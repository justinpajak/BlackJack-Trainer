import React, { useState } from "react";
import "../styles/Home.css"
import Button from "../components/Button";

const Home = () => {
    const [runningTrain, setrunningTrain] = useState(false);

    const onStart = () => {
        setrunningTrain(!runningTrain);
    };

    return ( <
        div className = "home" >
        <
        h1 > Home < /h1> <
        /div >
    );
}

export default Home;