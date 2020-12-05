export const changeSearchText = (e) => {
    return{
        type:'CHANGE_SEARCH',
        payload: e
    }
}
export const getSearchText = () => {
    return{
        type:'GET_SEARCH'
    }
}
export const deleteSearchText = () => {
    return{
        type:'INCREMENT'
    }
}