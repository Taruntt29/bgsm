import React from "react";
import { RoutePermittedRole } from "shared/constants/AppConst";
/* const LeaveRequest = React.lazy(() => import("./LeaveRequest"));
const NewLeaveRequest = React.lazy(() => import("./NewLeaveRequest")); */
const DoctorLeaveStatus = React.lazy(() => import("./ApprovalStatus"));
const LeaveLogs = React.lazy(() => import("./LeaveLogs"));
export const DoctorLeaveConfig = [
  /*  {
    permittedRole: [
      RoutePermittedRole.frontDesk,
      RoutePermittedRole.manager,
      RoutePermittedRole.admin,
      RoutePermittedRole.member,
    ],
    path: "/leave/leave-request",
    element: <LeaveRequest />,
  },
  {
    permittedRole: [
      RoutePermittedRole.frontDesk,
      RoutePermittedRole.manager,
      RoutePermittedRole.admin,
      RoutePermittedRole.member,
    ],
    path: "/leave/new-request",
    element: <NewLeaveRequest />,
  }, */
  {
    permittedRole: [RoutePermittedRole.doctor, RoutePermittedRole.admin],
    path: "/doctor/logs",
    element: <LeaveLogs />,
  },

  {
    permittedRole: [RoutePermittedRole.doctor, RoutePermittedRole.admin],
    path: "/doctor/status",
    element: <DoctorLeaveStatus />,
  },
];
