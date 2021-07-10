import {Redirect} from 'react-router-dom';

const Stats = ({user, points, roundsWrong, roundsRight, loggedIn}) => {
    return (
        <div>
            {loggedIn
            ? <div className="stats">
                <h1>Stats</h1>
                <h3>Points: {points}</h3>
                <h3>Rounds Correct: {roundsRight}</h3>
                <h3>Rounds Wrong: {roundsWrong}</h3>
              </div>
            : <Redirect to="/auth"/>
            }
        </div>
    );
}

export default Stats;
