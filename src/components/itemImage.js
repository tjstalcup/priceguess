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
const mapStatetoProps = (state) => ({
  itemName: state.actualProductHistory[0].itemName, 
  productPicture: state.actualProductHistory[0].productPicture

})

export default connect(mapStatetoProps)(ItemImage);