import Button from "../Button";

const Settings = ({onStart, handsChange, speedChange, hands, speed}) => {

    return (
        <div className="settings">
            <h1 className="settings-title">Train:</h1>
            <div className="slideContainer">
                <input onChange={handsChange} type="range" min="1" max="20" value={hands} id="myRange" className="slider"/>
                <p>Hands: {hands}</p>
            </div>
            <br/>
            <div className="slideContainer">
                <input onChange={speedChange} type="range" min="1" max="5" value={speed} id="myRange" className="slider"/>
                <p>Speed: {speed}</p>
            </div>
            <Button onEvent={onStart} cl="start-button" text="Start"/>
        </div>
    )
}

export default Settings
