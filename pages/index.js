import React from "react";
import { Navigate } from "react-router-dom";
import { initialUrl } from "shared/constants/AppConst";

import { authRouteConfig } from "./auth";
import Error403 from "./errorPages/Error403";
import { errorPagesConfigs } from "./errorPages";
import { dashBoardConfigs } from "./dashboards";
// import { userPagesConfig } from "./userPages";
import { TravelConfig } from "./dashboards/Travel";
import { IssueManagementConfig } from "./dashboards/IssueManagement";
import { LeaveConfig } from "./dashboards/Leave";
import { RoomBookingConfig } from "./dashboards/RoomBooking";
import { DoctorLeaveConfig } from "./dashboards/Doctor";
import { ManagerConfig } from "./dashboards/Manager";

const authorizedStructure = {
  fallbackPath: "/signin",
  unAuthorizedComponent: <Error403 />,
  routes: [
    ...dashBoardConfigs,
    ...TravelConfig,
    ...IssueManagementConfig,
    ...LeaveConfig,
    ...RoomBookingConfig,
    ...DoctorLeaveConfig,
    ...ManagerConfig,
    // ...userPagesConfig,
  ],
};

const unAuthorizedStructure = {
  fallbackPath: initialUrl,
  routes: authRouteConfig,
};
const anonymousStructure = {
  routes: errorPagesConfigs.concat([
    {
      path: "/",
      element: <Navigate to={initialUrl} />,
    },
    {
      path: "*",
      element: <Navigate to="/error-pages/error-404" />,
    },
  ]),
};

export { authorizedStructure, unAuthorizedStructure, anonymousStructure };
