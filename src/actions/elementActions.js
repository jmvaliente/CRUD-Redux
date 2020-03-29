import {ADD_ELEMENT, ADD_ELEMENT_TRUE, ADD_ELEMENT_FALSE} from '../types'

//create new element
export function createElementAction(element){
    return () => {
        console.log(element)
    }
}