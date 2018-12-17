import * as actions from '../actions/index'; 
import { join } from 'path';

const initialState= {   
    score: 100, 
    questions: 1,
    loading: false, 
    error: null, 
    correctGuessCount: 0, 
    incorrectGuessCount: 0, 
    currentPriceOptions: ['4.00', '5.00', '3.00', '2.00'], 
    playerGuesses:[{questionNumber:1, actualPrice: '1.11', guessedPrice: '2.22', correct: false}],
    actualProductHistory: [{itemName: '', productPicture: 'url', itemDescrtiption: '', itemPrice: ''}]
}; 


export const priceGuessReducer = (state=initialState, action) => {
     
    if(action.type === actions.ADD_SCORE){   
        /* Need to update points to the score if user got the correct answer and then update the store*/
        
        return Object.assign({}, state, {
            score: state.score + action.score
        })
    }
    else if(action.type === actions.CHANGE_QUESTION)
        /* Need to add points to the score if user got the correct answer and then update the store*/

        return Object.assign({}, state, {
            questions: state.questions + 1
        })
    
    {
        
        return Object.assign({},state=initialState, {
            question: action.question
        })
    }

    // else if(action.type === actions.FETCH_ITEM_INFO_SUCCESS)
    // /* Need to add points to the score if user got the correct answer and then update the store*/

    // return Object.assign({}, state, {
    //     actualProductHistory: action.actualProductHistory
    // })



    //set state when item is loading on the page for fetch
    return state; 
}
    

//Ask Alex do I need to create another key value pair for products viewed 
//or just use actual Product History

// const defaultState = {
//     score: 0,
//     question: 1,
//     currentPriceOptions: [],
//     playerGuesses: [{questionNumber: 1, actualPrice: '1.11', guessedPrice: '2.22', correct: false, }],
//     actualProductHistory: [{itemName:'',productPicture:'url',itemDescription:''}],
// }