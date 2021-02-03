const bedroomsReducer = (state = [],action) => {
    switch(action.type){
        case 'GET_BEDROOMS':
            return state
        case 'CHANGE_BEDROOMS':
            return state = action.payload
        default:
            return state           
    }
}

export default bedroomsReducer;