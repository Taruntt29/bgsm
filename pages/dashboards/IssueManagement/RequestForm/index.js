import * as React from "react";
import { Box, Button, Grid } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
import MenuItem from "@mui/material/MenuItem";
import { Formik, Form } from "formik";
import * as yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import AppTextField from "@crema/core/AppFormComponents/AppTextField";
import AppGridContainer from "@crema/core/AppGridContainer";

const validationSchema = yup.object({});

export default function CreateIssueRequest() {
	// const navigate = useNavigate();
	// const [travelTypes, setTravelTypes] = React.useState("");
	// const dispatch = useDispatch();
	function onKeyDown(keyEvent) {
		if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
			keyEvent.preventDefault();
		}
	}
	return (
		<Formik
			validateOnChange={true}
			validateOnBlur={true}
			initialValues={{
				issueCategory: "Electricity",
				buildingName: "",
				floorNum: "",
				issueDescription: "",
			}}
			enableReinitialize={true}
			validationSchema={validationSchema}
			onSubmit={async (data, actions) => {
				console.log("🚀 ~ file: index.js:35 ~ onSubmit={ ~ actions:", actions)
				console.log(
					"🚀 ~ file: index.js:62 ~ onSubmit={ ~ data:",
					data
				);
				actions.setSubmitting(true);
				actions.setSubmitting(false);
			}}
		>
			{(formProps) => (
				<Form autoComplete="off" onKeyDown={onKeyDown}>
					<AppGridContainer spacing={5} sx={{ pt: 2 }}>
						<Grid item xs={12} sm={6}>
							<AppTextField
								select
								name="issueCategory"
								fullWidth
								label={'Issue Category'}
								InputLabelProps={{
									shrink: true,
								}}
								inputProps={{
									maxLength: 10,
								}}
							>
								<MenuItem value="Electricity ">Electricity </MenuItem>
							</AppTextField>
						</Grid>
						<Grid item xs={12} sm={6}>
							<AppTextField
								name="buildingName"
								fullWidth
								label="Building Name"
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<AppTextField
								name="floorNum"
								fullWidth
								label="Floor No."
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</Grid>
						<Grid item xs={12}>
							<AppTextField
								name="issueDescription"
								fullWidth
								label="Issue Description"
								multiline
								rows={2}
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</Grid>
						<Grid item xs={12}>
							<Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'end',
                            }}>
								<Button
									color="primary"
									variant="outlined"
                                    sx={{
                                        mr: 2
                                    }}
									onClick={() => formProps.resetForm()}
								>
									Reset
								</Button>
								<Button
									variant="contained"
									type="submit"
								>
									Create
								</Button>
							</Box>
						</Grid>
					</AppGridContainer>
				</Form>
			)}
		</Formik>
	);
}
