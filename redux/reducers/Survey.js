import { GET_SURVEY, GET_SURVEY_ERROR } from "shared/constants/ActionTypes";

const initialState = {
  loading: false,
  error: null,
};
export const getSurveyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SURVEY:
      return { ...state, getSurveyData: action.payload, loading: false };
    case GET_SURVEY_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
