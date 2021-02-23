import React from "react";
import './color-btn.scss'

const ColorBtn = ({ bgColor, clicked, onClick, children}) => {
    return(
        <div
            onClick={() => onClick(bgColor)}
            style={{backgroundColor: bgColor}}
            className={`color-btn ${clicked ? 'hidden' : ''}`}
        >
            {children}
        </div>
    );
};

export default ColorBtn;