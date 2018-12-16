import {API_BASE_URL} from '../config'; 

export const ADD_SCORE = 'ADD_SCORE'; 
export const addScore = (score) => ({
    type: ADD_SCORE, 
    score
})

export const CHANGE_QUESTION = 'CHANGE_QUESTION'; 
export const changeQuestion = () => ({
    type: CHANGE_QUESTION, 
    
})

export const CHANGE_ITEM = 'CHANGE_ITEM'; 
export const changeItem = (item) => ({
    type: CHANGE_ITEM, 
    itemName: item.itemName, 
    itemDescription: item.itemDescription
})


export const FETCH_ITEM_INFO_REQUEST = 'FETCH_ITEM_INFO_REQUEST';
export const fetchItemInfoRequest = () => ({
    type: FETCH_ITEM_INFO_REQUEST
})

export const FETCH_ITEM_INFO_SUCCESS = 'FETCH_ITEM_INFO_SUCCESS';
export const fetchItemInfoSuccess = info => ({
    type: FETCH_ITEM_INFO_SUCCESS,
    info

})

export const FETCH_ITEM_INFO_ERROR = 'FETCH_ITEM_INFO_ERROR';
export const fetchItemInforSuccess = (error) => ({
    type: FETCH_ITEM_INFO_SUCCESS,
    error

})

/**
 * Not completely sure if i have the right structure when returning the json file on line 53. Need Help.
 */
export const fetchItemInfo = () => dispatch => {
    dispatch(fetchItemInfo());
    fetch(`${API_BASE_URL}`).then(res => {
        if(!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    
    }).then(info => info.results.map(info)  
    )
}




export const PLAYERS_CHOICE='PLAYERS_CHOICE'; 
export const playersChoice = (guessPrice) => ({
    type: PLAYERS_CHOICE,     
})

// const NEW_BUTTONS='NEW_BUTTONS'; 
// export const newButtons = () => ({
//     type: 
// })