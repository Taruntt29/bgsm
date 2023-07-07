import React from "react";
import Button from "@mui/material/Button";
import { Form, Formik } from "formik";
import * as yup from "yup";
import AppInfoView from "@crema/core/AppInfoView";
import Box from "@mui/material/Box";
import IntlMessages from "@crema/utility/IntlMessages";
import { useIntl } from "react-intl";
import AppTextField from "@crema/core/AppFormComponents/AppTextField";
import { useAuthMethod } from "@crema/utility/AuthHooks";
import { Fonts } from "shared/constants/AppEnums";
// import { MenuItem } from '@mui/material';

const validationSchema = yup.object({
  username: yup.string().required("Please Enter User Code ", {
    /* <IntlMessages id="validation.usernameRequired" /> */
  }),
  password: yup.string().required("Please Enter Password", {
    /* <IntlMessages id="validation.passwordRequired" /> */
  }),
  // loginType: yup
  //   .string()
  //   .required(<IntlMessages id='validation.logintypeRequired' />),
});

const SigninJwtAuth = () => {
  const { signInUser } = useAuthMethod();
  const { messages } = useIntl();

  // const loginTypeOptions = [{
  //   value: "vendor",
  //   label: "Vendor"
  // }, {
  //   value: "employee",
  //   label: "Employee"
  // }];

  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", mb: 5 }}>
        <Formik
          validateOnChange={true}
          initialValues={{
            username: "",
            password: "",
            // loginType : '',
          }}
          validationSchema={validationSchema}
          onSubmit={(data, { setSubmitting }) => {
            setSubmitting(true);
            signInUser({
              userCode: data.username,
              password: null,
            });
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form style={{ textAlign: "left" }} noValidate autoComplete="off">
              <Box sx={{ mb: { xs: 5, xl: 8 } }}>
                <AppTextField
                  placeholder={messages["common.userName"]}
                  name="username"
                  label={<IntlMessages id="common.userName" />}
                  variant="outlined"
                  sx={{
                    width: "100%",
                    "& .MuiInputBase-input": {
                      fontSize: 14,
                    },
                  }}
                />
              </Box>

              <Box sx={{ mb: { xs: 5, xl: 8 } }}>
                <AppTextField
                  type="password"
                  placeholder={messages["common.password"]}
                  label={<IntlMessages id="common.password" />}
                  name="password"
                  variant="outlined"
                  sx={{
                    width: "100%",
                    "& .MuiInputBase-input": {
                      fontSize: 14,
                    },
                  }}
                />
              </Box>
              {/*
              <Box  sx={{ mb: { xs: 5, xl: 8 } }}>
                <AppTextField
                  select
                  name='loginType'
                  fullWidth
                  label='Login Type'
                  variant='outlined'
                  sx={{
                    width: '100%',
                    '& .MuiInputBase-input': {
                      fontSize: 14,
                    },
                  }}
                >
                  {loginTypeOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </AppTextField>
              </Box>

                  */}
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={isSubmitting}
                  sx={{
                    minWidth: 160,
                    fontWeight: Fonts.REGULAR,
                    fontSize: 16,
                    textTransform: "capitalize",
                    padding: "4px 16px 8px",
                  }}
                >
                  <IntlMessages id="common.login" />
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Box>
      <AppInfoView />
    </Box>
  );
};

export default SigninJwtAuth;
