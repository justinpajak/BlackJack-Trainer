import { Button } from "./components/Button.js";
import React, { useState } from 'react';

function App() {

  const [runningTrain, setRunningTrain] = useState(false); 

  const onStart = () => {
    setRunningTrain(!runningTrain);
  };

  return (
    <div>
      <Button 
        onStart={onStart} 
        bg={runningTrain ? "red" : "black"}
        text={runningTrain ? "stop" : "start"}
      />
    </div>
  );
}

export default App;