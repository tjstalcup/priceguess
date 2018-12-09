import React from 'react'; 

import './scoreboard.css' ;

export default function Scoreboard(props){
    return (
        <div className="scoreboard">
            <h4 className="timer">Timer: {props.timer} seconds</h4>
            <h4 className="score">Score: {props.score} points</h4>
        </div>
    )
}