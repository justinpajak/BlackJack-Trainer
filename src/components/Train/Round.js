import {useState, useEffect} from 'react';
import Button from '../Button.js'
import {cards} from "../../Data/ImageDump"; 
import "../../styles/Round.css";

const Round = ({running, setRunning}) => {

    // State for number of cards shown in each round
    const [cardsShown, setCardsShown] = useState(0);

    // Set state for number of rounds played so far and other states required
    const [round, setRound] = useState(0);

    // State for showing certain cards
    const [showDealerL, setShowDealerL] = useState(false);
    const [showDealerR, setShowDealerR] = useState(false);
    const [showUserL, setShowUserL] = useState(false);
    const [showUserR, setShowUserR] = useState(false);

    // State for random cards 
    const [DLIdx, setDLIdx] = useState(0);
    const [DRIdx, setDRIdx] = useState(0);
    const [ULIdx, setULIdx] = useState(0);
    const [URIdx, setURIdx] = useState(0);

    // State for count
    const [count, setCount] = useState(0);

    // Mapping for index to card value
    const pOne =  [0, 1, 2, 3, 4, 5, 13,
                   14, 15, 16, 17, 26, 27,
                   28, 29, 30, 39, 40, 41,
                   42, 43];

    const mOne = [8, 9, 10, 11, 12, 21, 22, 23,
                  24, 25, 34, 35, 36, 37, 38, 47,
                  48, 49, 50, 51];

    const goBack = () => {
        setRunning(!running);
    };

    const randIdx = () => {
        return (Math.floor(Math.random() * cards.length));
    }

    const updateCount = (idx) => {
        console.log("updateCount called with idx = ", idx);
        if (mOne.includes(idx)) {
            console.log(count);
            setCount(count - 1);
        } 
        if (pOne.includes(idx)) {
            console.log(count);
            setCount(count + 1);
        }
        console.log("updated count ", count); 
    }

    const play_round = async () => {
        setTimeout(() => {
            setShowDealerL(true);
            const idx = randIdx();
            setDLIdx(idx);
            updateCount(17);
        }, 1000);
        setTimeout(() => {
            setShowDealerR(true);
            const idx = randIdx();
            setDRIdx(idx);
            updateCount(0);
        }, 2000);
        setTimeout(() => {
            setShowUserL(true);
            const idx = randIdx();
            setULIdx(idx);
            updateCount(30);
        }, 3000);
        setTimeout(() => {
            setShowUserR(true);
            const idx = randIdx();
            setURIdx(idx);
            updateCount(15);
        }, 4000);
    }

    useEffect(() => {
        play_round();
    }, [cardsShown]);

    return (
        <div className="rounds">
            <div className="dealer">
                {showDealerL ? <img src={cards[DLIdx]} className="cards"/> : ''}
                {showDealerR ? <img src={cards[DRIdx]} className="cards"/> : ''}
            </div>
            <div className="player">
                {showUserL ? <img src={cards[ULIdx]} className="cards"/> : ''}
                {showUserR ? <img src={cards[URIdx]} className="cards"/> : ''}
            </div>
            <h1>{count}</h1>
            <Button onEvent={goBack} cl="start-button" text="Go Back"/>
        </div>
    )
}

export default Round;