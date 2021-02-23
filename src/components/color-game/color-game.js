import React, {useEffect, useState, useMemo} from 'react';
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

    const checkAnswer = (color) => {
        console.log(color)
        if(answer === color){

        } else {

        }
    };

    const colorsComponent = useMemo(() => colors.map((color, i) => (
        <ColorBtn key={color} onClick={checkAnswer} bgColor={color}>Color {i + 1}</ColorBtn>
    )), [colors]);

    return(
    <div className="color-game">
        <div className="text__container">
            <p className="color-game__question">
                What color is... <span id="color">{answer}</span>
            </p>
        </div>
        <div className="text__container color-game__scores">
            <p  className="color-game_score">Score: <span id="score">0</span></p>
            <p  className="color-game__highscore">High Score: <span id="highscore">0</span></p>
        </div>
        <div className="color-game__container">
            <p id="game-msg" className="color-game__msg"></p>
        </div>
        <div className="color-game__container">
            {colorsComponent}
        </div>
    </div>
    );
}

export default ColorGame;
