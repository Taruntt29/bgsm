import {
  GET_TRAVEL_PENDING_MANAGER,
  GET_TRAVEL_PENDING_MANAGER_ERRORS,
  GET_TRAVEL_REQUEST,
  GET_TRAVEL_REQUEST_ERRORS,
  LOADING_END,
  LOADING_START,
} from "shared/constants/ActionTypes";
const initialState = {
  loading: false,
  error: null,
};
export const travelRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRAVEL_REQUEST:
      return { ...state, GetTravelRequestData: action.payload, loading: false };
    case GET_TRAVEL_REQUEST_ERRORS:
      return { ...state, error: action.payload, loading: false };
    case LOADING_START:
      return { ...state, loading: true };
    case LOADING_END:
      return { ...state, loading: false };
    default:
      return state;
  }
};
export const travelRequestPendingManagerReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_TRAVEL_PENDING_MANAGER:
      return {
        ...state,
        GetTravelRequestPeningManagerData: action.payload,
        loading: false,
      };
    case GET_TRAVEL_PENDING_MANAGER_ERRORS:
      return { ...state, error: action.payload, loading: false };
    case LOADING_START:
      return { ...state, loading: true };
    case LOADING_END:
      return { ...state, loading: false };
    default:
      return state;
  }
};
