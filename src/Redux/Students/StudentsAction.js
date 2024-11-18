import { STUDENTS_REQUEST, STUDENTS_FALIURE, STUDENTS_SUCCESS, STUDENTS_SEARCH_REQUEST, STUDENTS_SEARCH_SUCCESS, STUDENTS_SEARCH_FALIURE, SCHOOL_DETAILS_REQUEST, SCHOOL_DETAILS_SUCCESS, SCHOOL_DETAILS_FALIURE } from "./StudentsType"
import axios from "axios"

export const studentsRequest = () =>{
    return{
        type: STUDENTS_REQUEST
    }
}

export const studentsSuccess = (response) =>{
    return{
        type: STUDENTS_SUCCESS,
        payload: response
    }
}

export const studentsFaliure = (error) =>{
    return{
        type: STUDENTS_FALIURE,
        payload: error
    }
}

export const studentsearchRequest = () =>{
    return{
        type: STUDENTS_SEARCH_REQUEST
    }
}

export const studentsearchSuccess = (response) =>{
    return{
        type: STUDENTS_SEARCH_SUCCESS,
        payload: response
    }
}

export const studentsearchFaliure = (error) =>{
    return{
        type: STUDENTS_SEARCH_FALIURE,
        payload: error
    }
}
export const schoolDetailsRequest = () =>{
    return{
        type: SCHOOL_DETAILS_REQUEST
    }
}

export const schoolDetailsSuccess = (response) =>{
    return{
        type: SCHOOL_DETAILS_SUCCESS,
        payload: response
    }
}

export const schoolDetailsFaliure = (error) =>{
    return{
        type: SCHOOL_DETAILS_FALIURE,
        payload: error
    }
}
const baseUrl = "https://www.schoolnode.crediopay.com/api/v1"


export const fetchstudents = (pageNumber, select) => {
    return(dispatch) => {
        dispatch(studentsRequest())
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.data?.token?.token}`,
        };
        // let datas = JSON.parse(localStorage.getItem("auth"))
        axios.get(`${baseUrl}/students/all?page=${pageNumber}&&pageSize=${select}`, { headers: headers })
            .then( response => {
                const data = response.data
                dispatch(studentsSuccess(data))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(studentsFaliure(errorMsg))
            })
    }
}


export const fetchsearchstudents = (pageNumber, select, query) => {
    return(dispatch) => {
        dispatch(studentsRequest())
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.data?.token?.token}`,
        };
        // let datas = JSON.parse(localStorage.getItem("auth"))
        axios.get(`${baseUrl}/students/search?page=${pageNumber}&&pageSize=${select}&&query=${query}`, { headers: headers })
            .then( response => {
                const data = response.data
                dispatch(studentsSuccess(data))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(studentsFaliure(errorMsg))
            })
    }
}

export const fetchSchoolDetails = () => {
    return(dispatch) => {
        dispatch(schoolDetailsRequest())
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.data?.token?.token}`,
        };
        // let datas = JSON.parse(localStorage.getItem("auth"))
        axios.get(`${baseUrl}/parent/get/school/66ba3984a4037793a8c9b4b5`, { headers: headers })
            .then( response => {
                const data = response.data
                dispatch(schoolDetailsSuccess(data))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(schoolDetailsFaliure(errorMsg))
            })
    }
}
