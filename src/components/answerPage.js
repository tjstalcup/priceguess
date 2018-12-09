import React from 'react'; 
import './answerPage.css'; 
import {Link} from 'react-router-dom'; 
import ItemImage from './itemImage';



export class AnswerPage extends React.Component{
    render() {
    return(
        <div className="answerSection">
            <ItemImage 
                itemName= 'Item Name'
                image='https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_55-512.png'
            />
            <p>Correct Price was:
                 <span className='correctAnswer'>
                 </span>
            </p>
           <Link to='/gamepage'><button>Next Guess</button></Link>
        </div>
    )
    }
}

export default AnswerPage; 
