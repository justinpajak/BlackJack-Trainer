import './App.css';
import { Header } from "./components/Header.js";
// import { getPoints } from "./services/Points.js";
import { Button } from "./components/Button.js";
import React, { useEffect, useState } from 'react';

function App() {
  const [points, setPoints] = useState(0);

  const [runningTrain, setRunningTrain] = useState(false); 

  // useEffect(() => {
  //   return getPoints().then((data) => setPoints(data));
  // }, [points]);

  const onStart = () => {
    setRunningTrain(!runningTrain);
  };

  return (
    <div>
      <div class="background"></div>
      <Header title="Blackjack Counting Trainer" points={points} />
      <Button 
        onStart={onStart} 
        bg={runningTrain ? "red" : "black"}
        text={runningTrain ? "stop" : "start"}
      />
    </div>
  );
}

export default App;