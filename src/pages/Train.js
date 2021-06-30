import {useState} from 'react';

// Import Components
import Button from "../components/Button";

// Import CSS
import "../styles/Train.css"

const Train = ({user}) => {

    const [running, setRunning] = useState(false);

    const onStart = () => {
        setRunning(!running);
    }

    return (
        <div className="train">
            <Button onStart={onStart} bg={running ? 'red' : 'black'} text={running ? 'stop' : 'start'}/>
            <h1>{user}</h1>
        </div>
    );
}

export default Train;