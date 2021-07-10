import {FaGem} from 'react-icons/fa';

const Points = ({points}) => {
    console.log(points); 
    return (
        <div className="points">
            <span>Points: {points}</span>
            <FaGem/>
        </div>
    )
}

export default Points
