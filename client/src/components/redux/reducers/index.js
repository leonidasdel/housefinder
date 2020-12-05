import {combineReducers} from 'redux'
import searchReducer from './searchTerm'



const allReducers = combineReducers({
    searchReducer:searchReducer,
})

export default allReducers;