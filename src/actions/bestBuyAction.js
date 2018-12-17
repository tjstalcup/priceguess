import {API_BASE_URL} from '../config'; 

export const FETCH_ITEM_INFO_REQUEST = 'FETCH_ITEM_INFO_REQUEST';
export const fetchItemInfoRequest = () => ({
    type: FETCH_ITEM_INFO_REQUEST
})

export const FETCH_ITEM_INFO_SUCCESS = 'FETCH_ITEM_INFO_SUCCESS';
export const fetchItemInfoSuccess = actualProductHistory => ({
    type: FETCH_ITEM_INFO_SUCCESS,
    actualProductHistory
})

export const FETCH_ITEM_INFO_ERROR = 'FETCH_ITEM_INFO_ERROR';
export const fetchItemInfoError = error => ({
    type: FETCH_ITEM_INFO_ERROR,
    error
})

export const fetchItemInfo = () => dispatch => {
    const categories = [
    'Desktop & All-in-One Computer','Digital Cameras ','Health, Fitness & Beauty','Headphones','Home Audio','Home Automation & Security']
     
     const categoryName = categories[Math.floor(Math.random()*categories.length)]; 
     
     const page= Math.floor(Math.random()*5)
     

    dispatch(fetchItemInfoRequest());
    //Split up API call properly in fetch
    fetch(`${API_BASE_URL}/(categoryPath.name=${categoryName}*)?apiKey=A3fUqjrVIUbZWiJcDlQcel89&sort=name.asc&show=name,image,regularPrice,url&pageSize=5&page=${page}&format=json`).then(res => {
        if(!res.ok) {
            return Promise.reject(res.statusText);
        }
         return res.json();
    }).then(actualPriceHistory => {dispatch(fetchItemInfoSuccess(actualPriceHistory)).catch(fetchItemInfoError(error));}
    )
}