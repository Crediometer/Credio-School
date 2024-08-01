import { TRANSACTION_REQUEST, TRANSACTION_FALIURE, TRANSACTION_SUCCESS, TRANSACTION_STUDENT_FALIURE, TRANSACTION_STUDENT_SUCCESS, TRANSACTION_STUDENT_REQUEST } from "./TransactionType"
import axios from "axios"

export const transactionRequest = () =>{
    return{
        type: TRANSACTION_REQUEST
    }
}

export const transactionSuccess = (response) =>{
    return{
        type: TRANSACTION_SUCCESS,
        payload: response
    }
}

export const transactionFaliure = (error) =>{
    return{
        type: TRANSACTION_FALIURE,
        payload: error
    }
}

export const transactionstudentRequest = () =>{
    return{
        type: TRANSACTION_STUDENT_REQUEST
    }
}

export const transactionstudentSuccess = (response) =>{
    return{
        type: TRANSACTION_STUDENT_SUCCESS,
        payload: response
    }
}

export const transactionstudentFaliure = (error) =>{
    return{
        type: TRANSACTION_STUDENT_FALIURE,
        payload: error
    }
}


const baseUrl = "https://school-dash-node.onrender.com/api/v1"


export const fetchtransaction = (pageNumber, select) => {
    return(dispatch) => {
        dispatch(transactionRequest())
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.data?.token?.token}`,
        };
        // let datas = JSON.parse(localStorage.getItem("auth"))
        axios.get(`${baseUrl}/transactions/getAllTransaction?page=${pageNumber}&&pageSize=${select}`, { headers: headers })
            .then( response => {
                const data = response.data
                dispatch(transactionSuccess(data))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(transactionFaliure(errorMsg))
            })
    }
}

export const fetchstudenttransaction = (userId) => {
    return(dispatch) => {
        dispatch(transactionstudentRequest())
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.data?.token?.token}`,
        };
        // let datas = JSON.parse(localStorage.getItem("auth"))
        axios.get(`${baseUrl}/transactions/getTransactionByStudent?userId=${userId}`, { headers: headers })
            .then( response => {
                const data = response.data
                dispatch(transactionstudentSuccess(data))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(transactionstudentFaliure(errorMsg))
            })
    }
}
