export const authRole = {
  admin: ["admin"],
  user: [
    "USER",
    "ADMIN",
    "MANAGER",
    "MEMBER",
    "FRONT-DESK",
    "DOCTOR",
    "FINANCE-MANAGER",
    "HR-MANAGER",
  ],
};

export const RoutePermittedRole = {
  admin: "ADMIN",
  user: "USER",
  manager: "MANAGER",
  member: "MEMBER",
  frontDesk: "FRONT-DESK",
  doctor: "DOCTOR",
  finance: "FINANCE-MANAGER",
  hr: "HR-MANAGER",
};
export const defaultUser = {
  displayName: "John Alex",
  email: "demo@example.com",
  token: "access-token",
  role: "user",
  photoURL: "/assets/images/avatar/A11.jpg",
};
//export const baseURL = "https://crema-mongo-api.herokuapp.com/api/";
export const baseURL = "http://3.111.162.16:8762/api/auth/";
export const initialUrl = "/travel/travel-request"; // this url will open after login
