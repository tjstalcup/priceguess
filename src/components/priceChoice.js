import React from 'react'; 
import {Link} from 'react-router-dom'; 
import './priceChoice.css' ;

export default function PriceChoice(props){
    //need to map over props for each button
   
    return (
        <div className="scoreboard">
            <h3>What's The Price?</h3>
            <button className="priceChoice">{props.priceGuess}</button>
            <button className="priceChoice">{props.priceGuess}</button>
            <button className="priceChoice">{props.priceGuess}</button>
            <button className="priceChoice">{props.priceGuess}</button>
            <Link to='/answerpage'><button type="submit">Make Guess</button></Link>
        </div>
    )
}