import React, { useState, useEffect } from 'react';

// Import Styles
import "./styles/App.css"

// Import Routing
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Import Components
import NavBar from "./components/NavBar.js";

// Import Pages
import Home from "./pages/Home";
import HomeLoggedIn from "./pages/HomeLoggedIn";
import Rank from "./pages/Rank";
import Stats from "./pages/Stats";
import Train from "./pages/Train";
import Tutorial from "./pages/Tutorial";

// Import Environment and Parse
import * as Env from "./environment"
import Parse from 'parse'
import {
  checkUserExists,
  createNewUser,
  getDataByUserName,
  verifyUserCreds
} from "./services/userDataApi";
Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

// Main Component
const App = () => {

  // User Data State
  const [user, setUser] = useState('');
  const [points, setPoints] = useState(0);
  const [roundsWrong, setRoundsWrong] = useState(0);
  const [roundsRight, setRoundsRight] = useState(0);

  // Login State
  const [loggedIn, setLoggedIn] = useState(false);

  // Login user and update state if credentials are correct
  const handleLogin = async (loginData) => {
    const res = await verifyUserCreds(loginData.username, loginData.password);
    if (res) {
      const data = await getDataByUserName(loginData.username);
      setUser(loginData.username);
      setPoints(data.points);
      setRoundsWrong(data.rounds_wrong);
      setRoundsRight(data.rounds_right);
      setLoggedIn(true);
    }
    else {
      alert("Invalid username or password");
    }
  }

  // Create user and check if user already exists (username)
  const handleCreate = async (loginData) => {
    if (loginData.username.length === 0 || loginData.password.length < 7) {
      alert("Enter a username and set password more than 8 characters");
    } 
    if (await checkUserExists(loginData.username) == true) {
      alert("Username already exists");
    }
    else {
      createNewUser(loginData.username, loginData.password);
      setUser(loginData.username);
      setPoints(0);
      setRoundsWrong(0);
      setRoundsRight(0);
      setLoggedIn(true);
    }
  }

  // Log out user
  const logOut = () => {
    setLoggedIn(false);
    setUser('');
    setPoints(0);
    setRoundsWrong(0);
    setRoundsRight(0);
  }

  useEffect(() => {
    window.scrollTo(-50, 0);
  });

  return (
    <div>
      <Router>
        <NavBar user={user}/>
        <Switch>
          {!loggedIn ? <Route path="/" exact component={() => <Home handleLogin={loginData => handleLogin(loginData)} handleCreate={loginData => handleCreate(loginData)}/>}/>
                     : <Route path="/" exact component={() => <HomeLoggedIn logOut={logOut}/>}/>}
          <Route path="/train" component={() => <Train user={user}/>}/>
          <Route path="/stats" component={() => <Stats user={user} 
                                                       points={points} 
                                                       roundsWrong={roundsWrong}
                                                       roundsRight={roundsRight}/>}/>
          <Route path="/rank" component={() => <Rank/>}/>
          <Route path="/tutorial" component={() => <Tutorial/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
