import {combineReducers} from 'redux';
import {listReducer} from '../Reducers/ListTask'

const rootReducer = combineReducers({ listReducer });

export default rootReducer