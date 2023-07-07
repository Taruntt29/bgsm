import React from "react";
import { RoutePermittedRole } from "shared/constants/AppConst";
import CardTravelOutlinedIcon from "@mui/icons-material/CardTravelOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import PhotoCameraFrontOutlinedIcon from "@mui/icons-material/PhotoCameraFrontOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";

const routesConfig = [
	{
		id: " travel",
		title: " Travel",
		messageId: "sidebar.travel",
		type: "collapse",
		icon: (
			<CardTravelOutlinedIcon
				style={{ color: "#00455E", fontSize: "22px" }}
			/>
		),
		children: [
			{
				id: "travelrequest",
				title: " Travel Request",
				messageId: "sidebar.travel.travelrequest",
				permittedRole: [
					RoutePermittedRole.frontDesk,
					RoutePermittedRole.manager,
					RoutePermittedRole.admin,
					RoutePermittedRole.member,
					RoutePermittedRole.doctor,
					RoutePermittedRole.finance,
					RoutePermittedRole.hr,
				],
				type: "item",
				url: "/travel/travel-request",
			},
			{
				id: "travelclaim",
				title: " Travel Claim",
				messageId: "sidebar.travel.travelclaim",
				permittedRole: [
					RoutePermittedRole.frontDesk,
					RoutePermittedRole.manager,
					RoutePermittedRole.admin,
					RoutePermittedRole.member,
					RoutePermittedRole.doctor,
					RoutePermittedRole.finance,
					RoutePermittedRole.hr,
				],
				type: "item",
				url: "/travel/travel-claim-form/:id",
			},
		],
	},
	{
		id: "roombooking",
		title: " Room Booking",
		messageId: "sidebar.room",
		permittedRole: [
			RoutePermittedRole.frontDesk,
			RoutePermittedRole.manager,
			RoutePermittedRole.admin,
			RoutePermittedRole.member,
			RoutePermittedRole.doctor,
			RoutePermittedRole.finance,
			RoutePermittedRole.hr,
		],
		type: "collapse",
		icon: (
			<CardTravelOutlinedIcon
				style={{ color: "#00455E", fontSize: "22px" }}
			/>
		),
		children: [
			{
				id: "roomrequest",
				title: " Room Booking",
				messageId: "sidebar.room.roombooking",
				permittedRole: [
					RoutePermittedRole.frontDesk,
					RoutePermittedRole.manager,
					RoutePermittedRole.admin,
					RoutePermittedRole.member,
					RoutePermittedRole.doctor,
					RoutePermittedRole.finance,
					RoutePermittedRole.hr,
				],
				type: "item",
				url: "/room/room-request",
			},
			/* {
        id: "roomrequestform",
        title: " Room Request Form",
        permittedRole: [
          RoutePermittedRole.frontDesk,
          RoutePermittedRole.manager,
          RoutePermittedRole.admin,
          RoutePermittedRole.member,
          RoutePermittedRole.doctor,
          RoutePermittedRole.finance,
          RoutePermittedRole.hr,
        ],
        messageId: "sidebar.room.roomrequestform",
        type: "item",
        url: "/room/room-request-form",
      }, */
			{
				id: "roomstatus",
				title: "  Room Status",
				permittedRole: [
					/* RoutePermittedRole.frontDesk, */
					RoutePermittedRole.manager,
					RoutePermittedRole.admin,
					/* RoutePermittedRole.member, */
				],
				messageId: "sidebar.room.roomstatus",
				type: "item",
				url: "/room/status",
			},
		],
	},

	{
		id: " leave",
		title: " Leave",
		messageId: "sidebar.leave",
		permittedRole: [
			RoutePermittedRole.frontDesk,
			RoutePermittedRole.manager,
			RoutePermittedRole.admin,
			RoutePermittedRole.member,
			RoutePermittedRole.doctor,
			RoutePermittedRole.finance,
			RoutePermittedRole.hr,
		],
		type: "collapse",
		icon: (
			<DateRangeOutlinedIcon
				style={{ color: "#00455E", fontSize: "22px" }}
			/>
		),
		children: [
			{
				id: "leaverequest",
				title: " Leave Request",
				messageId: "sidebar.leave.leaverequest",
				permittedRole: [
					RoutePermittedRole.frontDesk,
					RoutePermittedRole.manager,
					RoutePermittedRole.admin,
					RoutePermittedRole.member,
					RoutePermittedRole.doctor,
					RoutePermittedRole.finance,
					RoutePermittedRole.hr,
				],
				type: "item",
				url: "/leave/leave-request",
			},
			/*  {
        id: "newleaverequest",
        title: " New Leave Request",
        messageId: "sidebar.leave.newleaverequest",
        permittedRole: [
          RoutePermittedRole.frontDesk,
          RoutePermittedRole.manager,
          RoutePermittedRole.admin,
          RoutePermittedRole.member,
          RoutePermittedRole.doctor,
          RoutePermittedRole.finance,
          RoutePermittedRole.hr,
        ],
        type: "item",
        url: "/leave/new-request",
      }, */
			{
				id: "leavelogs",
				title: "  Leave Logs",
				messageId: "sidebar.leave.leavelogs",
				permittedRole: [
					RoutePermittedRole.frontDesk,
					RoutePermittedRole.manager,
					RoutePermittedRole.admin,
					RoutePermittedRole.member,
					RoutePermittedRole.doctor,
					RoutePermittedRole.finance,
					RoutePermittedRole.hr,
				],
				type: "item",
				url: "/leave/logs",
			},
			/* {
        id: "leavestatus",
        title: "  Leave Status",
        messageId: "sidebar.leave.leavestatus",
        permittedRole: [RoutePermittedRole.manager, RoutePermittedRole.admin],
        type: "item",
        url: "/leave/status",
      }, */
		],
	},
	{
		id: "events",
		title: "Event",
		messageId: "sidebar.app.dashboard.events",
		permittedRole: [
			RoutePermittedRole.frontDesk,
			RoutePermittedRole.manager,
			RoutePermittedRole.admin,
			RoutePermittedRole.member,
			RoutePermittedRole.doctor,
			RoutePermittedRole.finance,
			RoutePermittedRole.hr,
		],
		type: "item",
		icon: <EventAvailableOutlinedIcon style={{ color: "#00455E" }} />,
		url: "/event",
	},
	{
		id: "attendence",
		title: "Attendence",
		messageId: "sidebar.app.dashboard.attendence",
		permittedRole: [
			RoutePermittedRole.frontDesk,
			RoutePermittedRole.manager,
			RoutePermittedRole.admin,
			RoutePermittedRole.member,
			RoutePermittedRole.doctor,
			RoutePermittedRole.finance,
			RoutePermittedRole.hr,
		],
		type: "item",
		icon: <EventAvailableOutlinedIcon style={{ color: "#00455E" }} />,
		url: "/attendence",
	},
	{
		id: "frontdesk",
		title: "FrontDesk",
		messageId: "sidebar.app.dashboard.frontdesk",
		permittedRole: [
			RoutePermittedRole.frontDesk,
			RoutePermittedRole.admin,
			/* RoutePermittedRole.member, */
		],
		type: "item",
		icon: (
			<PhotoCameraFrontOutlinedIcon
				style={{ color: "#00455E", fontSize: "22px" }}
			/>
		),
		url: "/frontdesk",
	},

	{
		id: "financemanager",
		title: "FinanaceManager",
		messageId: "sidebar.app.dashboard.finance-manager",
		permittedRole: [RoutePermittedRole.admin, RoutePermittedRole.finance],
		type: "item",
		icon: (
			<AccountBalanceOutlinedIcon
				style={{ color: "#00455E", fontSize: "22px" }}
			/>
		),
		url: "/finance-manager",
	},
	{
		id: "hrmanager",
		title: "HRManager",
		messageId: "sidebar.app.dashboard.hr-manager",
		permittedRole: [RoutePermittedRole.admin, RoutePermittedRole.hr],
		type: "item",
		icon: (
			<ManageAccountsOutlinedIcon
				style={{ color: "#00455E", fontSize: "22px" }}
			/>
		),
		url: "/hr-manager",
	},
	{
		id: "performance",
		title: "Performance",
		messageId: "sidebar.app.dashboard.performance",
		permittedRole: [
			RoutePermittedRole.frontDesk,
			RoutePermittedRole.manager,
			RoutePermittedRole.admin,
			RoutePermittedRole.member,
			RoutePermittedRole.doctor,
			RoutePermittedRole.finance,
			RoutePermittedRole.hr,
		],
		type: "item",
		icon: (
			<ManageAccountsOutlinedIcon
				style={{ color: "#00455E", fontSize: "22px" }}
			/>
		),
		url: "/performance",
	},
	{
		id: "issues",
		title: "issues",
		messageId: "sidebar.app.dashboard.issues",
		permittedRole: [
			RoutePermittedRole.frontDesk,
			RoutePermittedRole.manager,
			RoutePermittedRole.admin,
			RoutePermittedRole.member,
			RoutePermittedRole.doctor,
			RoutePermittedRole.finance,
			RoutePermittedRole.hr,
		],
		type: "item",
		icon: (
			<ManageAccountsOutlinedIcon
				style={{ color: "#00455E", fontSize: "22px" }}
			/>
		),
		url: "/issues",
	},
	{
		id: " doctor",
		title: " Doctor",
		messageId: "sidebar.doctor",
		permittedRole: [RoutePermittedRole.admin, RoutePermittedRole.doctor],
		type: "collapse",
		icon: (
			<LocalHospitalOutlinedIcon
				style={{ color: "#00455E", fontSize: "22px" }}
			/>
		),
		children: [
			{
				id: "approvalstatus",
				title: " ApprovalStatus",
				messageId: "sidebar.doctor.status",
				permittedRole: [
					RoutePermittedRole.admin,
					RoutePermittedRole.doctor,
				],
				type: "item",
				url: "/doctor/status",
			},
			{
				id: "leavelogs",
				title: " Leave Logs",
				messageId: "sidebar.doctor.leavelogs",
				permittedRole: [
					RoutePermittedRole.admin,
					RoutePermittedRole.doctor,
				],
				type: "item",
				url: "/doctor/logs",
			},
		],
	},
	{
		id: " manager",
		title: " Manager",
		messageId: "sidebar.manager",
		permittedRole: [RoutePermittedRole.admin, RoutePermittedRole.manager],
		type: "collapse",
		icon: (
			<ManageAccountsOutlinedIcon
				style={{ color: "#00455E", fontSize: "22px" }}
			/>
		),
		children: [
			{
				id: "travelstatus",
				title: " TravelStatus",
				messageId: "sidebar.manager.travelapproval",
				permittedRole: [
					RoutePermittedRole.admin,
					RoutePermittedRole.manager,
				],
				type: "item",
				url: "/manager/travel-status",
			},
			{
				id: "travellogs",
				title: " TravelLogs",
				messageId: "sidebar.manager.travellogs",
				permittedRole: [
					RoutePermittedRole.admin,
					RoutePermittedRole.manager,
				],
				type: "item",
				url: "/manager/travel-logs",
			},
			{
				id: "roomstatus",
				title: "RoomStatus",
				messageId: "sidebar.manager.roomapproval",
				permittedRole: [
					RoutePermittedRole.admin,
					RoutePermittedRole.manager,
				],
				type: "item",
				url: "/manager/room-status",
			},
			{
				id: "roomlogs",
				title: " RoomLogs",
				messageId: "sidebar.manager.roomlogs",
				permittedRole: [
					RoutePermittedRole.admin,
					RoutePermittedRole.manager,
				],
				type: "item",
				url: "/manager/room-logs",
			},
			{
				id: "leavetatus",
				title: "LeaveStatus",
				messageId: "sidebar.manager.leaveapproval",
				permittedRole: [
					RoutePermittedRole.admin,
					RoutePermittedRole.manager,
				],
				type: "item",
				url: "/manager/leave-status",
			},
			{
				id: "leavelogs",
				title: " Leave Logs",
				messageId: "sidebar.manager.leavelogs",
				permittedRole: [
					RoutePermittedRole.admin,
					RoutePermittedRole.manager,
				],
				type: "item",
				url: "/manager/leave-logs",
			},
		],
	},
];
export default routesConfig;
