// Import Dependecies
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';

// Import Styles
import "../styles/NavBar.css";

// Import Icons
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { GiPokerHand} from 'react-icons/gi'

// Import Components
import { PageInfoData } from '../Data/PageInfoData.js';

const NavBar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);

    const showNavbar = () => {
        setNavbarOpen(!navbarOpen);
    };

    return (
        <div>
            <IconContext.Provider value={{color: '#fff'}}>
                <div className="navbar-top">
                    <Link to="#" className="bars-button">
                        <FaIcons.FaBars onClick={showNavbar}/>
                    </Link>
                    <div className="title">
                        BlackJack Trainer  
                        <GiPokerHand/>
                    </div>
                    <div></div>
                </div>
                <nav className={navbarOpen ? 'navbar-left active' : 'navbar-left'}>
                    <ul className="menu-items" onClick={showNavbar}>
                        <li className="toggle-menu">
                            <Link to="#" className="close-button">
                                <AiIcons.AiOutlineCloseCircle/>
                            </Link>
                        </li>
                        {PageInfoData.map((page, index) => {
                            return (
                                <li key={index} className="menu-choice">
                                    <Link to={page.path}>
                                        {page.icon}
                                        <span>{page.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </div>
    )
}

export default NavBar;
