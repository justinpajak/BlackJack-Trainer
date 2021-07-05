import {useState, useEffect} from 'react';
import Button from './Button.js'
import {cards} from "../Data/ImageDump.js"
import "../styles/Round.css";

const Round = ({running, setRunning}) => {

    const [cardsShown, setCardsShown] = useState(1);

    // set index to show random card
    const [index, setIndex] = useState(Math.floor(Math.random() * cards.length));

    const goBack = () => {
        setRunning(!running);
    };

    useEffect(() => {
        if (cardsShown < 8) {
            setTimeout(() => {
                setIndex(Math.floor(Math.random() * cards.length));
                setCardsShown(cardsShown + 1);
            }, 1000);
        }
    }, [cardsShown]);

    return (
        <div className="rounds">
            <img src={cards[index]} className="cards"/>
            <Button onEvent={goBack} cl="start-button" text="Go Back"/>
        </div>
    )
}

export default Round
