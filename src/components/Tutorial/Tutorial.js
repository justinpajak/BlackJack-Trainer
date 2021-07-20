import {Redirect} from 'react-router-dom';
import "../../styles/Tutorial.css";

const Tutorial = ({loggedIn}) => {
    return (
        <div>
            {loggedIn
            ? <div className="tutorial">
                <h1>Tutorial</h1>
              </div>
            : <Redirect to="/auth"/>
            }
        </div>
    );
}

export default Tutorial;