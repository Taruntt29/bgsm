import jwtAxios from "@crema/services/auth/jwt-auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/* toast.configure(); */
import {
  CREATE_TRAVEL_REQUEST,
  CREATE_TRAVEL_REQUEST_ERROR,
  DELETE_TRAVEL_REQUEST,
  DELETE_TRAVEL_REQUEST_ERROR,
  GET_TRAVEL_PENDING_MANAGER,
  GET_TRAVEL_PENDING_MANAGER_ERRORS,
  GET_TRAVEL_REQUEST,
  GET_TRAVEL_REQUEST_ERRORS,
  LOADING_END,
  LOADING_START,
  UPDATE_TRAVEL_REQUEST,
  UPDATE_TRAVEL_REQUEST_ERROR,
} from "shared/constants/ActionTypes";
export const getTravelRequestAction = async (dispatch) => {
  dispatch({ type: LOADING_START });
  await jwtAxios
    .get("http://3.111.162.16:8762/api/travel/get-login-user-travel-dtl")
    .then((response) => {
      dispatch({ type: GET_TRAVEL_REQUEST, payload: response.data.data });
      dispatch({ type: LOADING_END });
    })
    .catch((e) => {
      dispatch({ type: GET_TRAVEL_REQUEST_ERRORS, payload: e });
      dispatch({ type: LOADING_END });
    });
};
export const getTravelRequestPendingByManagerAction = async (dispatch) => {
  dispatch({ type: LOADING_START });
  await jwtAxios
    .get("http://3.111.162.16:8762/api/travel/get-all-pending-travel-req")
    .then((response) => {
      dispatch({
        type: GET_TRAVEL_PENDING_MANAGER,
        payload: response.data.data,
      });
      dispatch({ type: LOADING_END });
    })
    .catch((e) => {
      dispatch({ type: GET_TRAVEL_PENDING_MANAGER_ERRORS, payload: e });
      dispatch({ type: LOADING_END });
    });
};
//
export const createTravelRequestAction = async (dispatch, payload) => {
  await jwtAxios
    .post("http://3.111.162.16:8762/api/travel/create-travel-req", payload)
    .then((response) => {
      dispatch({ type: CREATE_TRAVEL_REQUEST, payload: response.data.data });
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
      dispatch({ type: CREATE_TRAVEL_REQUEST_ERROR, payload: e });
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
export const deleteTravelRequestAction = async (dispatch, id) => {
  await jwtAxios
    .post(`http://3.111.162.16:8762/api/travel/delete-travel-req/${id}`)
    .then((response) => {
      dispatch({ type: DELETE_TRAVEL_REQUEST, payload: response.data.data });
      toast.success(response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "colored",
      });
    })
    .catch((e) => {
      dispatch({ type: DELETE_TRAVEL_REQUEST_ERROR, payload: e });
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
export const updateTravelRequestAction = async (dispatch, id, payload) => {
  await jwtAxios
    .put(`http://3.111.162.16:8762/api/travel/update-travel-req/${id}`, payload)
    .then((response) => {
      dispatch({ type: UPDATE_TRAVEL_REQUEST, payload: response.data.data });
      toast.success(response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "colored",
      });
    })
    .catch((e) => {
      dispatch({ type: UPDATE_TRAVEL_REQUEST_ERROR, payload: e });
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
