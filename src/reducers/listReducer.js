import {ADD_ELEMENT, ADD_ELEMENT_TRUE, ADD_ELEMENT_FALSE} from '../types'

const initialState = {
    list: [],
    error: null,
    loading: false
}

export default function(state = initialState, action) {
    switch (action.type) {
    
        default:
            return state;
    }
}