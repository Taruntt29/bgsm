import jwtAxios from "@crema/services/auth/jwt-auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  CREATE_ROOM_REQUEST,
  CREATE_ROOM_REQUEST_ERROR,
  GET_LEAVE_BALANCE,
  GET_LEAVE_BALANCE_ERROR,
  GET_ROOM_REQUEST,
  GET_ROOM_REQUEST_ERRORS,
  GET_ROOM_STATUS,
  GET_ROOM_STATUS_ERROR,
  LOADING_END,
  LOADING_START,
} from "shared/constants/ActionTypes";
export const getRoomBookingStatusAction = async (dispatch) => {
  dispatch({ type: LOADING_START });

  await jwtAxios
    .get("http://3.111.162.16:8762/api/roombooking/room-get-allbooking-status")
    .then((response) => {
      dispatch({ type: GET_LEAVE_BALANCE, payload: response.data.data });
      dispatch({ type: LOADING_END });
    })
    .catch((e) => {
      dispatch({ type: GET_LEAVE_BALANCE_ERROR, payload: e });
      dispatch({ type: LOADING_END });
    });
};
export const getRoomBookingPendingAction = async (dispatch) => {
  dispatch({ type: LOADING_START });

  await jwtAxios
    .get("http://3.111.162.16:8762/api/roombooking/room-get-allbooking-status")
    .then((response) => {
      dispatch({ type: GET_ROOM_STATUS, payload: response.data.data });
      dispatch({ type: LOADING_END });
    })
    .catch((e) => {
      dispatch({ type: GET_ROOM_STATUS_ERROR, payload: e });
      dispatch({ type: LOADING_END });
    });
};
//
export const getRoomRequestAction = async (dispatch) => {
  dispatch({ type: LOADING_START });
  await jwtAxios
    .get("http://3.111.162.16:8762/api/roombooking/get-all-room-booking")
    .then((response) => {
      dispatch({ type: GET_ROOM_REQUEST, payload: response.data.data });
      dispatch({ type: LOADING_END });
    })
    .catch((e) => {
      dispatch({ type: GET_ROOM_REQUEST_ERRORS, payload: e });
      dispatch({ type: LOADING_END });
    });
};
export const createRoomRequestAction = async (dispatch, payload) => {
  await jwtAxios
    .post(
      "http://3.111.162.16:8762/api/roombooking/room-create-request",
      payload
    )
    .then((response) => {
      dispatch({ type: CREATE_ROOM_REQUEST, payload: response.data.data });
      toast.success(response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    })
    .catch((e) => {
      dispatch({ type: CREATE_ROOM_REQUEST_ERROR, payload: e });
      toast.error("Something went Wrong", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: "colored",
      });
    });
};
