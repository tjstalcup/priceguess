import React from 'react'; 
import {connect} from 'react-redux'; 
import './gameboard.css'; 
import ItemImage from './itemImage'; 
import ItemDescription from './itemDescription';
import Scoreboard from './scoreboard';
import PriceChoice from './priceChoice';
import {fetchItemInfo} from '../actions/index';
import { fetchItemInfoRequest } from '../actions/bestBuyAction';


export class GamePage extends React.Component {
    //Make constructor for the dispatch
     componentDidMount(){
     }
    
    render() {
    return(
        <div className="GamePage">
            <Scoreboard 
            timer={10}
            />
            <ItemImage />
            <ItemDescription />
            <PriceChoice />
      </div>
 
    )   
}
}


//Finish setting up dispatch for the class

const mapStatetoProps = (state) => ({
    itemDescription: state.actualProductHistory[state.actualProductHistory.length - 1].itemDescription
})

export default connect(mapStatetoProps)(GamePage); 