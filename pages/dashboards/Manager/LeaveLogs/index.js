import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box, Container } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Grid } from "@mui/material";
import AppSearch from "@crema/core/AppSearchBar";
import { getLeaveLogsAction } from "redux/actions/LeaveStatus";
import { getDoctorLogsAction } from "redux/actions/Doctor";
export default function ManagerStatusLogs() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const dispatch = useDispatch();
  const GetDoctorLogsData = useSelector(
    (state) => state.GetDoctorLogsReducer.GetDoctorLogsData
  );
  //const loading = useSelector((state) => state.subPlanReducer.loading);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  React.useEffect(() => {
    getLeaveLogsAction(dispatch);
    getDoctorLogsAction(dispatch);
  }, []);

  return (
    <Container>
      <Box>
        <Grid
          container
          sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}
        >
          <Grid>
            <AppSearch
              /*  onChange={(e) => setSearchInputValues(e.target.value)} */
              borderLight
              placeholder="Search…"
            />
          </Grid>
        </Grid>
      </Box>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          {/*  {loading === true ? <AppLoader /> : ""} */}
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {/*  <TableCell> Title </TableCell> */}
                <TableCell> Applied Date </TableCell>
                <TableCell> User Name</TableCell>
                <TableCell> Type of Leave </TableCell>
                <TableCell> Leave From Date </TableCell>
                <TableCell> Leave To Date </TableCell>
                <TableCell> Action </TableCell>
                {/*  <TableCell> Action </TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {GetDoctorLogsData?.data.length > 0 &&
                GetDoctorLogsData?.data
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((item) => {
                    // console.log('first item', item);
                    return (
                      <TableRow key={item.id}>
                        <TableCell>
                          {moment(item.createdOn).format("YYYY-MM-DD")}
                        </TableCell>
                        <TableCell>{item.userName}</TableCell>
                        <TableCell>{item.leaveType}</TableCell>
                        <TableCell>{item.leaveFrom} </TableCell>
                        <TableCell> {item?.leaveTo} </TableCell>

                        <TableCell> {item?.currentStatus} </TableCell>
                        {/* leaveApplied */}
                        {/* <TableCell>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Box sx={{ paddingRight: "13px" }}>
                            <Button
                              variant="outlined"
                              onClick={() => editButton(item.subPlanId)}
                            >
                              <EditIcon />
                            </Button>
                          </Box>
                          <Box>
                            <DeleteIcon
                              sx={{ color: "#098FDC" }}
                              onClick={() => deleteBtnRow(item.subPlanId)}
                            />
                          </Box>
                        </Box>
                      </TableCell> */}
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={
            GetDoctorLogsData?.data?.length > 0
              ? GetDoctorLogsData?.data?.length
              : ""
          }
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Container>
  );
}
