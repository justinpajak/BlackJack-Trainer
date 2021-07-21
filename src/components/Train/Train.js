import {useState} from 'react';
import {Redirect} from 'react-router-dom';

// Import Components
import Points from "./Points";
import Round from "./Round";
import Settings from "./Settings";

// Import CSS
import "../../styles/Train.css"

const Train = ({points, loggedIn, username, getUserData}) => {

    const [running, setRunning] = useState(false);

    const [hands, setHands] = useState(localStorage.getItem("hands") || 5);

    const [speed, setSpeed] = useState(localStorage.getItem("speed") || 1);

    const handsChange = (e) => {
        setHands(e.target.value);
        localStorage.setItem("hands", e.target.value);
    };

    const speedChange = (e) => {
        setSpeed(e.target.value);
        localStorage.setItem("speed", e.target.value);
    };

    const onStart = () => {
        setRunning(!running)
    };

    return (
        <div>
            {loggedIn 
            ? <div>
                <div className="new_bg"></div>
                <Points points={points}/>
                {running ? '' : <Settings hands={hands} speed={speed} handsChange={handsChange} speedChange={speedChange} onStart={onStart}/>}
                <Round getUserData={getUserData} running={running} setRunning={setRunning} hands={hands} speed={900 / speed ** (0.75)} username={username}/>
              </div>
            : <Redirect to="/auth"/>}
        </div>
    );
}

export default Train;