import React from 'react'; 
import './finalscore.css'; 

export default function FinalScore(props){
    return(
        <div className='finalScore'>
            <p>You Guessed <span id="rightScore">{props.answeredCorrect}</span> right.</p>
            <p>You Guessed <span id="wrongScore">{props.answeredIncorrect}</span> wrong.</p>
            <p>Score: <span id="score">{props.finalScore}</span></p>
        </div>
    )
}
