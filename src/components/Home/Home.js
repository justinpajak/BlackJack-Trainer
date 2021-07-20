import React, { useEffect, useState } from 'react';
import { logOutUser } from "../../services/userDataApi";
import { getNews } from "./News";

const Home = ({ setUser, setLoggedIn }) => {
    const News = async () => {
        const data = await getNews();
        setTopNews(data); 
    }

    const logOut = () => {
        logOutUser();
        setUser({ username: "", points: 0, rounds_wrong: 0, rounds_right: 0 });
        setLoggedIn(false);
    }

    const [topNews, setTopNews] = useState(null); 

    return (
        <div className="logged-in">
            <h1>Logged In</h1>
            <br />
            <button onClick={logOut}>Log Out</button>
            <button onClick={News}>Get News</button>
            <p>{topNews}</p>
        </div>
    )
}

export default Home
