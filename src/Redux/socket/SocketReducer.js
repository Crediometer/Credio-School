import {
  SOCKET_INIT,
  SOCKET_SEND_CARD,
  SOCKET_RECIEVE_TRANSDATA,
  SOCKET_SEND_CARDLESS,
} from "./SocketType";

const initialState = {
  loading: false,
  initated: false,
  transaction: {},

  transactionResult: {},
  error: "",
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SOCKET_INIT:
      return {
        ...state,
        initated: true,
      };
    case SOCKET_SEND_CARD:
      return {
        ...state,
        loading: true,
        transaction: action.payload,
      };
    case SOCKET_RECIEVE_TRANSDATA:
      return { ...state, loading: false, transactionResult: action.payload };

    case SOCKET_SEND_CARDLESS:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default transactionReducer;
