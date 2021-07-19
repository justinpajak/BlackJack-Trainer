import Button from "../Button";
import {useState} from 'react';


const Settings = ({onStart}) => {

    const [rounds, setRounds] = useState(5);

    const [speed, setSpeed] = useState(1);

    const roundsChange = (e) => {
        setRounds(e.target.value);
    }

    const speedChange = (e) => {
        setSpeed(e.target.value);
    }

    return (
        <div className="settings">
            <h1 className="settings-title">Train:</h1>
            <div className="slideContainer">
                <input onChange={roundsChange} type="range" min="1" max="20" defaultValue="5" id="myRange" className="slider"/>
                <p>Rounds: {rounds}<span id="value"></span></p>
            </div>
            <div className="slideContainer">
                <input onChange={speedChange} type="range" min="1" max="20" defaultValue="1" id="myRange" className="slider"/>
                <p>Speed: {speed}<span id="value"></span></p>
            </div>
            <Button onEvent={onStart} cl="start-button" text="Start"/>
        </div>
    )
}

export default Settings
