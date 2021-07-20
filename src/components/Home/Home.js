import React, { useEffect, useState } from 'react';
import { logOutUser } from "../../services/userDataApi";
import useFetchNews from "./News";
import '../../styles/HomeLoggedIn.css';

const Home = ({ setUser, setLoggedIn }) => {
    const logOut = () => {
        logOutUser();
        setUser({ username: "", points: 0, rounds_wrong: 0, rounds_right: 0 });
        setLoggedIn(false);
    }

    const news = useFetchNews(); 

    return (
        <div>
            <div className="logged-in">
                <h1>Logged In</h1>
                <br />
                <button onClick={logOut}>Log Out</button>
            </div>
            <div className="topNews">
                {news.articles ? 
                    <ul>
                        {news.articles.map(el => (
                            <li>
                                {el.title}
                                {el.author}
                                {el.description}
                                <img src={el.urlToImage}/>
                                <a href={el.url}>{el.source.name}</a>
                            </li>
                        ))}
                    </ul>
                    : ''
                }
            </div>
        </div>
    )
}

export default Home
