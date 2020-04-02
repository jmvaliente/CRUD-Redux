import {ALERT_ELEMENT_ON, ALERT_ELEMENT_OFF} from '../types'

const initialState = {
    alert: null,
    msg: []
}

export default function (state = initialState, action){
    switch (action.type) {
        case ALERT_ELEMENT_ON:
            return{
                ...state,
                alert: true,
                msg: action.payload
            }
        case ALERT_ELEMENT_OFF:
            return{
                ...state,
                alert: action.payload
            } 
        
    
        default:
            return state
    }
}