import Button from './Button.js'
import {cards} from "../Data/ImageDump.js"

const Round = ({running, setRunning}) => {

    const goBack = () => {
        setRunning(!running);
    };
    
    return (
        <div>
            <img src={cards[Math.floor(Math.random() * cards.length)]}/>
            <Button onEvent={goBack} cl="start-button" text="goback"/>
        </div>
    )
}

export default Round
