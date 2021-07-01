import Button from "./Button.js";

const Settings = ({onEvent}) => {
    return (
        <div className="settings">
            <h1 className="settings-title">Train:</h1>
            <Button onEvent={onEvent} cl="start-button" text="start"/>
        </div>
    )
}

export default Settings
