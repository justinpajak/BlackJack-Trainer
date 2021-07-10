import {useState} from 'react';
import {Redirect} from 'react-router-dom';

// Import Components
import Points from "./Points";

// Import CSS
import "../../styles/Train.css"

const Train = ({user, loggedIn}) => {

    const [running, setRunning] = useState(false);

    const onStart = () => {
        setRunning(!running)
    };



    return (
        <div>
            {loggedIn ? <h1>traiining</h1> : <Redirect to="/auth"/>}
            {/* <div className="new_bg"></div>
            <Points user={user.points}/> */}
        </div>
    );
}

export default Train;