export function Button({ onStart, bg, text }) {
    return (
        <div class="button">
            {/* Having trouble with the background of the button */}
            <button onClick={() => onStart()} class="start" color="{bg}">
                {text}
            </button>
        </div>
    )
}