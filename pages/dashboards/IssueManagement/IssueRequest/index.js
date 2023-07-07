import * as React from "react";
import { Box } from "@mui/system";
import { Button, Grid, Hidden } from "@mui/material";

import AppSearchBar from "@crema/core/AppSearchBar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppsContainer from "@crema/core/AppsContainer";
import AppsContent from "@crema/core/AppsContainer/AppsContent";
import AppTable1 from "../IssueTable";
import AppsPagination from "@crema/core/AppsPagination";
import AppGridContainer from "@crema/core/AppGridContainer";
import AppsHeader from "@crema/core/AppsContainer/AppsHeader";
import CreateIssueRequest from "../RequestForm";
import AppDialog from "@crema/core/AppDialog";
import { Fonts } from "shared/constants/AppEnums";

export default function IssueRequest() {
	const [open, setOpen] = React.useState(false);
	// const [page, setPage] = React.useState(1);

	const setSearch = () => {};
	const onPageChange = () => {};

	const dataCount = 0;
	const page = 0;

	return (
		<AppGridContainer>
			<Grid item xs={12}>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						width: "100%",
					}}
				>
					<Box
						component="h2"
						variant="h2"
						sx={{
							fontSize: 16,
							color: "text.primary",
							fontWeight: Fonts.SEMI_BOLD,
						}}
					>
						Issue List
					</Box>

					<Button variant="contained" onClick={() => setOpen(true)}>
						Create Request
					</Button>
				</Box>
				<AppsContainer fullView>
					<AppsHeader>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								width: 1,
							}}
						>
							<AppSearchBar
								iconPosition="right"
								overlap={false}
								onChange={(e) => setSearch(e.target.value)}
								placeholder={"Search here..."}
							/>
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
									ml: "auto",
								}}
							>
								<Hidden smDown>
									<AppsPagination
										rowsPerPage={10}
										count={dataCount}
										page={page}
										onPageChange={onPageChange}
									/>
								</Hidden>
							</Box>
						</Box>
					</AppsHeader>
					<AppsContent
						sx={{
							paddingTop: 2.5,
							paddingBottom: 2.5,
						}}
					>
						<AppTable1 />

						<AppDialog
							open={open}
							onClose={() => setOpen(false)}
							title="create request"
						>
							<CreateIssueRequest />
						</AppDialog>
						<ToastContainer
							autoClose={4000}
							hideProgressBar={true}
						/>
					</AppsContent>
				</AppsContainer>
			</Grid>
		</AppGridContainer>
	);
}
