const searchReducer = (state = '',action) => {
    switch(action.type){
        case 'GET_SEARCH':
            return state
        case 'CHANGE_SEARCH':
            return state = action.payload
        default:
            return state           
    }
}

export default searchReducer;