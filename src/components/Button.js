export function Button({ onStart, bg, text }) {
    return (
        <div>
            {/* Having trouble with the background of the button */}
            <button onClick={() => onStart()} className="start" style={{backgroundColor: bg}}>
                {text}
            </button>
        </div>
    )
}