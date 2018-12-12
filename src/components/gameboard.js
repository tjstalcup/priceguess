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
            <ItemImage 
            itemName= 'Item Name'
            image='https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_55-512.png'
            />
            <ItemDescription />
            <PriceChoice />
      </div>
 
    )   
}
}