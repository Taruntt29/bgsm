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
import { getRoomBookingPendingAction } from "redux/actions/Room";
import Swal from "sweetalert2";
const RoomStatus = () => {
  const dispatch = useDispatch();
  const GetRoomStatusData = useSelector(
    (state) => state.GetRoomStatusReducer.GetRoomStatusData
  );
  console.log("GetLeaveStatusData", GetRoomStatusData);

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
    getRoomBookingPendingAction(dispatch);
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
      inputAttributes: {
        "aria-label": "Type your message here",
      },
      buttons: true,
      confirmButtonColor: "blue'",
      confirmButtonText: "Approve",
      showCancelButton: true,
    });

    if (text) {
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
          getRoomBookingPendingAction(dispatch);
        })
        .then(() => {
          toast
            .success("Approved Room Booking", {
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
      inputAttributes: {
        "aria-label": "Type your message here",
      },
      buttons: true,
      confirmButtonColor: "#CC0000",
      confirmButtonText: "Reject",
      showCancelButton: true,
    });

    if (text) {
      const payload = {
        bookingId: id,
        remarks: text,
      };
      await jwtAxios
        .post(
          "http://3.111.162.16:8762/api/roombooking/room-booking-reject",
          payload
        )
        .then(() => {
          getRoomBookingPendingAction(dispatch);
        })
        .then(() => {
          toast
            .success("Rejected Room Booking", {
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
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell> User Code </TableCell>
                  <TableCell> Booking Location</TableCell>
                  <TableCell> checkInDate </TableCell>
                  <TableCell> checkOutDate </TableCell>
                  <TableCell> Guest Category </TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {GetRoomStatusData?.data?.length > 0 &&
                  GetRoomStatusData?.data
                    ?.filter((item) => {
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
                          <TableCell>{item.bookingForLocation}</TableCell>
                          <TableCell>{item.checkInDate}</TableCell>
                          <TableCell>{item.checkOutDate}</TableCell>
                          <TableCell>{item.guestCategory}</TableCell>
                          {/*  <TableCell>
                            {item.Pending_With_Location_Manager}
                          </TableCell> */}
                          <TableCell align="center">
                            {item.status === "Pending_With_Location_Manager" ? (
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
              GetRoomStatusData?.data?.length > 0
                ? GetRoomStatusData?.data?.length
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
export default RoomStatus;
