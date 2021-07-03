const Stats = ({user, points, roundsWrong, roundsRight}) => {
    return (
        <div className="stats">
            <h1>Stats</h1>
            <h3>Points: {points}</h3>
            <h3>Rounds Correct: {roundsRight}</h3>
            <h3>Rounds Wrong: {roundsWrong}</h3>
        </div>
    );
}

export default Stats;
