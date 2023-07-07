import jwtAxios from "@crema/services/auth/jwt-auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  CREATE_LEAVE_REQUEST,
  CREATE_LEAVE_REQUEST_ERROR,
  GET_LEAVE_BALANCE,
  GET_LEAVE_BALANCE_ERROR,
  GET_LEAVE_REQUEST,
  GET_LEAVE_REQUEST_ERRORS,
  LOADING_END,
  LOADING_START,
} from "shared/constants/ActionTypes";
export const getLeaveBalanceAction = async (dispatch) => {
  dispatch({ type: LOADING_START });

  await jwtAxios
    .get("http://3.111.162.16:8762/api/leave/leave-get-balance")
    .then((response) => {
      dispatch({ type: GET_LEAVE_BALANCE, payload: response.data.data });
      dispatch({ type: LOADING_END });
    })
    .catch((e) => {
      dispatch({ type: GET_LEAVE_BALANCE_ERROR, payload: e });
      dispatch({ type: LOADING_END });
    });
};
export const getLeaveRequestAction = async (dispatch) => {
  dispatch({ type: LOADING_START });
  await jwtAxios
    .get("http://3.111.162.16:8762/api/leave/leave-get-apply-by")
    .then((response) => {
      dispatch({ type: GET_LEAVE_REQUEST, payload: response.data.data });
      dispatch({ type: LOADING_END });
    })
    .catch((e) => {
      dispatch({ type: GET_LEAVE_REQUEST_ERRORS, payload: e });
      dispatch({ type: LOADING_END });
    });
};
export const createLeaveRequestAction = async (dispatch, payload) => {
  await jwtAxios
    .post("http://3.111.162.16:8762/api/leave/leave-save", payload)
    .then((response) => {
      dispatch({ type: CREATE_LEAVE_REQUEST, payload: response.data.data });
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
      dispatch({ type: CREATE_LEAVE_REQUEST_ERROR, payload: e });
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
