import { REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, TRANSFER_DATA } from "./RegisterType";
import { ADD_FORM_DATA } from './RegisterAction';
const initialState = {
    loading: false,
    data: [],
    registerData:'',
    error: "",
    formData: {},
};

const initialState2 = {
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FORM_DATA:
      return {
        ...state,
        formData: action.payload,
      };
    default:
      return state;
  }
};
  
export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_USER_REQUEST:
        return {
          loading: true,
          requestData: {},
          data: [],
          error: "",
        };
      case REGISTER_USER_SUCCESS:
        return {
          loading: false,
          data: action.payload,
          registerData:'',
          error: "",
        };
      case TRANSFER_DATA:
        return {
          ...state,
          registerData: action.payload,
        };
      case REGISTER_USER_FAILURE:
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
  