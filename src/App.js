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
import {getDataByUserName} from "./services/userDataApi";
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
    setUser({...user, points: data.points, rounds_wrong: data.rounds_wrong, rounds_right: data.rounds_right});
  }

  useEffect(() => {
    const currentUser = Parse.User.current();
    if (currentUser) {
      setUser({...user, username: currentUser.get("username")})
      getUserData(currentUser.get("username"));
      setLoggedIn(true);
    }
    window.scrollTo(-50, 0);
  }, []);

  useEffect(() => {
    console.log(loggedIn);
  },[loggedIn])
  
  return (
    <div>
      <Router>
        <NavBar user={user}/>
        <Switch>
          {!loggedIn
          ? <Route path="/auth" component={() => <Auth setLoggedIn={setLoggedIn} user={user} setUser={setUser}/>}/> 
          : <Route exact path="/home" component={() => <Home setUser={setUser} setLoggedIn={setLoggedIn}/>}/>}
          <Route path="/train" component={() => <Train user={user} loggedIn={loggedIn}/>}/>
          <Route path="/stats" component={() => <Stats user={user} points={user.points} roundsWrong={user.rounds_wrong} roundsRight={user.rounds_right}/>}/>
          <Route path="/rank" component={() => <Rank/>}/>
          <Route path="/tutorial" component={() => <Tutorial/>}/>
          {!loggedIn ? <Redirect to="/auth"/> : <Redirect to="/home"/>}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
