const sortReducer = (state = [],action) => {
    switch(action.type){
        case 'GET_SORT':
            return state
        case 'CHANGE_SORT':
            console.log(action)
            return state = action.payload
        default:
            return state           
    }
}

export default sortReducer;