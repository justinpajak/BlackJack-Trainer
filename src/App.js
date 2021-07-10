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

  const getUserData = () => {
    // Get user data using getDataByUserName() and populate user state
  }

  useEffect(() => {
    const currentUser = Parse.User.current();
    if (currentUser) {
      setUser({...user, username: currentUser.get("username")})
      getUserData();
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

          {/* Integrate stats, rank, and tutorial the same way as Train above here*/}

          {!loggedIn ? <Redirect to="/auth"/> : <Redirect to="/home"/>}
        </Switch>

      </Router>
      {/*
          <Route path="/stats" component={() => <Stats user={user} 
                                                       points={points} 
                                                       roundsWrong={roundsWrong}
                                                       roundsRight={roundsRight}/>}/>
          <Route path="/rank" component={() => <Rank/>}/>
          <Route path="/tutorial" component={() => <Tutorial/>}/>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
