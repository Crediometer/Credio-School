import { SETTING_REQUEST, SETTING_SUCCESS, SETTING_FALIURE, PROFILE_DATA_REQUEST, PROFILE_DATA_SUCCESS, PROFILE_DATA_FALIURE, UPLOAD_IMAGE_FALIURE, UPLOAD_IMAGE_SUCCESS, UPLOAD_IMAGE_REQUEST, SMS_DATA_FALIURE, SMS_DATA_SUCCESS, SMS_DATA_REQUEST } from "./SettingsType"

const initialState ={
    loading: false,
    data: [],
    error: ''
}

export const settingReducer = (state = initialState, action) => {
    switch(action.type){
        case SETTING_REQUEST:
            return{
                ... state,
                loading: true
            }
        case SETTING_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case SETTING_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}

export const profiledataReducer = (state = initialState, action) => {
    switch(action.type){
        case PROFILE_DATA_REQUEST:
            return{
                ... state,
                loading: true
            }
        case PROFILE_DATA_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case PROFILE_DATA_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}

export const smsdataReducer = (state = initialState, action) => {
    switch(action.type){
        case SMS_DATA_REQUEST:
            return{
                ... state,
                loading: true
            }
        case SMS_DATA_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case SMS_DATA_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}

export const uploadimageReducer = (state = initialState, action) => {
    switch(action.type){
        case UPLOAD_IMAGE_REQUEST:
            return{
                ... state,
                loading: true
            }
        case UPLOAD_IMAGE_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case UPLOAD_IMAGE_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}