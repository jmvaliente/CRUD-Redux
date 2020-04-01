import {ADD_ELEMENT, ADD_ELEMENT_TRUE, ADD_ELEMENT_FALSE,
        LIST_ELEMENTS, LIST_ELEMENTS_TRUE, LIST_ELEMENTS_FALSE,
        DELETE_ELEMENT, DELETE_ELEMENT_TRUE, DELETE_ELEMENT_FALSE,
        EDIT_ELEMENT, START_EDIT_ELEMENT ,EDIT_ELEMENT_TRUE, EDIT_ELEMENT_FALSE} from '../types'
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


const addElementTrue = element =>({ //Add Element
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

// Delete Element

export function deleteElementAction(id){
    return async (dispatch) => {
        dispatch(deleteElement(id))
         try {
             await axiosClient.delete(`/list/${id}`)
             dispatch(deleteSuccess())

             Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )

         } catch (error) {
             dispatch(deleteError())
         }
    }
}

const deleteElement = (id) => ({
    type: DELETE_ELEMENT,
    payload: id
})

const deleteSuccess = () => ({
    type: DELETE_ELEMENT_TRUE
})

const deleteError = () => ({
    type: DELETE_ELEMENT_FALSE,
    payload: true
})

// Edit element

export function editElementAction(element){
    return async dispatch => {
        dispatch(editElement(element))
    }
}

const editElement = (element) =>({
    type: EDIT_ELEMENT,
    payload: element
})

//Start Edit

export function startEditElementAction(element){
    return async dispatch =>{
        dispatch(startEditElement(element))
        
        try {
            await axiosClient.put(`/list/${element.id}`, element)
            dispatch(editSuccess(element))
        } catch (error) {
            dispatch(editError())
        }
    }
} 

const startEditElement = (element) =>({
    type: START_EDIT_ELEMENT,
    payload: element
})

const editSuccess = (element) =>({
    type: EDIT_ELEMENT_TRUE,
    payload: element
})

const editError = () =>({
    type: EDIT_ELEMENT_FALSE,
    payload: true
})