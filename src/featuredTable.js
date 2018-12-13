import React from 'react'; 

import {connect} from 'react-redux'; 

 
function FeaturedTable(props){
    const featuredItems = props.items.map((item, index)=> {
        return(<>
        <tr>
            <th>Item Name</th>
            <th>Price</th>
        </tr>
        <tr>
            <th><a href={props.productURL}>{props.itemName}</a></th>
            <th>{props.itemPrice}</th>
        </tr>
        </>
        )
    })
   
   
    return (
        <div className='featuredTable'>
            <table>
                <tbody>
                    {featuredItems}
                </tbody>
            </table>
        </div>
    )

}


const mapStatetoProps = (state) => ({
    productURL: state.actualProductHistory[state.actualProductHistory.length - 1].productURL,
    itemName: state.actualProductHistory[state.actualProductHistory.length - 1].itemName,
    itemPrice: state.actualProductHistory[state.actualProductHistory.length - 1].itemPrice

})

export default connect(mapStatetoProps)(FeaturedTable); 