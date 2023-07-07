export const apiUrl = "http://3.111.162.16:8762/api/admin";
// http://10.255.65.145:8080
//export const apiUrl = 'http://192.168.0.133:8900/api';

export default {
  auth: {
    login: `/userauth/authenticate/createToken`,
    /*   userProfile: `/userauth/authenticate/getLoggedInUserProfile`,
    saveUser: `${apiUrl}/userauth/saveUser`,
    getUserById: `${apiUrl}/userauth/getUserById`,
    deleteUserById: `${apiUrl}/userauth/deleteUserById`,
    updateUser: `${apiUrl}/userauth/updateUser`,
    authUser: `${apiUrl}/userauth/authenticate/login`,
    verifyOtp: `${apiUrl}/userauth/authenticate/verifyOtp`, */
  },
};
