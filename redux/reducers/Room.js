import {
  GET_ROOM_REQUEST,
  GET_ROOM_REQUEST_ERRORS,
  GET_ROOM_STATUS,
  GET_ROOM_STATUS_ERROR,
  LOADING_END,
  LOADING_START,
} from "shared/constants/ActionTypes";
const initialState = {
  loading: false,
  error: null,
};
export const GetRoomRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROOM_REQUEST:
      return { ...state, GetRoomRequestData: action.payload, loading: false };
    case GET_ROOM_REQUEST_ERRORS:
      return { ...state, error: action.payload, loading: false };
    case LOADING_START:
      return { ...state, loading: true };
    case LOADING_END:
      return { ...state, loading: false };
    default:
      return state;
  }
};
/* export const GetLeaveBalanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LEAVE_BALANCE:
      return { ...state, GetLeaveBalanceData: action.payload, loading: false };
    case GET_LEAVE_BALANCE_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}; */
export const GetRoomStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROOM_STATUS:
      return { ...state, GetRoomStatusData: action.payload, loading: false };
    case GET_ROOM_STATUS_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
