import {combineReducers} from 'redux'
import listReducer from './listReducer'
import alertReducer from './alertReducer'

export default combineReducers({
    list: listReducer,
    alert: alertReducer
})