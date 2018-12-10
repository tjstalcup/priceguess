import React from 'react'; 


export default function FeaturedTable(props){
    const featuredItems = props.items.map((item, index)=> {
        return(<>
        <tr>
            <th>Item Name</th>
            <th>Price</th>
        </tr>
        <tr>
            <th>{item.itemName}</th>
            <th>{item.itemPrice}</th>
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