import React, { useState } from 'react';

// Import Styles
import "./styles/App.css"

// Import Routing
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Import Components
import NavBar from "./components/NavBar.js";

// Import Pages
import Home from "./pages/Home";
import Statistics from "./pages/Statistics"

// Main Component
const App = () => {

  return (
    <div>
      <Router>
        <NavBar/>
        <Switch>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;