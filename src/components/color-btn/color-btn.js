import React from "react";
import './color-btn.scss'

const ColorBtn = ({bgColor, setAttemp, children}) => {

    const checkAttemp = (el) => {
        // if(isCorrect(el)){
        //     setScore(scores.score++);
        //     updateHighScore();
        //     changeBoard();
        //     msgElement.innerHTML = getHappy();
        // } else {
        //     setScore(0);
        //     el.style.opacity = 0;
        //     msgElement.innerHTML = getSad();
        // }
    };

    return (
        <div onClick={checkAttemp} style={{backgroundColor: bgColor}} className="color-btn">
            {children}
        </div>
    )
}

export default ColorBtn;