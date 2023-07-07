import {
  DOCTOR_LOGS,
  DOCTOR_LOGS_ERROR,
  DOCTOR_STATUS,
  DOCTOR_STATUS_ERROR,
  LOADING_END,
  LOADING_START,
} from "shared/constants/ActionTypes";
const initialState = {
  loading: false,
  error: null,
};
export const GetDoctorStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case DOCTOR_STATUS:
      return { ...state, GetDoctorStatusData: action.payload, loading: false };
    case DOCTOR_STATUS_ERROR:
      return { ...state, error: action.payload, loading: false };
    case LOADING_START:
      return { ...state, loading: true };
    case LOADING_END:
      return { ...state, loading: false };
    default:
      return state;
  }
};
export const GetDoctorLogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DOCTOR_LOGS:
      return { ...state, GetDoctorLogsData: action.payload, loading: false };
    case DOCTOR_LOGS_ERROR:
      return { ...state, error: action.payload, loading: false };
    case LOADING_START:
      return { ...state, loading: true };
    case LOADING_END:
      return { ...state, loading: false };
    default:
      return state;
  }
};
