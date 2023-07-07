import React from "react";
import { RoutePermittedRole } from "shared/constants/AppConst";
const IssueRequest = React.lazy(() => import("./IssueRequest"));

export const IssueManagementConfig = [
	{
		permittedRole: [
			RoutePermittedRole.frontDesk,
			RoutePermittedRole.manager,
			RoutePermittedRole.admin,
			RoutePermittedRole.member,
		],
		path: "/issues",
		element: <IssueRequest />,
	},
];
