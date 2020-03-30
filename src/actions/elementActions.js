import {ADD_ELEMENT, ADD_ELEMENT_TRUE, ADD_ELEMENT_FALSE,
        LIST_ELEMENTS, LIST_ELEMENTS_TRUE, LIST_ELEMENTS_FALSE} from '../types'
import axiosClient from '../config/axios'
import Swal from 'sweetalert2'

//create new element
export function createElementAction(element){
    return async (dispatch) => {
        dispatch(addElement())

        try {
            await axiosClient.post('/list', element) // add element 
            dispatch(addElementTrue(element)) // update state
            Swal.fire( //alert success
                'Success',
                'Element add Success',
                'success'
            )
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

//List Elements

export function listElementAction(){
    return async (dispatch) => {
        dispatch(listElement())

        try {
            const respons = await axiosClient.get('/list')
            dispatch(listSuccess(respons.data))
        } catch (error) {
            dispatch(listError())
        }
    }

}

const listElement = () =>({
    type: LIST_ELEMENTS,
    payload: true
})

const listSuccess = (elements) => ({
    type: LIST_ELEMENTS_TRUE,
    payload: elements
})

const listError = () => ({
    type: LIST_ELEMENTS_FALSE,
    payload: true
})