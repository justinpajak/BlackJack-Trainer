import Button from "./Button.js";

const Settings = ({onStart}) => {
    return (
        <div className="settings">
            <h1 className="settings-title">Train:</h1>
            
            <Button onStart={onStart}/>
        </div>
    )
}

export default Settings
