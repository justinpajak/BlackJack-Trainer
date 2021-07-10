import {Redirect} from 'react-router-dom';

const Rank = ({loggedIn}) => {
    return (
        <div>
            {loggedIn
            ? <div className="rank">
                <h1>Rank</h1>
              </div>
            : <Redirect to="/auth"/>
            }
        </div>
    );
}

export default Rank;
