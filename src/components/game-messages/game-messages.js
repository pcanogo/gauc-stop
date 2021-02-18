import React from "react";
import "./game-messages.scss";

const sadMgs = ["try again!", "wrong!", "maybe next time!", "try another one!", "you are a failure!"];
const happyMsgs = ["not bad!", "pro gamer!", "big chungus energy", "stonks!", "pickle riiiick!"];


const GameMessages = () => {
    return(
        <div className="color-game__container">
            <p id="game-msg" className="color-game__msg"></p>
        </div>
    );
}

export default GameMessages;