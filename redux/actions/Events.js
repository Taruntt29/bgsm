import jwtAxios from "@crema/services/auth/jwt-auth";
import {
  GET_Ashramwashi_Events,
  GET_Ashramwashi_Events_ERROR,
} from "shared/constants/ActionTypes";

export const getAshramwashiEventsAction = async (dispatch) => {
  await jwtAxios
    .get("http://3.111.162.16:8762/api/admin/get-all-calendar-events")
    .then((response) => {
      dispatch({ type: GET_Ashramwashi_Events, payload: response.data.data });
    })
    .catch((e) => {
      dispatch({ type: GET_Ashramwashi_Events_ERROR, payload: e });
    });
};
