import { 
    PROFILE_REQUEST,
    PROFILE_SUCCESS,
    PROFILE_FALIURE
} from "./ProfileType"
import axios from "axios"

export const profileRequest = () =>{
    return{
        type: PROFILE_REQUEST
    }
}

export const profileSuccess = (response) =>{
    return{
        type: PROFILE_SUCCESS,
        payload: response
    }
}

export const profileFaliure = (error) =>{
    return{
        type: PROFILE_FALIURE,
        payload: error
    }
}

const baseUrl = "https://www.schoolnode.crediopay.com/api/v1"


export const fetchprofile = () => {
    return(dispatch) => {
        dispatch(profileRequest())
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.data?.token?.token}`,
        };
        // let datas = JSON.parse(localStorage.getItem("auth"))
        axios.get(`${baseUrl}/auth/getOverview`, { headers: headers })
            .then( response => {
                const data = response.data
                dispatch(profileSuccess(data))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(profileFaliure(errorMsg))
            })
    }
}
