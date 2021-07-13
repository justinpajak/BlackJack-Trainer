import {useState, useEffect} from 'react';
import {cards} from '../../Data/ImageDump.js';
import "../../styles/Round.css";

const Round = ({running, setRunning, rounds, speed}) => {

    // State for number of cards rounds in each round
    const [cardsShown, setCardsShown] = useState(0);

    // Set state for number of rounds played so far and other states required
    const [round, setRound] = useState(0);

    // State for count
    const [count, setCount] = useState(0);

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
        if (pOne.includes(idx)) {
            setCount(count => count + 1);
        } else if (mOne.includes(idx)) {
            setCount(count => count - 1);
        }
    }

    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    const play_round = async () => {
        // dealer L
        await sleep(1000)
        var idx = randIdx();
        setDLIdx(idx);
        setShowDealerL(true);
        await updateCount(idx);

        // dealer R
        await sleep(1000)
        idx = randIdx();
        setDRIdx(idx);
        setShowDealerR(true);
        await updateCount(idx);

        // player L
        await sleep(1000)
        idx = randIdx();
        setULIdx(idx);
        setShowUserL(true);
        await updateCount(idx);

        // player R
        await sleep(1000)
        idx = randIdx();
        setURIdx(idx);
        setShowUserR(true);
        await updateCount(idx);

        await sleep(1000);
    }

    useEffect(async () => {
        var i = 0;
        while (i < rounds) {
            await play_round();
            setShowDealerL(false);
            setShowDealerR(false);
            setShowUserL(false);
            setShowUserR(false);
            await sleep(1000);
            i += 1;
        }
        setRunning(false);
    }, [cardsShown])

    return (
        <div>
            {running ? 
                <div className="rounds">
                    <div className="dealer">
                        {showDealerL ? <img src={cards[DLIdx]}  className="cards"/> : ''}
                        {showDealerR ? <img src={cards[DRIdx]}  className="cards"/> : ''}
                        {showUserL ? <img src={cards[ULIdx]}  className="cards"/> : ''}
                        {showUserR ? <img src={cards[URIdx]}  className="cards"/> : ''}
                    </div>
                    <form>

                    </form>
                </div> : ''}
        </div>
    )
}

export default Round
