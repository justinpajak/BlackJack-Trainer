import {useState} from 'react';
import {Redirect} from 'react-router-dom';
import "../../styles/Tutorial.css";
import Button from "../Button.js";
import scrollBars from "../../images/scrollbars.png";
import start from "../../images/start.png";
import submit from "../../images/submit.png";
import hand from "../../images/hand.png";
import table from "../../images/table.png";
import twoone from "../../images/21.png";

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
                    <Button cl={!showCounting ? "button" : "button-r"} text="Counting" onEvent={clickCountingB}/>
                    <Button cl={showCounting ? "button" : "button-r"} text="Training" onEvent={clickTrainingB}/>
                </div>
                <div>
                    {showCounting ? 
                    <div className="info">
                        <p className="words">In Black Jack, you (the player) are dealt 2 cards face up, while the dealer is dealt
                                            one card face up and one face down. The goal of the game is to have a higher total
                                            than the dealer without going over 21. </p>
                        <p className="words">Face cards count as 10, except Ace can be 1 or 11.</p>
                        <img src={hand} className="hand"/>
                        <p className="words">After dealing, you have 2 options: Hit (accept more cards to try and get closer to 21
                                             or Stay (accept no new cards and hope the dealer will bust (have a total higher than 21 in 
                                            which case you win).</p>
                        <p className="words">Note: The dealer must keep accepting new cards until he is at 17 or greater. This rule
                                             may be different in some casinos</p>
                        <img src={table} className="table"/>
                        <p className="words">In a small game where only one deck is being used, blackjack is a guaranteed winnable
                                             game for the player using counting.  This is not exactly the case in casinos. 
                                             But if you implement card counting with perfect strategy you will have an edge over
                                             casinos (Just don't get caught!)</p>
                        <p className="words">In card counting, (2 - 6) has a value of +1, (7 - 9) has value of 0 and (10 - A)
                                             has a value of -1.  As the cards are shown, keep a running total of the count in your head.</p>
                        <img src={twoone} className="twoone"/>
                        <p className="words">Finally, when it it your turn to bet before the hand is played, place a large bet when the 
                                             count is very positive (not many face cards have been shown) therefore you have a higher chance
                                             of getting face cards and winning.</p>
                        <p className="words">When the count is very negative, place a smaller bet.</p>
                    </div>
                    :
                    <div className="info">
                        <p className="words-r">The purpose of this app is to train your mind to count cards faster.</p>
                        <p className="words">To run the training app, click on the Train tab in the navigation menu. </p>
                        <p className="words">There you can specify the number of hands shown and speed they are shown before being asked the count.</p>
                        <br/> <br/>
                        <img src={scrollBars} className="scroll"/>
                        <p className="words">When done, press the start button to begin a round of training.</p>
                        <img src={start} className="start"/>
                        <p className="words">After the round is completed, enter the count in this box.  Note that for 
                                            negative counts you must have a minus sign (ex: -2), but for positive counts
                                            you SHOULD NOT add a '+' (ex: 2)</p>
                        <img src={submit} className="subp"/>
                        <p className="words">After submitting, you will be told if you are correct or not, and your points
                                             and other stats will be adjusted.</p>
                        <p className="words">For a higher speed and number of rounds played
                                             before being asked the count, you can earn more points!</p>
                    </div>
                    }
                </div>
              </div>
            : <Redirect to="/auth"/>
            }
        </div>
    );
}

export default Tutorial;