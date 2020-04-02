import {ALERT_ELEMENT_ON, ALERT_ELEMENT_OFF} from '../types'

export function alertAction(alert){
    return (dispatch) => {
        dispatch(alertError(alert))
    }
}

const alertError = alert =>({
    type: ALERT_ELEMENT_ON,
    payload: alert
})

export function alertActionNull (){
    return (dispatch) => {
        dispatch(alertErrorNull())
    }
}

const alertErrorNull = () =>({
    type: ALERT_ELEMENT_OFF,
    payload: null
})