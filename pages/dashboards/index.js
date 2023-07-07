import React from "react";
import { RoutePermittedRole } from "shared/constants/AppConst";
const Attendence = React.lazy(() => import("./Attendence"));
const EventModule = React.lazy(() => import("./Events"));
const FrontDesk = React.lazy(() => import("./FrontDesk"));
const FinanceManager = React.lazy(() => import("./FinanceManager"));
const HRManager = React.lazy(() => import("./HRManager"));
const Performance = React.lazy(() => import("./Performance"));

export const dashBoardConfigs = [
  {
    permittedRole: [
      RoutePermittedRole.frontDesk,
      RoutePermittedRole.manager,
      RoutePermittedRole.admin,
      RoutePermittedRole.member,
      RoutePermittedRole.doctor,
      RoutePermittedRole.finance,
    ],
    path: "/event",
    element: <EventModule />,
  },
  {
    permittedRole: [
      RoutePermittedRole.frontDesk,
      RoutePermittedRole.manager,
      RoutePermittedRole.admin,
      RoutePermittedRole.member,
      RoutePermittedRole.doctor,
      RoutePermittedRole.finance,
    ],
    path: "/attendence",
    element: <Attendence />,
  },
  {
    permittedRole: [RoutePermittedRole.frontDesk, RoutePermittedRole.admin],
    path: "/frontdesk",
    element: <FrontDesk />,
  },

  {
    permittedRole: [RoutePermittedRole.admin, RoutePermittedRole.finance],
    path: "/finance-manager",
    element: <FinanceManager />,
  },
  {
    permittedRole: [RoutePermittedRole.admin, RoutePermittedRole.hr],
    path: "/hr-manager",
    element: <HRManager />,
  },
  {
    permittedRole: [RoutePermittedRole.admin, RoutePermittedRole.hr],
    path: "/hr-manager",
    element: <FinanceManager />,
  },
  {
    permittedRole: [
      RoutePermittedRole.frontDesk,
      RoutePermittedRole.manager,
      RoutePermittedRole.admin,
      RoutePermittedRole.member,
      RoutePermittedRole.doctor,
      RoutePermittedRole.finance,
    ],
    path: "/Performance",
    element: <Performance />,
  },
];
