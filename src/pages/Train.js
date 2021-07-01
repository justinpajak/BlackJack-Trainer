import {useState} from 'react';

// Import Components
import Points from "../components/Points";
import Round from "../components/Round";
import Settings from '../components/Settings';

// Import CSS
import "../styles/Train.css"

const Train = ({user}) => {

    const [running, setRunning] = useState(false);

    const onStart = () => {
        setRunning(running => !running)
        setTimeout(() => {
             setRunning(running => !running);
        }, 2000);
    };

    return (
        <div>
            <Points user={user}/>
            {running ? <Round/> : <Settings onStart={onStart}/>}
        </div>
    );
}

export default Train;