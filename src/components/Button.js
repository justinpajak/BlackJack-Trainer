const Button = ({ onStart }) => {
    return (
        <div>
            <button onClick={() => onStart()} className="start-button" style={{backgroundColor: 'black'}}>
                Start
            </button>
        </div>
    )
}

export default Button;

