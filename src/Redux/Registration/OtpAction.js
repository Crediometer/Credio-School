import axios from "axios";
import { OTP_FORGET_FAILURE, OTP_FORGET_REQUEST, OTP_FORGET_SUCCESS, OTP_USER_FAILURE, OTP_USER_REQUEST, OTP_USER_SUCCESS } from "./OtpType";

export const otpRequest = () => {
  return {
    type: OTP_USER_REQUEST,
  };
};
export const otpSuccess = (otp) => {
  return {
    type: OTP_USER_SUCCESS,
    payload: otp,
  };
};


export const otpFaliure = (error) => {
  return {
    type: OTP_USER_FAILURE,
    payload: error,
  };
};

export const forgetRequest = () => {
  return {
    type: OTP_FORGET_REQUEST,
  };
};
export const forgetSuccess = (otp) => {
  return {
    type: OTP_FORGET_SUCCESS,
    payload: otp,
  };
};


export const forgetFaliure = (error) => {
  return {
    type: OTP_FORGET_FAILURE,
    payload: error,
  };
};

const baseUrl = "https://www.schoolnode.crediopay.com/api/v1/auth"

export const otpData = (otpState, history, setErrorHandler) => {
    return async (dispatch) => {
        dispatch(otpRequest())
      try {
        const res = await axios.post(
          `${baseUrl}/verify-otp`,
          otpState
        );
        const {data} = res;
        if (res.status === 200) {
          history()
          dispatch(otpSuccess(data));
        }
      } catch (error) {
        if (error.response) {
          dispatch(otpFaliure(error?.response?.data?.error));
        }
        setErrorHandler({ hasError: true, message: error?.response?.data});
      }
    };
  };


  export const forgetotpData = (otpState, history, setErrorHandler) => {
    return async (dispatch) => {
        dispatch(forgetRequest())
      try {
        const res = await axios.post(
          `${baseUrl}/verify-otp-password`,
          otpState
        );
        const {data} = res;
        if (res.status === 200) {
          history()
          dispatch(forgetSuccess(data));
        }
      } catch (error) {
        if (error.response) {
          dispatch(forgetFaliure(error?.response?.data?.error));
        }
        setErrorHandler({ hasError: true, message: error?.response?.data});
      }
    };
  };