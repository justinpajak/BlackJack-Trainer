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

    const onStart = () => {
        setRunning(!running)
    };

    return (
        <div>
            {loggedIn 
            ? <div>
                <div className="new_bg"></div>
                <Points points={points}/>
                {running ? '' : <Settings onStart={onStart}/>}
                <Round getUserData={getUserData} running={running} setRunning={setRunning} hands={1} speed={1000} username={username}/>
              </div>
            : <Redirect to="/auth"/>}
        </div>
    );
}

export default Train;