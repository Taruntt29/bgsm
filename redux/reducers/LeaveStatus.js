import {
  GET_LEAVE_STATUS,
  GET_LEAVE_STATUS_ERROR,
  LEAVE_LOGS,
  LEAVE_LOGS_ERROR,
  LOADING_END,
  LOADING_START,
} from "shared/constants/ActionTypes";
const initialState = {
  loading: false,
  error: null,
};
export const GetLeaveStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LEAVE_STATUS:
      return { ...state, GetLeaveStatusData: action.payload, loading: false };
    case GET_LEAVE_STATUS_ERROR:
      return { ...state, error: action.payload, loading: false };
    case LOADING_START:
      return { ...state, loading: true };
    case LOADING_END:
      return { ...state, loading: false };
    default:
      return state;
  }
};
export const GetLeaveLogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LEAVE_LOGS:
      return { ...state, GetLeaveLogsData: action.payload, loading: false };
    case LEAVE_LOGS_ERROR:
      return { ...state, error: action.payload, loading: false };
    case LOADING_START:
      return { ...state, loading: true };
    case LOADING_END:
      return { ...state, loading: false };
    default:
      return state;
  }
};
