import { PAYMENT_FALIURE, PAYMENT_REQUEST, PAYMENT_SUCCESS } from "./PaymentType"

const initialState ={
    loading: false,
    data: [],
    error: ''
}

export const paymentReducer = (state = initialState, action) => {
    switch(action.type){
        case PAYMENT_REQUEST:
            return{
                ... state,
                loading: true
            }
        case PAYMENT_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case PAYMENT_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}
