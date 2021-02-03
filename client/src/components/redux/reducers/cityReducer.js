const cityReducer = (state = '',action) => {
    switch(action.type){
        case 'GET_CITY':
            return state
        case 'CHANGE_CITY':
            return state = action.payload
        default:
            return state           
    }
}

export default cityReducer;