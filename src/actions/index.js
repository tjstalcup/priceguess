const ADD_SCORE = 'ADD_SCORE'; 
export const addScore = (score) => ({
    type: ADD_SCORE, 
    score
})

const CHANGE_QUESTION = 'CHANGE_QUESTION'; 
export const changeQuestion = (question) => ({
    type: CHANGE_QUESTION, 
    question
})

const CHANGE_ITEM = 'CHANGE_ITEM'; 
export const changeItem = (item) => ({
    type: CHANGE_ITEM, 
    itemName, 
    itemDescription
})

const PLAYERS_CHOICE='PLAYERS_CHOICE'; 
export const playersChoice = (guessPrice) => ({
    type: PLAYERS_CHOICE,     
})

// const NEW_BUTTONS='NEW_BUTTONS'; 
// export const newButtons = () => ({
//     type: 
// })