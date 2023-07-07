import {
  GET_Ashramwashi_Events,
  GET_Ashramwashi_Events_ERROR,
} from "shared/constants/ActionTypes";

const initialState = {
  loading: false,
  error: null,
};
export const getAshramwashiEventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_Ashramwashi_Events:
      return {
        ...state,
        getAshramwashiEventsData: action.payload,
        loading: false,
      };
    case GET_Ashramwashi_Events_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
