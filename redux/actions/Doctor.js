import jwtAxios from "@crema/services/auth/jwt-auth";
import {
  DOCTOR_LOGS,
  DOCTOR_LOGS_ERROR,
  GET_LEAVE_STATUS,
  GET_LEAVE_STATUS_ERROR,
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
export const getDoctorLogsAction = async (dispatch) => {
  dispatch({ type: LOADING_START });
  await jwtAxios
    .get("http://3.111.162.16:8762/api/leave/leave-log-manager")
    .then((response) => {
      dispatch({ type: DOCTOR_LOGS, payload: response.data.data });
      dispatch({ type: LOADING_END });
    })
    .catch((e) => {
      dispatch({ type: DOCTOR_LOGS_ERROR, payload: e });
      dispatch({ type: LOADING_END });
    });
};
