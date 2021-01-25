const bathroomsReducer = (state = [],action) => {
    switch(action.type){
        case 'GET_BATHROOMS':
            return state
        case 'CHANGE_BATHROOMS':
            console.log(action)
            return state = action.payload
        default:
            return state           
    }
}

export default bathroomsReducer;