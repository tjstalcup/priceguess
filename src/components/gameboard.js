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
            <ItemDescription 
            description='Lorem Ipsum is simply dummy text 
                        of the printing and typesetting 
                        industry. Lorem Ipsum has been the 
                        industry'
                        />
            <PriceChoice priceGuess={['5.99', '6.99', '3.99', '4.00']} />
      </div>
 
    )   
}
}