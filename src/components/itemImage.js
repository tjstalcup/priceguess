import React from "react";

import "./itemImage.css";

export default function ItemImage(props) {
  return (
    <div className="itemImage">
      <h4>{props.itemName}</h4>
      <img className="image" src={props.image} alt="itemImage" />
    </div>
  );
}
ItemImage.defaultprops= {
  itemName: "Item Name",
  image:"https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_55-512.png"
};
