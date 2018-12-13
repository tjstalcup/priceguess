const initialState= {   
    score: 100, 
    questions: 1,
    correctGuessCount: 0, 
    incorrectGuessCount: 0, 
    currentPriceOptions: ['4.00', '5.00', '3.00', '2.00'], 
    playerGuesses:[{questionNumber:1, actualPrice: '1.11', guessedPrice: '2.22', correct: false}],
    actualProductHistory: [
        {itemName: 'Alienware', productPicture: 'https://img.bbystatic.com/BestBuy_US/images/products/6041/6041204_sa.jpg', itemDescription: 'Windows 10 Home 64-bitNVIDIA GeForce GTX 1060 6GB dedicated graphicsTechnical details: 7th Gen Intel&#174; Core&#8482; i7-7700 processor; 16GB memory; 1TB hard drive + Intel Optane MemorySpecial features: built-in wireless networking; Bluetooth; keyboard'
, itemPrice: '1399.99', productURL: ''}]
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