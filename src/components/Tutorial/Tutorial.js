import {useState} from 'react';
import {Redirect} from 'react-router-dom';
import "../../styles/Tutorial.css";
import Button from "../Button.js";

const Tutorial = ({loggedIn}) => {
    
    const [showCounting, setShowCounting] = useState(true);

    const clickCountingB = () => {
        setShowCounting(true);
    }

    const clickTrainingB = () => {
        setShowCounting(false);
    }

    return (
        <div>
            {loggedIn
            ? <div className="tutorial">
                <h1 className="title">Tutorial</h1>
                <div className="cards">
                    <Button cl="button" text="Counting" onEvent={clickCountingB}/>
                    <Button cl="button" text="Training" onEvent={clickTrainingB}/>
                </div>
                <div className="info">
                    {showCounting ? 
                    <h1>counting</h1>
                    :
                    <h1>training</h1>
                    }
                </div>
              </div>
            : <Redirect to="/auth"/>
            }
        </div>
    );
}

export default Tutorial;