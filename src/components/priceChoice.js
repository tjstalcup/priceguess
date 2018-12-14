import React from 'react'; 
import {Link} from 'react-router-dom'; 
import './priceChoice.css' ;
import {connect} from 'react-redux'; 
import { addScore, changeQuestion } from '../actions';

function PriceChoice(props){
    //need to map over props for each button
    let choices= props.currentPriceOptions.map((price, index) => (
    <button key={index} className='priceChoice'>{price}</button>))
    
    return (
        <div className="scoreboard">
            <h3>What's The Price?</h3>
                {choices}
            <Link to='/answerpage'><button type="submit">Make Guess</button></Link>
            <button onClick={()=> props.dispatch(changeQuestion())}>Dispatch</button>
        </div>
    )
}

const mapStatetoProps = state => ({
    currentPriceOptions: state.currentPriceOptions
})

export default connect(mapStatetoProps)(PriceChoice)