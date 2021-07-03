import React, { useState } from 'react';

// Import Styles
import "./styles/App.css"

// Import Routing
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Import Components
import NavBar from "./components/NavBar.js";

// Import Pages
import Home from "./pages/Home";
import Rank from "./pages/Rank";
import Stats from "./pages/Stats";
import Train from "./pages/Train";
import Tutorial from "./pages/Tutorial";

// Import Environment and Parse
import * as Env from "./environment"
import Parse from 'parse'
import {
  createNewUser,
  getDataByUserName
} from "./services/userDataApi";
Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;


// Main Component
const App = () => {

  // User State
  const [user, setUser] = useState('user3');
  const [password, setPassword] = useState('test');
  const [points, setPoints] = useState(0);
  const [roundsWrong, setRoundsWrong] = useState(0);
  const [roundsRight, setRoundsRight] = useState(0);

  // Creates new user and updates state
  const handleSubmitNewUser = async (e) => {
    e.preventDefault();
    await createNewUser(user, password)
    const data = await getDataByUserName(user);
    setPoints(data.points);
    setRoundsWrong(data.rounds_wrong);
    setRoundsRight(data.rounds_right);
  }

  const handleLogin = (e) => {
    console.log(e.target.value);
  }

  return (
    <div>
      <Router>
        <NavBar user={user}/>
        <Switch>
          <Route path="/" exact component={() => <Home handleSubmit={handleSubmitNewUser} 
                                                       handleLogin={handleLogin}/>}/>
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
