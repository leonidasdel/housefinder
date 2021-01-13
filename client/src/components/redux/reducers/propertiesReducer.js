const propertiesReducer = (state = [],action) => {
    switch(action.type){
        case 'GET_PROPERTIES':
            return state
        case 'CHANGE_PROPERTIES':
            console.log(action)
            return state = action.payload
        default:
            return state           
    }
}

export default propertiesReducer;