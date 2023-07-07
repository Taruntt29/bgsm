import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import Settings from "./Setting";
import Common from "./Common";
import Dashboard from "./Dashboard";
import {
  travelRequestPendingManagerReducer,
  travelRequestReducer,
} from "./TravelRequest";
import { GetLeaveBalanceReducer, GetLeaveReducer } from "./Leave";
import { GetLeaveLogsReducer, GetLeaveStatusReducer } from "./LeaveStatus";
import { getAshramwashiEventsReducer } from "./Events";
import { GetRoomRequestReducer, GetRoomStatusReducer } from "./Room";
import { GetDoctorLogsReducer } from "./Doctor";

const reducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    settings: Settings,
    dashboard: Dashboard,
    common: Common,
    travelRequestReducer: travelRequestReducer,
    GetLeaveReducer: GetLeaveReducer,
    GetLeaveStatusReducer: GetLeaveStatusReducer,
    GetLeaveBalanceReducer: GetLeaveBalanceReducer,
    getAshramwashiEventsReducer: getAshramwashiEventsReducer,
    GetRoomRequestReducer: GetRoomRequestReducer,
    GetRoomStatusReducer: GetRoomStatusReducer,
    travelRequestPendingManagerReducer: travelRequestPendingManagerReducer,
    GetLeaveLogsReducer: GetLeaveLogsReducer,
    GetDoctorLogsReducer: GetDoctorLogsReducer,
  });
export default reducers;
