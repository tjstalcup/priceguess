import {createStore, applyMiddleware} from 'redux'; 
import thunk from 'redux-thunk';
import {priceGuessReducer} from '../reducer'; 

export default createStore(priceGuessReducer, applyMiddleware(thunk)); 


