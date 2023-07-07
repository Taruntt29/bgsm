import jwtAxios from "@crema/services/auth/jwt-auth";
import {
  GET_LEAVE_STATUS,
  GET_LEAVE_STATUS_ERROR,
  LEAVE_LOGS,
  LEAVE_LOGS_ERROR,
  LOADING_END,
  LOADING_START,
} from "shared/constants/ActionTypes";
export const getLeaveStatusAction = async (dispatch) => {
  dispatch({ type: LOADING_START });
  await jwtAxios
    .get("http://3.111.162.16:8762/api/leave/leave-for-approval-list")
    .then((response) => {
      dispatch({ type: GET_LEAVE_STATUS, payload: response.data.data });
      dispatch({ type: LOADING_END });
    })
    .catch((e) => {
      dispatch({ type: GET_LEAVE_STATUS_ERROR, payload: e });
      dispatch({ type: LOADING_END });
    });
};
export const getLeaveLogsAction = async (dispatch) => {
  dispatch({ type: LOADING_START });
  await jwtAxios
    .get("http://3.111.162.16:8762/api/leave/leave-logs")
    .then((response) => {
      dispatch({ type: LEAVE_LOGS, payload: response.data.data });
      dispatch({ type: LOADING_END });
    })
    .catch((e) => {
      dispatch({ type: LEAVE_LOGS_ERROR, payload: e });
      dispatch({ type: LOADING_END });
    });
};
