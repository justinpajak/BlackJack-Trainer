import React, { useState, useEffect } from 'react';

// Import Styles
import "./styles/App.css"

// Import Routing
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

// Import Components
import NavBar from "./components/NavBar.js";
import Auth from "./components/Auth/Auth";

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
                                    round_wrong: 0,
                                    rounds_right: 0});

  useEffect(() => {
    window.scrollTo(-50, 0);
  });

  return (
    <div>
      <Router>
        <NavBar user={user}/>
        <Switch>
          <Route path="/auth" component={() => <Auth user={user} setUser={setUser}/>}/>
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
