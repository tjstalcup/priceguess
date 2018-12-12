import React from 'react'; 
import './gameboard.css'; 
import ItemImage from './itemImage'; 
import ItemDescription from './itemDescription';
import Scoreboard from './scoreboard';
import PriceChoice from './priceChoice';


export class GamePage extends React.Component {
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