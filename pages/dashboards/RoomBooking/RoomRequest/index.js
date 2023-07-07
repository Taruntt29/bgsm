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
import { Button } from "@mui/material";
import AppSearch from "@crema/core/AppSearchBar";
import { getTravelRequestAction } from "redux/actions/TravelRequest";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { getRoomRequestAction } from "redux/actions/Room";
export default function RoomRequest() {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchs, setSearch] = React.useState("");
  const dispatch = useDispatch();
  /*  const loading = useSelector((state) => state.subPlanReducer.loading); */
  const GetRoomRequestData = useSelector(
    (state) => state.GetRoomRequestReducer.GetRoomRequestData
  );
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  React.useEffect(() => {
    getTravelRequestAction(dispatch);
    getRoomRequestAction(dispatch);
  }, []);
  const handleAddButton1 = () => {
    navigate("/room/room-request-form");
  };
  return (
    <Container>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <AppSearch
              onChange={(e) => setSearch(e.target.value)}
              borderLight
              placeholder="Search…"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              columnGap: "2rem",
              marginRight: "5px",
            }}
          >
            <Box>
              <Button variant="contained" onClick={handleAddButton1}>
                Room Booking Request
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          {/*  {loading === true ? <AppLoader /> : ""} */}
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell> Booked Location </TableCell>
                <TableCell> Room Required </TableCell>
                <TableCell> CheckIn Date </TableCell>
                <TableCell> CheckOut Date </TableCell>
                <TableCell> Room Alloted </TableCell>
                {/* <TableCell> Sub Category</TableCell> */}
                <TableCell> Quest Category </TableCell>
                <TableCell> No of Guest </TableCell>
                <TableCell> Requirement </TableCell>
                <TableCell> Status </TableCell>
                {/* <TableCell> Action </TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {GetRoomRequestData?.length > 0 &&
                GetRoomRequestData?.filter((item) => {
                  return Object.keys(item).some((key) => {
                    return String(item[key])
                      .toLocaleLowerCase()
                      .includes(String(searchs.toLocaleLowerCase()));
                  });
                })
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((item) => {
                    /*                     bookingForLocation
: 
"Delhi"
bookingId
: 
"BGSM2023051308403400930"
checkInDate
: 
"2023-06-12"
checkOutDate
: 
"2023-06-15"
conveyanceRequired
: 
"Yes"
createdBy
: 
"OR1011007"
createdOn
: 
"2023-06-13T03:10:35.000+0000"
guestCategory
: 
"Special"
guestDetails
: 
[{id: 1, guestName: "deepak arora", guestId: "AP101"},…]
id
: 
1
location
: 
"Delhi"
numOfGuest
: 
"12"
numOfRoomAlloted
: 
null
numOfRoomRequired
: 
"6"
remarks
: 
null
requirement
: 
"blanket and 2 beds" */
                    return (
                      <TableRow key={item.id}>
                        <TableCell sx={{ minWidth: 140, align: "right" }}>
                          {item.bookingForLocation}
                        </TableCell>
                        <TableCell sx={{ minWidth: 130, align: "right" }}>
                          {item.numOfRoomRequired}
                        </TableCell>
                        <TableCell sx={{ minWidth: 130, align: "right" }}>
                          {item.checkInDate}
                        </TableCell>
                        <TableCell sx={{ minWidth: 140, align: "right" }}>
                          {item.checkInDate}
                        </TableCell>
                        <TableCell sx={{ minWidth: 140, align: "right" }}>
                          {item.numOfRoomAlloted}
                        </TableCell>
                        <TableCell sx={{ minWidth: 140, align: "right" }}>
                          {item.guestCategory}
                        </TableCell>
                        {/* <TableCell>
                          {item.trvlMode.charAt(0).toUpperCase() +
                            item.trvlMode.slice(1)}
                        </TableCell> */}
                        <TableCell sx={{ minWidth: 130, align: "right" }}>
                          {item?.numOfGuest}
                        </TableCell>
                        <TableCell sx={{ minWidth: 140, align: "right" }}>
                          {item?.requirement}
                        </TableCell>
                        <TableCell sx={{ minWidth: 120, align: "right" }}>
                          {item?.status === "Pending_With_Location_Manager"
                            ? "Pending"
                            : " Approved"}
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
            GetRoomRequestData?.length > 0 ? GetRoomRequestData?.length : ""
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
