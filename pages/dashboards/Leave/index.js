import React from "react";
import { RoutePermittedRole } from "shared/constants/AppConst";
const LeaveRequest = React.lazy(() => import("./LeaveRequest"));
const NewLeaveRequest = React.lazy(() => import("./NewLeaveRequest"));
/* const LeaveStatus = React.lazy(() => import("./LeaveStatus")); */
const LeaveLogs = React.lazy(() => import("./LeaveLogs"));
export const LeaveConfig = [
  {
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
  },
  {
    permittedRole: [
      RoutePermittedRole.frontDesk,
      RoutePermittedRole.manager,
      RoutePermittedRole.admin,
      RoutePermittedRole.member,
      RoutePermittedRole.hr,
      RoutePermittedRole.finance,
    ],
    path: "/leave/logs",
    element: <LeaveLogs />,
  },
  /* {
    permittedRole: [RoutePermittedRole.manager, RoutePermittedRole.admin],
    path: "/leave/status",
    element: <LeaveStatus />,
  }, */
];
