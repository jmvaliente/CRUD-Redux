import {ADD_ELEMENT, ADD_ELEMENT_TRUE, ADD_ELEMENT_FALSE} from '../types'

const initialState = {
    list: [],
    error: null,
    loading: false
}

export default function(state = initialState, action) {
    switch (action.type) {

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
    
        default:
            return state;
    }
}