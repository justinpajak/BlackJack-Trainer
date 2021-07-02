import React, { useState, useEffect } from 'react';

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

// Initialize Parse
import "./services/userDataApi.js";
Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.serverURL;

// Main Component
const App = () => {

  // User State
  const [user, setUser] = useState('jpajak');

  return (
    <div>
      <Router>
        <NavBar user={user}/>
        <Switch>
          <Route path="/" exact component={() => <Home/>}/>
          <Route path="/train" component={() => <Train user={user}/>}/>
          <Route path="/stats" component={() => <Stats/>}/>
          <Route path="/rank" component={() => <Rank/>}/>
          <Route path="/tutorial" component={() => <Tutorial/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
