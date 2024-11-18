import axios from "axios"
import { ADD_GRADE_FALIURE, ADD_GRADE_REQUEST, ADD_GRADE_SUCCESS, DELETE_GRADE_FALIURE, DELETE_GRADE_REQUEST, DELETE_GRADE_SUCCESS, GRADE_FALIURE, GRADE_REQUEST, GRADE_SUCCESS, UPDATE_GRADE_FALIURE, UPDATE_GRADE_REQUEST, UPDATE_GRADE_SUCCESS } from "./GradeType"

export const gradeRequest = () =>{
    return{
        type: GRADE_REQUEST
    }
}

export const gradeSuccess = (response) =>{
    return{
        type: GRADE_SUCCESS,
        payload: response
    }
}

export const gradeFaliure = (error) =>{
    return{
        type: GRADE_FALIURE,
        payload: error
    }
}

export const addGradeRequest = () =>{
    return{
        type: ADD_GRADE_REQUEST
    }
}

export const addGradeSuccess = (response) =>{
    return{
        type: ADD_GRADE_SUCCESS,
        payload: response
    }
}

export const addGradeFaliure = (error) =>{
    return{
        type: ADD_GRADE_FALIURE,
        payload: error
    }
}

export const deleteGradeRequest = () =>{
    return{
        type: DELETE_GRADE_REQUEST
    }
}

export const deleteGradeSuccess = (response) =>{
    return{
        type: DELETE_GRADE_SUCCESS,
        payload: response
    }
}

export const deleteGradeFaliure = (error) =>{
    return{
        type: DELETE_GRADE_FALIURE,
        payload: error
    }
}
export const updateGradeRequest = () =>{
    return{
        type: UPDATE_GRADE_REQUEST
    }
}

export const updateGradeSuccess = (response) =>{
    return{
        type: UPDATE_GRADE_SUCCESS,
        payload: response
    }
}

export const updateGradeFaliure = (error) =>{
    return{
        type: UPDATE_GRADE_FALIURE,
        payload: error
    }
}

const baseUrl = "https://www.schoolnode.crediopay.com/api/v1/auth"

export const getGrade = () => {
    return(dispatch) => {
        dispatch(gradeRequest())
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.data?.token?.token}`,
        };
        // let datas = JSON.parse(localStorage.getItem("auth"))
        axios.get(`${baseUrl}/grades/get`, { headers: headers })
            .then( response => {
                const data = response.data
                dispatch(gradeSuccess(data))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(gradeFaliure(errorMsg))
            })
    }
}

export const addGrade = (postState, history, setErrorHandler) => {
    return async (dispatch) => {
      dispatch(addGradeRequest())
      let datas = JSON.parse(localStorage.getItem("auth"))
      try {
        const res = await axios.post(
          `${baseUrl}/grades/add`,
          postState,
          {headers: {
            Authorization: `Bearer ${datas?.token?.data?.token?.token}`,
            }}
        );
        const { data } = res;
        if (res.status === 200) {
          history()
          dispatch(addGradeSuccess(data));
        }
      } catch (error) {
        if (error.response){
          dispatch(addGradeFaliure(error?.response?.data));
        }
        setErrorHandler({ hasError: true, message: error?.response?.data?.message });
      }
    };
  };


  export const editGrade = (postState, history, setErrorHandler, id) => {
    return async (dispatch) => {
      dispatch(updateGradeRequest())
      let datas = JSON.parse(localStorage.getItem("auth"))
      try {
        const res = await axios.patch(
          `${baseUrl}/grades/update/${id}`,
          postState,
          {headers: {
            Authorization: `Bearer ${datas?.token?.data?.token?.token}`,
            }}
        );
        const { data } = res;
        if (res.status === 200) {
          history()
          dispatch(updateGradeSuccess(data));
        }
      } catch (error) {
        if (error.response){
          dispatch(updateGradeFaliure(error?.response?.data));
        }
        setErrorHandler({ hasError: true, message: error?.response?.data?.message });
      }
    };
  };
  export const deleteGrade = (id, history, setErrorHandler) => {
    return async (dispatch) => {
      dispatch(deleteGradeRequest())
      let datas = JSON.parse(localStorage.getItem("auth"))
      try {
        const res = await axios.delete(
          `${baseUrl}/grades/delete/${id}`,
          {headers: {
            Authorization: `Bearer ${datas?.token?.data?.token?.token}`,
            }}
        );
        const { data } = res;
        if (res.status === 200) {
          history()
          dispatch(deleteGradeSuccess(data));
        }
      } catch (error) {
        if (error.response){
          dispatch(deleteGradeFaliure(error?.response?.data));
        }
        setErrorHandler({ hasError: true, message: error?.response?.data?.message });
      }
    };
  };