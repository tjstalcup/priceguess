import * as actions from '../actions/bestBuyAction'

const initialState={
    loading: false, 
    error: null, 
    actualProductHistory: []
}; 


export const bestBuyCallReducer = (state=initialState, action) => {
    if(action.type === actions.FETCH_ITEM_INFO_REQUEST) {
        return Object.assign({}, state, {
            loading: true, 
            error: null
        })
    }
    else if(action.type === actions.FETCH_ITEM_INFO_SUCCESS){
        return Object.assign({}, state, {
            actualProductHistory:  action.actualProductHistory,
            loading: false,
            error: null
        })
    }
    else if(action.type === actions.FETCH_ITEM_INFO_ERROR){
        
        return Object.assign({}, state, {
            error: action.error, 
            loading: false 
    })
    
        return state;
    }
}