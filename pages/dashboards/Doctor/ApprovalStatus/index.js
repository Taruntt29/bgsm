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
import { getLeaveStatusAction } from "redux/actions/LeaveStatus";
import { useDispatch, useSelector } from "react-redux";

const DoctorApprovalStatus = () => {
  const dispatch = useDispatch();
  const GetLeaveStatusData = useSelector(
    (state) => state.GetLeaveStatusReducer.GetLeaveStatusData
  );
  const [searchInputValues, setSearchInputValues] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    getLeaveStatusAction(dispatch);
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
    const payload = {
      trxNo: id,
    };
    const confirmBox = window.confirm("Do you really want to Forward?");
    if (confirmBox === true) {
      await jwtAxios
        .post("http://3.111.162.16:8762/api/leave/leave-forward", payload)
        .then(() => {
          getLeaveStatusAction(dispatch);
        })
        .then(() => {
          toast
            .success("Forward Leave", {
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
    const payload = {
      trxNo: id,
    };
    const confirmBox = window.confirm("Do you really want to Reject?");
    if (confirmBox === true) {
      await jwtAxios
        .post("http://3.111.162.16:8762/api/leave/leave-reject", payload)
        .then(() => {
          getLeaveStatusAction(dispatch);
        })
        .then(() => {
          toast
            .success("Rejected Leave", {
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
                  <TableCell> Leave Type</TableCell>
                  <TableCell> Leave From </TableCell>
                  <TableCell> Leave To </TableCell>
                  <TableCell> Status </TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {GetLeaveStatusData?.data?.length > 0 &&
                  GetLeaveStatusData?.data
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

                          {/*  <TableCell>
                            {isTestOpen
                              ? item.blogCmtComments
                              : item.blogCmtComments?.slice(0, 180)}

                            {item.blogCmtComments.length > 150 ? (
                              isTestOpen ? (
                                <span
                                  style={{ color: "red" }}
                                  onClick={() => handelShow(0)}
                                >
                                  ...Show less
                                </span>
                              ) : (
                                <span
                                  style={{ color: "red" }}
                                  onClick={() => handelShow(item.blogId)}
                                >
                                  ...Show more
                                </span>
                              )
                            ) : (
                              item.blogCmtComments
                            )}
                          </TableCell> */}
                          <TableCell>{item.leaveType}</TableCell>
                          <TableCell>{item.leaveFrom}</TableCell>
                          <TableCell>{item.leaveTo}</TableCell>
                          <TableCell> {item.statusCode}</TableCell>
                          <TableCell>
                            <Box
                              sx={{
                                display: "flex",
                                // alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Box>
                                <Button
                                  onClick={() => approveBtn(item.trxNo)}
                                  /*  style={{ marginLeft: "-160px" }} */
                                  variant="outlined"
                                  color="primary"
                                  startIcon={<CheckIcon />}
                                >
                                  Forward
                                </Button>
                              </Box>
                              <Box>
                                <Button
                                  onClick={() => rejectBtn(item.trxNo)}
                                  style={{ marginLeft: "12px" }}
                                  variant="outlined"
                                  color="error"
                                  startIcon={<ClearOutlinedIcon />}
                                >
                                  Reject
                                </Button>
                              </Box>
                            </Box>
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
              GetLeaveStatusData?.data?.length > 0
                ? GetLeaveStatusData?.data?.length
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
export default DoctorApprovalStatus;
