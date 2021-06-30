import {useState} from 'react';

// Import Components
import Button from "../components/Button";

// Import CSS
import "../styles/Train.css"

const Train = () => {

    const [running, setRunning] = useState(false);

    const onStart = () => {
        setRunning(!running);
    }

    return (
        <div className="train">
            <Button onStart={onStart} bg={running ? 'red' : 'black'} text={running ? 'stop' : 'start'}/>
        </div>
    );
}

export default Train;