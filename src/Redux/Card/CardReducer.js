import {
  CONNECT_DEVICE,
  REQUEST_DISPLAY,
  SCAN_DEVICES,
  REQUEST_PIN,
  REQUEST_PIN_DONE,
  RECIEVE_RESPONSE,
  RECIEVE_RESPONSE_DONE,
  DISCONNECT_DEVICE,
  SEND_TLV_DATA,
  POS_INFO,
  SUCCESS_CARD_SCAN,
  SUCCESS_TRANS,
} from "./CardType";

const initialState = {
  requestDisplay: false,
  scanning: false,
  tlv: null,
  loading: false,
  responseData: null,
  accountType: 0,
  pinRequest: false,
  connected: false,
  requestDisplayMessage: "",
  uuid: "",
  posinfo: "",
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DISPLAY:
      return {
        ...state,
        requestDisplay: true,
        requestDisplayMessage: action.payload,
      };

    case SUCCESS_CARD_SCAN:
      return {
        ...state,
        requestDisplay: false,
      };

    case SEND_TLV_DATA:
      return {
        ...state,
        loading: true,
        // pinRequest: false,
        responseData: null,
        tlv: action.payload,
      };

    case SCAN_DEVICES:
      return {
        ...state,
        scanning: true,
      };

    case CONNECT_DEVICE:
      return {
        ...state,
        scanning: false,
        connected: true,
        uuid: action.payload,
      };

    case RECIEVE_RESPONSE:
      return {
        ...state,
        loading: false,
        responseData: action.payload,
      };

    case RECIEVE_RESPONSE_DONE:
      return {
        ...state,
        responseData: null,
      };

    case REQUEST_PIN:
      return {
        ...state,
        pinRequest: true,
      };

    case REQUEST_PIN_DONE:
      return {
        ...state,
        pinRequest: true,
      };

    case DISCONNECT_DEVICE:
      return {
        ...state,
        scanning: false,
        connected: false,
      };

    case POS_INFO:
      return {
        ...state,
        posinfo: action.payload,
      }
    case SUCCESS_TRANS:
      return {
        ...state,
        pinRequest: false,
        requestDisplay: false,
      }
    default:
      return state;
  }
};

export default cardReducer;
