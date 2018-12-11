import React from 'react'; 

import './scoreboard.css' ;
import {connect} from 'react-redux'; 

 function Scoreboard(props){
    return (
        <div className="scoreboard">
            <h4 className="timer">Timer: {props.timer} seconds</h4>
            <h4 className="score">Score: {props.score} points</h4>
            <h4 className="question">Question: {props.questions} /10</h4>
        </div>
    )
}  

const mapStatetoProps = state => ({
    score: state.score,
    question: state.question
})

export default connect(mapStatetoProps)(Scoreboard)



