import React, { useState, useEffect } from 'react';

// Import Styles
import "./styles/App.css"

// Import Routing
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

// Import Components
import NavBar from "./components/NavBar.js";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import Train from "./components/Train/Train";
import Stats from "./components/Stats/Stats";
import Rank from "./components/Ranking/Rank";
import Tutorial from "./components/Tutorial/Tutorial";

// Import Environment and Parse
import * as Env from "./environment"
import Parse from 'parse'
import {getDataByUserName} from "./services/UserDataApi";
Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;


// Main Component
const App = () => {

  // User Data State
  const [user, setUser] = useState({username: "",
                                    points: 0,
                                    rounds_wrong: 0,
                                    rounds_right: 0});

  const [loggedIn, setLoggedIn] = useState(false);

  const getUserData = async (username) => {
    const data = await getDataByUserName(username);
    if (data !== undefined) {
      setUser({username: username, points: data.points, rounds_wrong: data.rounds_wrong, rounds_right: data.rounds_right});
    }
  }

  useEffect(() => {
    const currentUser = Parse.User.current();
    if (currentUser) {
      setUser({...user, username: currentUser.get("username")})
      getUserData(user.username);
      setLoggedIn(true);
    }
    window.scrollTo(-50, 0);
  }, []);
  
  return (
    <div>
      <Router>
        <NavBar user={user}/>
        <Switch>
          {!loggedIn
          ? <Route path="/auth" component={() => <Auth getUserData={getUserData} setLoggedIn={setLoggedIn} user={user} setUser={setUser}/>}/> 
          : <Route exact path="/home" component={() => <Home setUser={setUser} setLoggedIn={setLoggedIn}/>}/>}
          <Route path="/train" component={() => <Train loggedIn={loggedIn} points={user.points}/>}/>
          <Route path="/stats" component={() => <Stats user={user} 
                                                       points={user.points} 
                                                       roundsWrong={user.rounds_wrong} 
                                                       roundsRight={user.rounds_right}
                                                       loggedIn={loggedIn}/>}/>
          <Route path="/rank" component={() => <Rank loggedIn={loggedIn}/>}/>
          <Route path="/tutorial" component={() => <Tutorial loggedIn={loggedIn}/>}/>
          {!loggedIn ? <Redirect to="/auth"/> : <Redirect to="/home"/>}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
