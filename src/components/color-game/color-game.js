import React, {useEffect, useState} from 'react';
import ColorBtn from '../color-btn/color-btn';
import "./color-game.scss";

const getRandomInt = (x) => {
    return Math.floor(Math.random() * Math.floor(x));
};

const getRandomColor = () => {
    const n1 = getRandomInt(256);
    const n2 = getRandomInt(256);
    const n3 = getRandomInt(256);
    return `rgb(${n1}, ${n2}, ${n3})`;
};

const getRandomAnswer = (colors) => {
    const index = getRandomInt(6);
    return colors[index];
};


// COMPONENT COLOR GAME
const ColorGame = () => {
    const colorsAmount = 6;
    
    const [colors, setColors] = useState([]);
    const [answer, setAnswer] = useState();
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [newGame, setNewGame] = useState(true);

    useEffect(()=>{
        if(newGame === true){
            const newColors = new Array(colorsAmount).fill().map(()=>getRandomColor());
            setColors(newColors)
        }
    }, []);

    useEffect(()=>{
        setNewGame(false);
        setAnswer(getRandomAnswer(colors));
    }, [colors]);


    const updateHighScore = () => {
        const newHighScore = score > highScore ? score : highScore;
        setHighScore(newHighScore);
    }

    const checkAnswer = (el) => {
        if(answer === el.style.backgroundColor){
            setScore(score + 1);
            updateHighScore();
            // changeBoard();
            // msgElement.innerHTML = getHappy();
        } else {
            setScore(0);
            el.style.opacity = 0;
            // msgElement.innerHTML = getSad();
        }
    };


    return(
    <div className="color-game">
        <div className="color-game__container">
            <p className="color-game__question">
                What color is... <span id="color">{answer}</span>
            </p>
        </div>
        <div className="color-game__container color-game__scores">
            <p  className="color-game_score">Score: <span id="score">0</span></p>
            <p  className="color-game__highscore">High Score: <span id="highscore">0</span></p>
        </div>
        <div className="color-game__container">
            <p id="game-msg" className="color-game__msg"></p>
        </div>
        <div className="color-game__container">
            <ColorBtn bgColor={colors[0]}>Color 1</ColorBtn>
            <ColorBtn bgColor={colors[1]}>Color 2</ColorBtn>
            <ColorBtn bgColor={colors[2]}>Color 3</ColorBtn>
        </div>
        <div className="color-game__container">
            <ColorBtn bgColor={colors[3]}>Color 4</ColorBtn>
            <ColorBtn bgColor={colors[4]}>Color 5</ColorBtn>
            <ColorBtn bgColor={colors[5]}>Color 6</ColorBtn>
        </div>
    </div>
    );
}

export default ColorGame;
