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

const mapStatetoProps = (state) => ({
    itemDescription: state.actualProductHistory[0].itemDescription
})

export default connect(mapStatetoProps)(ItemDescription); 