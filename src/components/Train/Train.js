import {useState} from 'react';
import {Redirect} from 'react-router-dom';

// Import Components
import Points from "./Points";
import Round from "./Round"; 

// Import CSS
import "../../styles/Train.css"

const Train = ({user, loggedIn}) => {

    const [running, setRunning] = useState(false);

    const onStart = () => {
        setRunning(!running)
    };

    return (
        <div>
            {loggedIn 
            ? <div>
                <div className="new_bg"></div>
                <Points points={user.points}/>
                <Round running={running} setRunning={setRunning}/>
              </div>
            : <Redirect to="/auth"/>}
        </div>
    );
}

export default Train;