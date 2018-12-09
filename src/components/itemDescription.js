import React from 'react'; 

import './itemDescription.css';

export default function ItemDescription(props) {
  return (
    <div className="itemDescription">
      <h4>Description</h4>
        <p>{props.description}</p>
    </div>
  );
}