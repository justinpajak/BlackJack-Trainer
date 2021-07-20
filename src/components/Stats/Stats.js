import {Redirect} from 'react-router-dom';
import LineChart from './PointsPerUserGraph';
import '../../styles/Stats.css';

const Stats = ({user, points, roundsWrong, roundsRight, loggedIn}) => {
    const totalRounds = roundsRight + roundsWrong;
    const percentRight = totalRounds == 0 ? 0 : roundsRight / totalRounds;
    const percentWrong = totalRounds == 0 ? 0 : roundsWrong / totalRounds;
    // I'm going to change this to a table actually
    return (
        <div>
            {loggedIn
            ? <div className="stats">
                <div className="row headers">
                    <div className="column">
                        <h3>Points</h3>
                    </div>
                    <div className="column">
                        <h3>Rounds Right %</h3>
                    </div>
                    <div className="column">
                        <h3>Rounds Wrong %</h3>
                    </div>
                    <div className="column">
                        <h3>Total Rounds</h3>
                    </div>
                </div>
                <div className="row numbers">
                    <div className="column">
                        <h3>{points}</h3>
                    </div>
                    <div className="column">
                        <h3>{percentRight}</h3>
                    </div>
                    <div className="column">
                        <h3>{percentWrong}</h3>
                    </div>
                    <div className="column">
                        <h3>{totalRounds}</h3>
                    </div>
                </div>
                <LineChart/>
              </div>
            : <Redirect to="/auth"/>
            }
        </div>
    );
}

export default Stats;
