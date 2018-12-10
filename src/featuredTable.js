import React from 'react'; 


export default function FeaturedTable(props){
    return (
        <div className='featuredTable'>
            <table>
                    <tr>
                        <th>Item Name</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                       <td>{props.itemName}</td> 
                       <td>{props.itemPrice}</td>
                    </tr>
                    <tr>
                        <td>{props.itemName}</td> 
                        <td>{props.itemPrice}</td>
                    </tr>
                    <tr>
                        <td>{props.itemName}</td> 
                         <td>{props.itemPrice}</td>
                    </tr>
                </table>
        
        </div>
    )

}