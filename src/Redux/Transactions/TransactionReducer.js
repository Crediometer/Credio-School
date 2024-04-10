import { TRANSACTION_REQUEST, TRANSACTION_FALIURE, TRANSACTION_SUCCESS, TRANSACTION_STUDENT_REQUEST, TRANSACTION_STUDENT_SUCCESS, TRANSACTION_STUDENT_FALIURE } from "./TransactionType"

const initialState ={
    loading: false,
    data: [],
    error: ''
}

export const transactionReducer = (state = initialState, action) => {
    switch(action.type){
        case TRANSACTION_REQUEST:
            return{
                ... state,
                loading: true
            }
        case TRANSACTION_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case TRANSACTION_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}

export const transactionStudentReducer = (state = initialState, action) => {
    switch(action.type){
        case TRANSACTION_STUDENT_REQUEST:
            return{
                ... state,
                loading: true
            }
        case TRANSACTION_STUDENT_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case TRANSACTION_STUDENT_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}
