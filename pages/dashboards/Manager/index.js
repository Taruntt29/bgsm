import React from "react";
import { RoutePermittedRole } from "shared/constants/AppConst";
const TravelApproval = React.lazy(() => import("./TravelApprovalStatus"));
const TravelLogs = React.lazy(() => import("./TravelLogs"));
const LeaveApproval = React.lazy(() => import("./LeaveApproval"));
const LeaveLogs = React.lazy(() => import("./LeaveLogs"));
const RoomApproval = React.lazy(() => import("./RoomApproval"));
const RoomLogs = React.lazy(() => import("./RoomLogs"));
export const ManagerConfig = [
  {
    permittedRole: [RoutePermittedRole.manager, RoutePermittedRole.admin],
    path: "/manager/travel-status",
    element: <TravelApproval />,
  },
  {
    permittedRole: [RoutePermittedRole.manager, RoutePermittedRole.admin],
    path: "/manager/travel-logs",
    element: <TravelLogs />,
  },
  {
    permittedRole: [RoutePermittedRole.manager, RoutePermittedRole.admin],
    path: "/manager/leave-status",
    element: <LeaveApproval />,
  },
  {
    permittedRole: [RoutePermittedRole.manager, RoutePermittedRole.admin],
    path: "/manager/leave-logs",
    element: <LeaveLogs />,
  },
  {
    permittedRole: [RoutePermittedRole.manager, RoutePermittedRole.admin],
    path: "/manager/room-status",
    element: <RoomApproval />,
  },
  {
    permittedRole: [RoutePermittedRole.manager, RoutePermittedRole.admin],
    path: "/manager/room-logs",
    element: <RoomLogs />,
  },
];
