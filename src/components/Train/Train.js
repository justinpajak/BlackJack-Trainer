import {useState} from 'react';

// Import Components
import Points from "./Points";
import Round from "../Round";
import Settings from './Settings';

// Import CSS
import "../styles/Train.css"

const Train = ({user}) => {

    const [running, setRunning] = useState(false);

    const onStart = () => {
        setRunning(!running)
    };

    return (
        <div>
            <div className="new_bg"></div>
            <Points user={user}/>
            {/* {running ? <Round running={running} setRunning={setRunning}/> : <Settings onEvent={onStart}/>} */}
        </div>
    );
}

export default Train;