import React from 'react'; 

import './itemDescription.css';

import {connect} from 'react-redux'; 

 function ItemDescription(props) {
  return (
    <div className="itemDescription">
      <h4>Description</h4>
        <p>{props.itemDescription}</p>
    </div>
  );
}

//how to map the array down below with different numbers
const mapStatetoProps = (state) => ({
    itemDescription: state.actualProductHistory[state.actualProductHistory.length - 1].itemDescription
})

export default connect(mapStatetoProps)(ItemDescription); 