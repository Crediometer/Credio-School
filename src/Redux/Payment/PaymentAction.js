import axios from "axios"
import { PAYMENT_FALIURE, PAYMENT_REQUEST, PAYMENT_SUCCESS } from "./PaymentType"

export const paymentRequest = () =>{
    return{
        type: PAYMENT_REQUEST
    }
}

export const paymentSuccess = (response) =>{
    return{
        type: PAYMENT_SUCCESS,
        payload: response
    }
}

export const paymentFaliure = (error) =>{
    return{
        type: PAYMENT_FALIURE,
        payload: error
    }
}

const baseUrl = "https://school-dash-node.onrender.com/api/v1"
export const postPayment = (postState, history, setErrorHandler) => {
    return async (dispatch) => {
      dispatch(paymentRequest())
      let datas = JSON.parse(localStorage.getItem("auth"))
      try {
        const res = await axios.post(
          `${baseUrl}/payments/sendMoney`,
          postState,
          {headers: {
            Authorization: `Bearer ${datas?.token?.data?.token?.token}`,
            }}
        );
        const { data } = res;
        if (res.status === 200) {
          history()
          dispatch(paymentSuccess(data));
        }
      } catch (error) {
        if (error.response){
          dispatch(paymentFaliure(error?.response?.data?.error));
        }
        setErrorHandler({ hasError: true, message: error?.response?.data?.message });
      }
    };
  };