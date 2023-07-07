import React from "react";
import { Provider } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import AuthRoutes from "@crema/utility/AuthRoutes";
import AppContextProvider from "@crema/utility/AppContextProvider";
import AppThemeProvider from "@crema/utility/AppThemeProvider";
import AppStyleProvider from "@crema/utility/AppStyleProvider";
import AppLocaleProvider from "@crema/utility/AppLocaleProvider";
import AppLayout from "@crema/core/AppLayout";
import configureStore, { history } from "redux/store";
// import FirebaseAuthProvider from "@crema/services/auth/firebase/FirebaseAuthProvider";
import { BrowserRouter } from "react-router-dom";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import JWTAuthAuthProvider from "@crema/services/auth/jwt-auth/JWTAuthProvider";
window.ClassicEditor = ClassicEditor;
const store = configureStore();

const App = () => (
  <AppContextProvider>
    <Provider store={store}>
      <AppThemeProvider>
        <AppStyleProvider>
          <AppLocaleProvider>
            <BrowserRouter history={history}>
              {/* <FirebaseAuthProvider> */}
              <JWTAuthAuthProvider>
                <AuthRoutes>
                  <CssBaseline />
                  <AppLayout />
                </AuthRoutes>
                {/* </FirebaseAuthProvider> */}
              </JWTAuthAuthProvider>
            </BrowserRouter>
          </AppLocaleProvider>
        </AppStyleProvider>
      </AppThemeProvider>
    </Provider>
  </AppContextProvider>
);

export default App;
