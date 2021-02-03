const propertiesReducer = (state = [],action) => {
    switch(action.type){
        case 'GET_PROPERTIES':
            return state
        case 'CHANGE_PROPERTIES':
            return state = action.payload
        default:
            return state           
    }
}

export default propertiesReducer;