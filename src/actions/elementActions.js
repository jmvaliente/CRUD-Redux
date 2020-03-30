import {ADD_ELEMENT, ADD_ELEMENT_TRUE, ADD_ELEMENT_FALSE} from '../types'
import axiosClient from '../config/axios'

//create new element
export function createElementAction(element){
    return (dispatch) => {
        dispatch(addElement())

        try {
            axiosClient.post('/list', element) // add element 
            dispatch(addElementTrue(element)) // update state
        } catch (error) {
            dispatch(addElementFalse(true))
        }
    }
}

const addElement = () =>({
    type: ADD_ELEMENT,
    payload: true
})

//Add Element True

const addElementTrue = element =>({
    type: ADD_ELEMENT_TRUE,
    payload: element
})

const addElementFalse = () =>({
    type: ADD_ELEMENT_FALSE,
    payload: true
})