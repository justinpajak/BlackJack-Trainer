import Button from "../Button";

const Settings = ({onStart}) => {
    return (
        <div className="settings">
            <h1 className="settings-title">Train:</h1>
            <Button onEvent={onStart} cl="start-button" text="Start"/>
        </div>
    )
}

export default Settings
