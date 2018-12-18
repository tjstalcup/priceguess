import React from "react";

import "./itemImage.css";

import {connect} from 'react-redux';

 function ItemImage(props) {
  return (
    <div className="itemImage">
      <h4>{props.itemName}</h4>
      <img className="image" src={props.productPicture} alt="itemImage" />
    </div>
  );
}
ItemImage.defaultprops= {
  itemName: "Item Name",
  productPicture:"https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_55-512.png"
};


//how to map the array down below with different numbers
//Maybe make a for loop that handle the index of the actual product History array 
//As 
// const indexNum = state.currentProduct.length - 1; 

const mapStatetoProps = (state) => ({
  itemName: state.bestBuyCall.currentProduct[0].products[0].name, 
  productPicture: state.bestBuyCall.currentProduct[0].products[0].picture

})

export default connect(mapStatetoProps)(ItemImage);