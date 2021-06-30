import React from 'react';

const Button = ({ onStart, bg, text }) => {
    return ( 
        <div>
        <button onClick={() => onStart()} className = "start" style = {{ backgroundColor: bg }}> 
            { text } 
        </button> 
        </div >
    )
}

export default Button;