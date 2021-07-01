const Button = ({ onEvent, cl, text }) => {
    return (
        <div>
            <button onClick={onEvent} className={cl}>
                {text}
            </button>
        </div>
    )
}

export default Button;

