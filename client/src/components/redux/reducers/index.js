import {combineReducers} from 'redux'
import cityReducer from './cityReducer';
import propertiesReducer from './propertiesReducer';
import searchReducer from './searchTerm'



const allReducers = combineReducers({
    searchReducer:searchReducer,
    cityReducer: cityReducer,
    propertiesReducer: propertiesReducer
})

export default allReducers;