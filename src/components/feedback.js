import React from 'react'; 
import './feedback.css'; 
import {Link} from 'react-router-dom'; 
import FinalScore from './finalscore';


export default function Feedback(props){
    return(
        <div className='Feedback'>
            <h2>HOW DID YOU GUESS?</h2>
            <FinalScore 
                answeredCorrect={5}
                answeredIncorrect={5}
                finalScore={500}
            />
            <Link to='/'><button type="submit">PLAY AGAIN !!!</button></Link>
            <Link to='/featureditems'><button type="submit">Review Items Shown</button></Link>

        </div>
    ) 
}