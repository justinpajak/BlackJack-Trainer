import {useState} from 'react';
import {Redirect} from 'react-router-dom';
import "../../styles/Tutorial.css";

const Tutorial = ({loggedIn}) => {
    
    const [showCouting, setShowCounting] = useState(true);
    const [showTraining, setShowTraining] = useState(false);

    const clickCountingB = () => {
        console.log("clicked");
    }

    return (
        <div>
            {loggedIn
            ? <div className="tutorial">
                <h1 className="title">Tutorial</h1>
              </div>
            : <Redirect to="/auth"/>
            }
        </div>
    );
}

export default Tutorial;