import {combineReducers} from 'redux'
import bathroomsReducer from './bathroomsReducer';
import bedroomsReducer from './bedroomsReducer';
import cityReducer from './cityReducer';
import propertiesReducer from './propertiesReducer';
import searchReducer from './searchTerm'
import sortReducer from './sortReducer'



const allReducers = combineReducers({
    searchReducer:searchReducer,
    cityReducer: cityReducer,
    propertiesReducer: propertiesReducer,
    bedroomsReducer: bedroomsReducer,
    bathroomsReducer: bathroomsReducer,
    sortReducer: sortReducer
})

export default allReducers;