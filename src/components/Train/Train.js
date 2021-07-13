import {useState} from 'react';
import {Redirect} from 'react-router-dom';

// Import Components
import Points from "./Points";
import Round from "./Round";
import Settings from "./Settings";

// Import CSS
import "../../styles/Train.css"

const Train = ({points, loggedIn}) => {

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
                <Round running={running} setRunning={setRunning} rounds={3} speed={1000}/>
              </div>
            : <Redirect to="/auth"/>}
        </div>
    );
}

export default Train;