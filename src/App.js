import React from 'react';
import * as Env from "./environments.js";
import Parse from "parse";

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

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

// Main Component
const App = () => {

  return (
    <div>
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/train" component={Train}/>
          <Route path="/stats" component={Stats}/>
          <Route path="/rank" component={Rank}/>
          <Route path="/tutorial" component={Tutorial}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;