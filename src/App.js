import React, { useState, useEffect } from 'react';

// Import Styles
import "./styles/App.css"

// Import Routing
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

// Import Components
import NavBar from "./components/NavBar.js";
import Auth from "./components/Auth/Auth";

// Import Services
import {getDataByUserName} from "./services/userDataApi";

// Import Environment and Parse
import * as Env from "./environment"
import Parse from 'parse'
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

  const getUserData = async () => {
    const data = await getDataByUserName(user.username);
    // setUser({...user, points: data.points,
    //                   rounds_wrong: data.rounds_wrong,
    //                   rounds_right: data.rounds_right});
  }

  useEffect(async () => {
    const currentUser = Parse.User.current();
    if (currentUser) {
      setUser({...user, username: currentUser.get("username")})
      getUserData();
    }
    window.scrollTo(-50, 0);
  }, []);

  return (
    <div>
      <Router>
        <NavBar user={user}/>
        <Switch>
          <Route path="/auth" component={() => <Auth setLoggedIn={setLoggedIn} user={user} setUser={setUser}/>}/>
          {/* <Route path="/home" component={}/> */}
          <Redirect to="/auth"/>
        </Switch>
      </Router>
      {/* <Router>
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
      </Router> */}
    </div>
  );
}

export default App;
