const initialState= {   
    score: 100, 
    question: 1,
    correctGuessCount: 0, 
    incorrectGuessCount: 0, 
    currentPriceOptions: ['4.00', '5.00', '3.00', '2.00'], 
    playerGuesses:[{questionNumber:1, actualPrice: '1.11', guessedPrice: '2.22', correct: false}],
    actualProductHistory: [{itemName: '', productPicture: 'url', itemDescrtiption: '', itemPrice: ''}]
}; 


export const priceGuessReducer = (state=initialState, action) => {

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