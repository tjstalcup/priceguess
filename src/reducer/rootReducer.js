import {combineReducers} from 'redux'; 
import {priceGuessReducer as priceGuess} from './priceGuessReducer';
import {bestBuyCallReducer as bestBuyCall} from './bestbuyreducer'; 

 export const rootReducer = combineReducers(priceGuess, bestBuyCall); 
