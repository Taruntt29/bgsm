import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box, Container } from "@mui/system";
import { Button, Dialog } from "@mui/material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import CheckIcon from "@mui/icons-material/Check";
import AppSearch from "@crema/core/AppSearchBar";
//import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jwtAxios from "@crema/services/auth/jwt-auth";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { getTravelRequestPendingByManagerAction } from "redux/actions/TravelRequest";
import AppLoader from "@crema/core/AppLoader";
const ApprovalStatus = () => {
  const dispatch = useDispatch();
  const GetTravelRequestPeningManagerData = useSelector(
    (state) =>
      state.travelRequestPendingManagerReducer.GetTravelRequestPeningManagerData
  );
  const loading = useSelector(
    (state) => state.travelRequestPendingManagerReducer.loading
  );

  const [searchInputValues, setSearchInputValues] = useState("");
  const [open, setOpen] = React.useState(false);
  //const [showMore, setShowMore] = useState(0);

  const handleClose = () => {
    setOpen(false);
  };
  /*  const handelShow = (id) => {
    setShowMore(id);
  }; */

  useEffect(() => {
    getTravelRequestPendingByManagerAction(dispatch);
  }, []);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const approveBtn = async (id) => {
    const { value: text } = await Swal.fire({
      input: "text",
      inputLabel: "Add Remarks",
      inputPlaceholder: "Add Remarks...",
      buttons: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Approve",
      showCancelButton: true,
    });
    if (text) {
      if (text === null) return false;
      if (text === "") {
        Swal.showInputError("You need to write something!");
        return false;
      }
      const payload = {
        bookingId: id,
        remarks: text,
      };
      await jwtAxios
        .post(
          "http://3.111.162.16:8762/api/roombooking/room-booking-approve",
          payload
        )
        .then(() => {
          getTravelRequestPendingByManagerAction(dispatch);
        })
        .then(() => {
          toast
            .success("Approved", {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            })
            .catch(() => {
              toast.error("Something went Wrong", {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                progress: undefined,
                theme: "colored",
              });
            });
        });
    }
  };

  const rejectBtn = async (id) => {
    const { value: text } = await Swal.fire({
      input: "text",
      inputLabel: "Add Remarks",
      inputPlaceholder: " Add Remarks...",
      buttons: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Reject",
      showCancelButton: true,
    });
    if (text) {
      if (text === null) return false;
      if (text === "") {
        Swal.showInputError("You need to write something!");
        return false;
      }
      const payload = {
        bookingId: id,
        remarks: text,
      };
      jwtAxios
        .post(
          "http://3.111.162.16:8762/api/roombooking/room-booking-reject",
          payload
        )
        .then(() => {
          getTravelRequestPendingByManagerAction(dispatch);
        })
        .then(() => {
          toast
            .success("Rejected", {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            })
            .catch(() => {
              toast.error("Something went Wrong", {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                progress: undefined,
                theme: "colored",
              });
            });
        });
    }
  };

  return (
    <>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <AppSearch
              onChange={(e) => setSearchInputValues(e.target.value)}
              borderLight
              placeholder="Search…"
            />
          </Box>
          <Box sx={{ marginRight: "5px" }}>
            {/* <Button variant="contained" onClick={handleClickOpen}>
              Add Data
            </Button> */}
          </Box>
          <Dialog
            // style={{ backgroundColor: "#7F7F7F", opacity: ".9" }}
            open={open}
            onClose={handleClose}
          ></Dialog>
          <ToastContainer />
        </Box>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            {loading === true ? <AppLoader /> : ""}
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell> User Name </TableCell>
                  <TableCell> Travel From </TableCell>
                  <TableCell> Travel To </TableCell>
                  <TableCell> From Date </TableCell>
                  <TableCell> To Date </TableCell>
                  <TableCell> Claim Amount </TableCell>
                  <TableCell> Leave Status </TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {GetTravelRequestPeningManagerData?.length > 0 &&
                  GetTravelRequestPeningManagerData?.filter((item) => {
                    return Object.keys(item).some((key) => {
                      return String(item[key])
                        .toLocaleLowerCase()
                        .includes(
                          String(searchInputValues.toLocaleLowerCase())
                        );
                    });
                  })
                    ?.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                    .map((item, index) => {
                      // const isTestOpen = item.blogId === showMore;
                      // console.log("first item", item);
                      return (
                        <TableRow key={index}>
                          <TableCell>{item.createdBy}</TableCell>
                          <TableCell>{item.trvlFrom}</TableCell>
                          <TableCell>{item.trvlTo}</TableCell>
                          <TableCell>{item.fromDate}</TableCell>
                          <TableCell>{item.toDate}</TableCell>
                          <TableCell>Rs {item.trvlExpenses}</TableCell>
                          <TableCell>
                            {item.status === "P" ? "Pending" : "Approved"}
                          </TableCell>
                          <TableCell align="center">
                            {item.status === "P" ? (
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <Box>
                                  <Button
                                    onClick={() => approveBtn(item.bookingId)}
                                    variant="outlined"
                                    color="primary"
                                    startIcon={<CheckIcon />}
                                  >
                                    Approve
                                  </Button>
                                </Box>
                                <Box>
                                  <Button
                                    onClick={() => rejectBtn(item.bookingId)}
                                    style={{ marginLeft: "12px" }}
                                    variant="outlined"
                                    color="error"
                                    startIcon={<ClearOutlinedIcon />}
                                  >
                                    Reject
                                  </Button>
                                </Box>
                              </Box>
                            ) : (
                              <Box sx={{ ml: 10 }}>
                                <TableCell align="center">
                                  {item.status}
                                </TableCell>
                              </Box>
                            )}
                          </TableCell>
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
              GetTravelRequestPeningManagerData?.length > 0
                ? GetTravelRequestPeningManagerData?.length
                : ""
            }
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Container>
    </>
  );
};
export default ApprovalStatus;
