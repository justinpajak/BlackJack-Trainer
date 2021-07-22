import {useState, useEffect} from 'react';
import {cards} from '../../Data/ImageDump.js';
import "../../styles/Round.css";
import { updateUserStats } from '../../services/UserDataApi.js';

const Round = ({running, setRunning, hands, speed, speed_base, username, getUserData}) => {

    // State for correctness
    const [correct, setCorrect] = useState(false);
    const [shownCor, setShownCor] = useState(true);

    // State for count
    const [count, setCount] = useState(0);

    // State for user input 
    const [userCount, setUserCount] = useState(0);

    // Round done
    const [roundDone, setRoundDone] = useState(false);

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
        await sleep(speed);
        var idx = randIdx();
        setDLIdx(idx);
        setShowDealerL(true);
        await updateCount(idx);

        // dealer R
        await sleep(speed);
        idx = randIdx();
        setDRIdx(idx);
        setShowDealerR(true);
        await updateCount(idx);

        // player L
        await sleep(speed);
        idx = randIdx();
        setULIdx(idx);
        setShowUserL(true);
        await updateCount(idx);

        // player R
        await sleep(speed);
        idx = randIdx();
        setURIdx(idx);
        setShowUserR(true);
        await updateCount(idx);

        await sleep(600);
    }

    useEffect(async () => {
        if (running === true) {
            var i = 0;
            setRoundDone(false);
            while (i < hands) {
                await play_round();
                setShowDealerL(false);
                setShowDealerR(false);
                setShowUserL(false);
                setShowUserR(false);
                await sleep(1000);
                i += 1;
            }
            setRunning(true);
            setRoundDone(true);
        }
    }, [running])

    const updateStats = async (r) => {
        var stats = {}
        if (r) {
            stats.right = true;
            stats.points = Number(speed_base) * Number(hands);
        } else {
            stats.right = false;
            stats.points = -1;
        }

        await updateUserStats(stats, username);
        await getUserData(username);
    }

    const onSubmitCount = async (e) => {
        e.preventDefault();
        if (Number(count) === Number(userCount)) {
            console.log("Correct");
            updateStats(1)
            setCorrect(true);
        } else {
            console.log("Incorrect");
            updateStats(0)
            setCorrect(false);
        }
        setUserCount(0);
        setCount(0);
        setRoundDone(false);

        setShownCor(false);
    }

    const onChangeCount = (e) => {
        e.preventDefault();
        setUserCount(e.target.value);
    }

    return (
        <div>
            {running ? 
                <div className="rounds">
                    <div className="dealer">
                        {showDealerL ? <img src={cards[DLIdx]}  className="cards"/> : ''}
                        {showDealerR ? <img src={cards[DRIdx]}  className="cards"/> : ''}
                    </div>
                    <div className="player">
                        {showUserL ? <img src={cards[ULIdx]}  className="cards"/> : ''}
                        {showUserR ? <img src={cards[URIdx]}  className="cards"/> : ''}
                    </div>
                    {roundDone ?
                    <form onSubmit={onSubmitCount} className="count-input">
                        <input className="count" onChange={onChangeCount} type="text" placeholder="Count: " required/>
                        <input className="submit" type="submit" value="Submit"/>
                    </form> : 
                    ''}
                    {shownCor ? '' : correct ? <h1>Correct</h1> : <h1>Incorrect</h1>}
                </div> : ""}
        </div>
    )
}

export default Round;