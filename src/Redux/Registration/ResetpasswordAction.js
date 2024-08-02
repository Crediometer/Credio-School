import axios from "axios";
import { PASSWORD_RESET_FAILURE, PASSWORD_RESET_REQUEST, PASSWORD_RESET_SUCCESS } from "./ResetpasswordTypes";

export const passwordRequest = () => {
  return {
    type: PASSWORD_RESET_REQUEST,
  };
};
export const passwordSuccess = (register) => {
  return {
    type: PASSWORD_RESET_SUCCESS,
    payload: register,
  };
};


export const passwordFaliure = (error) => {
  return {
    type: PASSWORD_RESET_FAILURE,
    payload: error,
  };
};
const baseUrl = "https://www.schoolnode.crediopay.com/api/v1/auth/"
export const resetpasswordData = (passwordState, history, setErrorHandler) => {
    return async (dispatch) => {
        dispatch(passwordRequest())
      try {
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.data?.token?.token}`,
        };
        const res = await axios.put(
          `${baseUrl}reset-password`,
          passwordState,
          { headers: headers }
        );
        const { data } = res;
        if (res.status === 200) {
          history()
          dispatch(passwordSuccess(data));
        }
      } catch (error) {
        if (error.response) {
          dispatch(passwordFaliure(error));
        }
        setErrorHandler({ hasError: true, message: error?.response});
      }
    };
  };