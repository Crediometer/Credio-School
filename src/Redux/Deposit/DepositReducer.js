import {
  DEPOSIT_FALIURE,
  DEPOSIT_REQUEST,
  DEPOSIT_SUCCESS,
  KEY_FALIURE,
  KEY_REQUEST,
  KEY_SUCCESS,

} from "./DepositType";

const initialState = {
  loading: false,
  deposit: [],
  error: "",
};

export const depositReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEPOSIT_REQUEST:
      return {
        loading: true,
        requestData: {},
        deposit: [],
        error: "",
      };
  
    case DEPOSIT_SUCCESS:
      return {
        loading: false,
        deposit: action.payload,
        error: "",
      };
    case DEPOSIT_FALIURE:
      return {
        loading: false,
        requestData: {},
        deposit: [],
        error: action.payload,
      };
    default:
      return state;
  }
};


export const keyReducer = (state = initialState, action) => {
  switch (action.type) {
    case KEY_REQUEST:
      return {
        loading: true,
        requestData: {},
        deposit: [],
        error: "",
      };
  
    case KEY_SUCCESS:
      return {
        loading: false,
        deposit: action.payload,
        error: "",
      };
    case KEY_FALIURE:
      return {
        loading: false,
        requestData: {},
        deposit: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
