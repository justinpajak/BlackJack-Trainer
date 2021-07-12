import {useState, useEffect} from 'react';
import Button from '../Button.js'
import {cards} from "../../Data/ImageDump"; 
import "../../styles/Round.css";
import { BiPause } from 'react-icons/bi';

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

    const [user_count, setUserCount] = useState(0);

    const onChangeCount = (e) => {
        e.preventDefault();
        try {
             // something is wrong here: 
             //     e.nativeEvent.data only takes the last digit 
             //     if input is more than one digit long
            const data = e.nativeEvent.data;
            setUserCount(data);
        }
        catch(error) {
            console.log("No answer yet");
        }
    };

    const goBack = () => {
        setRunning(!running);
    };

    const submit = async (answer) => {
        answer.preventDefault(); 
        console.log("user_count: ", user_count); 
        console.log("types: ", typeof(Number(user_count.data)), " ", typeof(count)); 
        console.log("count: ", count);
        // never equal to each other...? not sure why since the 
        // typeof above says they're both numbers
        if (await Number(user_count.data) == count) {
            console.log("points should increase");
        }
    };

    const randIdx = () => {
        return (Math.floor(Math.random() * cards.length));
    }

    const updateCount = async (idx) => {
        console.log("updateCount called with idx = ", idx);
        if (mOne.includes(idx)) {
            console.log("count-1", count - 1);
            let newCount = count-1; 
            setCount(newCount);
        } 
        if (pOne.includes(idx)) {
            console.log("count+1", count + 1);
            let newCount = count+1; 
            setCount(newCount);
        }
        return count; 
    }

    // added a bunch of async / await statements because trying to get it to update count correctly
    // right now, all of the updateCounts are having the same value for count
    // so it is never actually incrementing or decrementing correctly
    const play_round = async () => {
        await setTimeout(async () => {
            setShowDealerL(true);
            const idx = randIdx();
            setDLIdx(idx);
            await updateCount(9); 
            // await updateCount(9).then(count => console.log("count ", count)); 
        }, 1000);
        await setTimeout(async () => {
            setShowDealerR(true);
            const idx = randIdx();
            setDRIdx(idx);
            await updateCount(0); 
            // await updateCount(0).then(count => console.log("count ", count));
        }, 2000);
        await setTimeout(async () => {
            setShowUserL(true);
            const idx = randIdx();
            setULIdx(idx);
            await updateCount(30); 
            // await updateCount(30).then(count => console.log("count ", count));
        }, 3000);
        await setTimeout(async () => {
            setShowUserR(true);
            const idx = randIdx();
            setURIdx(idx);
            await updateCount(15);
            // await updateCount(15).then(count => console.log("count ", count));
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
            <form onSubmit={submit}>
                <input type="text" placeholder="Input count here" onChange={onChangeCount} required autoFocus/>
                <input type="submit" value="Submit"/>
            </form>
            <Button onEvent={goBack} cl="start-button" text="Go Back"/>
        </div>
    )
}

export default Round;