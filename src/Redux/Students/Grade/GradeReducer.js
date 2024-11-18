import { 
    ADD_GRADE_FALIURE, 
    ADD_GRADE_REQUEST, 
    ADD_GRADE_SUCCESS, 
    DELETE_GRADE_FALIURE, 
    DELETE_GRADE_REQUEST, 
    DELETE_GRADE_SUCCESS, 
    GRADE_FALIURE, 
    GRADE_REQUEST, 
    GRADE_SUCCESS, 
    UPDATE_GRADE_FALIURE, 
    UPDATE_GRADE_REQUEST, 
    UPDATE_GRADE_SUCCESS 
} from "./GradeType"

const initialState ={
    loading: false,
    data: [],
    error: ''
}

export const gradeReducer = (state = initialState, action) => {
    switch(action.type){
        case GRADE_REQUEST:
            return{
                ... state,
                loading: true
            }
        case GRADE_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case GRADE_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}

export const addGradeReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_GRADE_REQUEST:
            return{
                ... state,
                loading: true
            }
        case ADD_GRADE_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case ADD_GRADE_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}

export const updateGradeReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_GRADE_REQUEST:
            return{
                ... state,
                loading: true
            }
        case UPDATE_GRADE_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case UPDATE_GRADE_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}

export const deleteGradeReducer = (state = initialState, action) => {
    switch(action.type){
        case DELETE_GRADE_REQUEST:
            return{
                ... state,
                loading: true
            }
        case DELETE_GRADE_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case DELETE_GRADE_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}

