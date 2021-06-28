import React, { useState } from 'react';
import "./styles/App.css"
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Import components
import Button from "./components/Button.js";
import NavBar from "./components/NavBar.js";

// Import Pages
import Home from "./pages/Home";
import Statistics from "./pages/Statistics"

function App() {

  const [runningTrain, setRunningTrain] = useState(false); 

  const onStart = () => {
    setRunningTrain(!runningTrain);
  };

  return (
    <div>
      <Router>
        <NavBar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/statistics' exact component={Statistics}/>
        </Switch>
      </Router>
      {/* <Button 
        onStart={onStart} 
        bg={runningTrain ? "red" : "black"}
        text={runningTrain ? "stop" : "start"}
      /> */}
    </div>
  );
}

export default App;