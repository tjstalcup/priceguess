import React from 'react'; 
import {connect} from 'react-redux'; 
import './gameboard.css'; 
import ItemImage from './itemImage'; 
import ItemDescription from './itemDescription';
import Scoreboard from './scoreboard';
import PriceChoice from './priceChoice';
import {fetchItemInfo} from '../actions/bestBuyAction';
import { fetchItemInfoRequest, fetchItemInfoSuccess } from '../actions/bestBuyAction';


export class GamePage extends React.Component {
    constructor(props){
        super(props)
    }
    // Make constructor for the dispatch
     componentDidMount(){
         this.props.dispatch(fetchItemInfo())
     }
    
    render() {
    return(
        <div className="GamePage">
            <h1>GameBoard JS</h1>
            <Scoreboard 
            timer={10}
            />
{/*             <ItemImage />
 */}            <ItemDescription />
           {/*  <PriceChoice /> */} 
      </div>
 
    )   
}
}


//Finish setting up dispatch for the class

const mapStatetoProps = (state) => 
{ console.log(state)
    return state;
    // ({
    //     itemDescription: state.bestBuyCall.actualProductHistory[state.bestBuyCall.actualProductHistory.length - 1].itemDescription
    // })
    
}

export default connect(mapStatetoProps)(GamePage); 