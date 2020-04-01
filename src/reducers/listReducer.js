import {ADD_ELEMENT, ADD_ELEMENT_TRUE, ADD_ELEMENT_FALSE,
        LIST_ELEMENTS, LIST_ELEMENTS_TRUE, LIST_ELEMENTS_FALSE,
        DELETE_ELEMENT, DELETE_ELEMENT_TRUE, DELETE_ELEMENT_FALSE,
        EDIT_ELEMENT, START_EDIT_ELEMENT, EDIT_ELEMENT_TRUE, EDIT_ELEMENT_FALSE} from '../types'

const initialState = {
    list: [],
    error: null,
    loading: false,
    deleteElement: null,
    editElement: null
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
        case DELETE_ELEMENT_FALSE:
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
        case DELETE_ELEMENT:
            return{
                ...state,
                deleteElement: action.payload
            }
        case DELETE_ELEMENT_TRUE:
            return{
                ...state,
                list: state.list.filter(element => element.id !== state.deleteElement),
                deleteElement: null
            }
        case EDIT_ELEMENT:
            return{
                ...state,
                editElement: action.payload
            }
        case EDIT_ELEMENT_TRUE:
            return{
                ...state,
                list: state.list.map(element =>
                    element.id === action.payload.id ? element = action.payload : element),
                editElement: null
            }
    
        default:
            return state;
    }
}