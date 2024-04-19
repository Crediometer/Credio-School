import { PASSWORD_RESET_FAILURE, PASSWORD_RESET_REQUEST, PASSWORD_RESET_SUCCESS } from "./ResetpasswordTypes";
const initialState = {
    loading: false,
    data: [],
    error: "",
  };
  
  const resetpasswordReducer = (state = initialState, action) => {
    switch (action.type) {
      case PASSWORD_RESET_REQUEST:
        return {
          loading: true,
          requestData: {},
          data: [],
          error: "",
        };
    
      case PASSWORD_RESET_SUCCESS:
        return {
          loading: false,
          data: action.payload,
          error: "",
        };
      case PASSWORD_RESET_FAILURE:
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
  
  export default resetpasswordReducer;