import {
  DEPOSIT_FALIURE,
  DEPOSIT_REQUEST,
  DEPOSIT_SUCCESS,
  KEY_FALIURE,
  KEY_REQUEST,
  KEY_SUCCESS,
} from "./DepositType";
import axios from "axios";
export const depositRequest = () => {
  return {
    type: DEPOSIT_REQUEST,
  };
};
export const depositSuccess = (deposit) => {
  return {
    type: DEPOSIT_SUCCESS,
    payload: deposit,
  };
};


export const depositFaliure = (error) => {
  return {
    type: DEPOSIT_FALIURE,
    payload: error,
  };
};


export const keyRequest = () => {
  return {
    type: KEY_REQUEST,
  };
};
export const keySuccess = (deposit) => {
  return {
    type: KEY_SUCCESS,
    payload: deposit,
  };
};


export const keyFaliure = (error) => {
  return {
    type: KEY_FALIURE,
    payload: error,
  };
};
const baseUrl = "https://www.b2b.crediopay.com/api/v1/school"

export const depositData = (depositState, history, historyError) => {
  return async (dispatch) => {
    dispatch(depositRequest())
    try {
      let datas = JSON.parse(localStorage.getItem("auth"));
      const headers = {
        "Content-Type": "application/json",
        authorization: `Bearer ${datas.token.data.token.token}`,
      };
      const res = await axios.post(
        `${baseUrl}/students`,
        depositState,
        { headers: headers }
      );
      const { data } = res;
      if (res.status === 200) {
        history()
        dispatch(depositSuccess(data)); 
      }
    } catch (error) {
      if (error.response) {
        dispatch(depositFaliure(error.response));
        historyError()
      }
     
    }
  };
};

export const keyData = (depositState, history, historyError) => {
  return async (dispatch) => {
    dispatch(keyRequest())
    try {
      let datas = JSON.parse(localStorage.getItem("auth"));
      const headers = {
        "Content-Type": "application/json",
        authorization: `Bearer ${datas.token.data.token.token}`,
      };
      const res = await axios.post(
        `${baseUrl}/perform-key-exchange`,
        depositState,
        { headers: headers }
      );
      const { data } = res;
      if (res.status === 202) {
        history()
        dispatch(keySuccess(data)); 
      }
    } catch (error) {
      if (error.response) {
        dispatch(keyFaliure(error.response));
        historyError()
      }
     
    }
  };
};
