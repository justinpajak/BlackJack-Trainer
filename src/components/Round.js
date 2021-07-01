import {useState, useEffect} from 'react';
import Button from './Button.js'
import {cards} from "../Data/ImageDump.js"

const Round = ({running, setRunning}) => {

    const [cardsShown, setCardsShown] = useState(1);

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
        <div>
            <img src={cards[index]}/>
            <Button onEvent={goBack} cl="start-button" text="goback"/>
        </div>
    )
}

export default Round
