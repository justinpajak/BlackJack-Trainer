import Button from "./Button.js";

const Settings = ({onStart}) => {
    return (
        <div className="settings">
            <Button onStart={onStart}/>
        </div>
    )
}

export default Settings
