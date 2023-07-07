import React from "react";
import { RoutePermittedRole } from "shared/constants/AppConst";
const RoomRequest = React.lazy(() => import("./RoomRequest"));
const RoomRequestForm = React.lazy(() => import("./RoomRequestForm"));
const RoomStatus = React.lazy(() => import("./RoomStatus"));
export const RoomBookingConfig = [
  {
    permittedRole: [
      RoutePermittedRole.frontDesk,
      RoutePermittedRole.manager,
      RoutePermittedRole.admin,
      RoutePermittedRole.member,
    ],
    path: "/room/room-request",
    element: <RoomRequest />,
  },
  {
    permittedRole: [
      RoutePermittedRole.frontDesk,
      RoutePermittedRole.manager,
      RoutePermittedRole.admin,
      RoutePermittedRole.member,
    ],
    path: "/room/room-request-form",
    element: <RoomRequestForm />,
  },
  {
    permittedRole: [
      /* RoutePermittedRole.frontDesk, */
      RoutePermittedRole.manager,
      RoutePermittedRole.admin,
      /*   RoutePermittedRole.member, */
    ],
    path: "/room/status",
    element: <RoomStatus />,
  },
];
