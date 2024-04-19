import { OTP_FORGET_FAILURE, OTP_FORGET_REQUEST, OTP_FORGET_SUCCESS, OTP_USER_FAILURE, OTP_USER_REQUEST, OTP_USER_SUCCESS } from "./OtpType";

const initialState = {
    loading: false,
    data: [],
    error: "",
  };
  
  export const otpReducer = (state = initialState, action) => {
    switch (action.type) {
      case OTP_USER_REQUEST:
        return {
          loading: true,
          requestData: {},
          data: [],
          error: "",
        };
    
      case OTP_USER_SUCCESS:
        return {
          loading: false,
          data: action.payload,
          error: "",
        };
      case OTP_USER_FAILURE:
        return {
          loading: false,
          requestData: {},
          data: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };


  export const forgetotpReducer = (state = initialState, action) => {
    switch (action.type) {
      case OTP_FORGET_REQUEST:
        return {
          loading: true,
          requestData: {},
          data: [],
          error: "",
        };
    
      case OTP_FORGET_SUCCESS:
        return {
          loading: false,
          data: action.payload,
          error: "",
        };
      case OTP_FORGET_FAILURE:
        return {
          loading: false,
          requestData: {},
          data: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  