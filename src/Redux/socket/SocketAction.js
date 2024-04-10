
import "./SocketType";
import axios from "axios";
import io from "socket.io-client";
import store from "../../Redux/Store";
import {
  SOCKET_SEND_CARD,
  SOCKET_INIT,
  SOCKET_RECIEVE_TRANSDATA,
  SOCKET_SEND_CARDLESS,
} from "./SocketType";
import { RECIEVE_RESPONSE } from "../Card/CardType";
import { SEND_TLV_DATA } from "../Card/CardType";
var socket;

// export const transactionRequest = () => {
//   return {
//     type: TRANSACTION_REQUEST,
//   };
// };

export const init = () => {
  return (dispatch) => {
    if (!socket) {
      socket = io.connect("https://credio-api.herokuapp.com/payment", {
        transports: ["websocket"],
        query: "phoneNumber=+2347049581457",
      });

      socket.on("connect", function (data) {
        console.log("connected.... ");
        socket.emit("updateId");
      });

      socket.on("payattitude", function (data) {
        console.log(data);
        store.dispatch({
          type: RECIEVE_RESPONSE,
          payload: data,
        });
      });
      socket.on("reconnect", function (data) {
        console.log("on reconnect ", data);
        socket.emit("updateId");
        
      });

      socket.on("cardResult", function (data) {
        console.log("card result....");
        console.log(data);

        store.dispatch({
          type: SOCKET_RECIEVE_TRANSDATA,
          payload: data,
        });
        store.dispatch({
          type: RECIEVE_RESPONSE,
          payload: data,
        });
      });
    }
  };
};

export const sendCard = (data) => {
  return (dispatch) => {
    // dispatch({ type: SOCKET_SEND_CARD });
    
    console.log("cards .... ", data);
    socket.emit("cards", data);
  };
};

export const sendCardless = (data) => {
  return (dispatch) => {
    socket.emit("sendPayattitude", data);
    store.dispatch({
      type: SEND_TLV_DATA,
      payload: data,
    });
    // dispatch(transactionRequest);
    // console.log(`${localStorage.getItem("auth")}`);
    // let datas = JSON.parse(localStorage.getItem("auth"));
    // console.log(`data ----- ${datas}`);
    // console.log(`this is data ${datas.token.token.token}`);
    // axios
    //   .get(
    //     "https://credio-api.herokuapp.com/api/v1/agent/user/account/transaction/history",
    //     {
    //       headers: {
    //         Authorization: `Bearer ${datas.token.token.token}`,
    //       },
    //     }
    //   )
    //   .then((response) => {
    //     const transaction = response.data.transaction;
    //     console.log(`this is transaction--- ${transaction}`);
    //     dispatch(transactionSuccess(transaction));
    //   })
    //   .catch((error) => {
    //     const errorMsg = error.message;
    //     dispatch(transactionFaliure(errorMsg));
    //   });
  };
};
