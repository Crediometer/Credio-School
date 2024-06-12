import {SETTING_REQUEST, SETTING_FALIURE, SETTING_SUCCESS, PROFILE_DATA_FALIURE, PROFILE_DATA_SUCCESS, PROFILE_DATA_REQUEST, SMS_DATA_FALIURE, SMS_DATA_SUCCESS, SMS_DATA_REQUEST, UPLOAD_IMAGE_FALIURE, UPLOAD_IMAGE_SUCCESS, UPLOAD_IMAGE_REQUEST} from './SettingsType'
import axios from "axios"

export const settingRequest = () =>{
    return{
        type: SETTING_REQUEST
    }
}

export const settingSuccess = (response) =>{
    return{
        type: SETTING_SUCCESS,
        payload: response
    }
}

export const settingFaliure = (error) =>{
    return{
        type: SETTING_FALIURE,
        payload: error
    }
}


export const profiledataRequest = () =>{
    return{
        type: PROFILE_DATA_REQUEST
    }
}

export const profiledataSuccess = (response) =>{
    return{
        type: PROFILE_DATA_SUCCESS,
        payload: response
    }
}

export const profiledataFaliure = (error) =>{
    return{
        type: PROFILE_DATA_FALIURE,
        payload: error
    }
}

export const smsdataRequest = () =>{
    return{
        type: SMS_DATA_REQUEST
    }
}

export const smsdataSuccess = (response) =>{
    return{
        type: SMS_DATA_SUCCESS,
        payload: response
    }
}

export const smsdataFaliure = (error) =>{
    return{
        type: SMS_DATA_FALIURE,
        payload: error
    }
}

export const uploadimageRequest = () =>{
    return{
        type: UPLOAD_IMAGE_REQUEST
    }
}

export const uploadimageSuccess = (response) =>{
    return{
        type: UPLOAD_IMAGE_SUCCESS,
        payload: response
    }
}

export const uploadimageFaliure = (error) =>{
    return{
        type: UPLOAD_IMAGE_FALIURE,
        payload: error
    }
}

const baseUrl = "https://crediopay-5894689bc7ed.herokuapp.com/api/v1/school/auth"


export const putsetting = (setting, history, setErrorHandler) => {
    return(dispatch) => {
        dispatch(settingRequest())
        let datas = JSON.parse(localStorage.getItem("auth"))
        axios.put(`${baseUrl}/change-notification-settings`,setting, {headers: {
            Authorization: `Bearer ${datas?.token?.data?.token?.token}`,
        }})
            .then( response => {
                const data = response.data
                dispatch(settingSuccess(data))
                history()
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(settingFaliure(errorMsg))
                setErrorHandler({ hasError: true, message: error?.response?.data});
            })
    }
}


export const profiledatasetting = (setting, history, setErrorHandler) => {
    return(dispatch) => {
        dispatch(profiledataRequest())
        let datas = JSON.parse(localStorage.getItem("auth"))
        axios.put(`${baseUrl}/change-profile-data`,setting, {headers: {
            Authorization: `Bearer ${datas?.token?.data?.token?.token}`,
        }})
            .then( response => {
                const data = response.data
                dispatch(profiledataSuccess(data))
                history()
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(profiledataFaliure(errorMsg))
                setErrorHandler({ hasError: true, message: error?.response?.data});
            })
    }
}

export const smsdatasetting = (setting, history, setErrorHandler) => {
    return(dispatch) => {
        dispatch(smsdataRequest())
        let datas = JSON.parse(localStorage.getItem("auth"))
        axios.put(`${baseUrl}/change-sms-data`,setting, {headers: {
            Authorization: `Bearer ${datas?.token?.data?.token?.token}`,
        }})
            .then( response => {
                const data = response.data
                dispatch(smsdataSuccess(data))
                history()
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(smsdataFaliure(errorMsg))
                setErrorHandler({ hasError: true, message: error?.response?.data});
            })
    }
}

export const uplodimagesetting = (setting, history, setErrorHandler) => {
    return(dispatch) => {
        dispatch(uploadimageRequest())
        let datas = JSON.parse(localStorage.getItem("auth"))
        axios.post(`${baseUrl}/uploadImage`,setting, {headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${datas?.token?.data?.token?.token}`,
        }})
            .then( response => {
                const data = response.data
                dispatch(uploadimageSuccess(data))
                history()
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(uploadimageFaliure(errorMsg))
                setErrorHandler({ hasError: true, message: error?.response?.data});
            })
    }
}