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

export const changeCityText = (e) => {
    return{
        type:'CHANGE_CITY',
        payload: e
    }
}
export const getCityText = () => {
    return{
        type:'GET_CITY'
    }
}
export const deleteCityText = () => {
    return{
        type:'INCREMENT'
    }
}

export const changePropertiesText = (e) => {
    return{
        type:'CHANGE_PROPERTIES',
        payload: e
    }
}
export const getPropertiesText = () => {
    return{
        type:'GET_PROPERTIES'
    }
}
export const deletePropertiesText = () => {
    return{
        type:'INCREMENT'
    }
}