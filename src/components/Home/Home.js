import React, { useEffect, useState } from 'react';
import { logOutUser } from "../../services/userDataApi";
import useFetchNews from "./News";

const Home = ({ setUser, setLoggedIn }) => {
    const News = () => {
        const data = useFetchNews();

        if (data === null) {
            return 'Loading...';
        }
        setTopNews(data); 
    }

    const logOut = () => {
        logOutUser();
        setUser({ username: "", points: 0, rounds_wrong: 0, rounds_right: 0 });
        setLoggedIn(false);
    }

    const [topNews, setTopNews] = useState([]); 

    return (
        <div className="logged-in">
            <h1>Logged In</h1>
            <br />
            <button onClick={logOut}>Log Out</button>
            <button onClick={News}>Get News</button>
            {/* <ul>
                {topNews.map(el => (
                    <li key={el.author}>{el.title}</li>
                ))}
            </ul> */}
        </div>
    )
}

export default Home
