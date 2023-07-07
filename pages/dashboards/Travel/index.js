import React from "react";
import { RoutePermittedRole } from "shared/constants/AppConst";
const TravelClaimForm = React.lazy(() => import("./TravelClaimForm"));
const TravelRequest = React.lazy(() => import("./TravelRequest"));
//const ApprovalStatus = React.lazy(() => import("./ApprovalStatus.js"));

/* const Invoice1 = React.lazy(() => import("./Invoice1")); */

export const TravelConfig = [
  {
    permittedRole: [
      RoutePermittedRole.frontDesk,
      RoutePermittedRole.manager,
      RoutePermittedRole.admin,
      RoutePermittedRole.member,
    ],
    path: "/travel/travel-claim-form/:id",
    element: <TravelClaimForm />,
  },
  {
    permittedRole: [
      RoutePermittedRole.frontDesk,
      RoutePermittedRole.manager,
      RoutePermittedRole.admin,
      RoutePermittedRole.member,
    ],
    path: "/travel/travel-request",
    element: <TravelRequest />,
  },
  /* {
    permittedRole: [RoutePermittedRole.manager, RoutePermittedRole.admin],
    path: "/travel/approval-status",
    element: <ApprovalStatus />,
  }, */

  /* {
    permittedRole: RoutePermittedRole.user,
    path: "/ecommerce/invoice-1",
    element: <Invoice1 />,
  }, */
];
