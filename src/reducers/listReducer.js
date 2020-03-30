import {ADD_ELEMENT, ADD_ELEMENT_TRUE, ADD_ELEMENT_FALSE,
        LIST_ELEMENTS, LIST_ELEMENTS_TRUE, LIST_ELEMENTS_FALSE} from '../types'

const initialState = {
    list: [],
    error: null,
    loading: false
}

export default function(state = initialState, action) {
    switch (action.type) {

        case LIST_ELEMENTS:
        case ADD_ELEMENT:
            return{
                ...state,
                loading: action.payload
            }
        case ADD_ELEMENT_TRUE:
            return{
                ...state,
                loading: false,
                list: [...state.list, action.payload]
            }
        case LIST_ELEMENTS_FALSE:
        case ADD_ELEMENT_FALSE:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case LIST_ELEMENTS_TRUE:
            return{
                ...state,
                loading: false,
                list: action.payload,
                error: null
            }
    
        default:
            return state;
    }
}