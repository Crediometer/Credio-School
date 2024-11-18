import { STUDENTS_REQUEST, STUDENTS_FALIURE, STUDENTS_SUCCESS, STUDENTS_SEARCH_REQUEST, STUDENTS_SEARCH_SUCCESS, STUDENTS_SEARCH_FALIURE, SCHOOL_DETAILS_REQUEST, SCHOOL_DETAILS_SUCCESS, SCHOOL_DETAILS_FALIURE } from "./StudentsType"

const initialState ={
    loading: false,
    data: [],
    error: ''
}

export const studentsReducer = (state = initialState, action) => {
    switch(action.type){
        case STUDENTS_REQUEST:
            return{
                ... state,
                loading: true
            }
        case STUDENTS_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case STUDENTS_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}

export const studentsearchReducer = (state = initialState, action) => {
    switch(action.type){
        case STUDENTS_SEARCH_REQUEST:
            return{
                ... state,
                loading: true
            }
        case STUDENTS_SEARCH_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case STUDENTS_SEARCH_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}

export const schooldetailsReducer = (state = initialState, action) => {
    switch(action.type){
        case SCHOOL_DETAILS_REQUEST:
            return{
                ... state,
                loading: true
            }
        case SCHOOL_DETAILS_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case SCHOOL_DETAILS_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}