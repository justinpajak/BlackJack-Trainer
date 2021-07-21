import React, { useEffect, useState } from 'react';
import { logOutUser } from "../../services/UserDataApi";
import useFetchNews from "../../services/NewsApi";
import '../../styles/HomeLoggedIn.css';

const Home = ({ setUser, setLoggedIn }) => {
    const logOut = () => {
        logOutUser();
        setUser({ username: "", points: 0, rounds_wrong: 0, rounds_right: 0 });
        setLoggedIn(false);
    }

    // call custom hook to get news
    const news = useFetchNews();

    // show newsfeed once data is received
    return (
        <div>
            <div className="logged-in">
                <h1>Logged In</h1>
                <br />
                <button onClick={logOut}>Log Out</button>
            </div>
            <div className="topNews">
                {news.articles ?
                    <div>
                        <h1>BlackJack News for the day</h1>
                        <ul>
                            {news.articles.map(el => (
                                <li>
                                    <div className="row">
                                        <div className="image-column">
                                            <img src={el.urlToImage} alt="image"/>
                                        </div>
                                        <div className="text-column">
                                            <p className="title">{el.title}</p>
                                            <p className="author"><i>Written by {el.author}</i></p>
                                            <p className="description">{el.description}</p>
                                            <p>Read more at <a href={el.url} target="_blank">{el.source.name}</a></p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    : ''
                }
            </div>
        </div>
    )
}

export default Home
