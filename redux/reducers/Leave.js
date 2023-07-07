import {
  GET_LEAVE_BALANCE,
  GET_LEAVE_BALANCE_ERROR,
  GET_LEAVE_REQUEST,
  GET_LEAVE_REQUEST_ERRORS,
  LOADING_END,
  LOADING_START,
} from "shared/constants/ActionTypes";
const initialState = {
  loading: false,
  error: null,
};
export const GetLeaveReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LEAVE_REQUEST:
      return { ...state, GetLeaveRequestData: action.payload, loading: false };
    case GET_LEAVE_REQUEST_ERRORS:
      return { ...state, error: action.payload, loading: false };
    case LOADING_START:
      return { ...state, loading: true };
    case LOADING_END:
      return { ...state, loading: false };
    default:
      return state;
  }
};
export const GetLeaveBalanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LEAVE_BALANCE:
      return { ...state, GetLeaveBalanceData: action.payload, loading: false };
    case GET_LEAVE_BALANCE_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
