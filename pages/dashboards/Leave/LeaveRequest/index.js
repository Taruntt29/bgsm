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
import {
  Button,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
/* import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete"; */
//import AppSearch from "@crema/core/AppSearchBar";
import { useDispatch, useSelector } from "react-redux";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
//import AppLoader from "@crema/core/AppLoader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GridCloseIcon } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { getLeaveRequestAction } from "redux/actions/Leave";
import moment from "moment";
const schema = yup
  .object({
    trvlFrom: yup
      .string()
      .label("Travel From")
      .trim()
      .required()
      .min(3)
      .max(200),
    /*  subPlanPrice: yup
      .number()
      .label(" Price")
      .min(1, "Minimum Price. 0")
      .max(999999, "Maximum Price.  999999")
      .transform((value) => (isNaN(value) ? undefined : value))
      .nullable()
      .required(),
    memberCategory: yup.string().required("You must select a member category"),
    subPlanType: yup.string().required("You must select a plan duration"), */
  })
  .required();

export default function LeaveRequest() {
  const [action, setAction] = React.useState({
    add: false,
    edit: false,
  });
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [leaveType, setLeaveType] = React.useState("");
  const dispatch = useDispatch();
  const GetLeaveRequestData = useSelector(
    (state) => state.GetLeaveReducer.GetLeaveRequestData
  );
  //const loading = useSelector((state) => state.subPlanReducer.loading);
  const navigate = useNavigate();
  const handleClickOpen = () => {
    navigate("/leave/new-request");
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  React.useEffect(() => {
    getLeaveRequestAction(dispatch);
  }, []);
  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const subLeaveTypeSelection = (event) => {
    setLeaveType(event.target.value);
  };
  const onAction = (data) => {
    console.log("TravelRequest", data);
  };

  const handleAddButton1 = () => {
    handleClickOpen();
    setAction({
      add: true,
      edit: false,
    });
  };
  /*  const editButton = (id) => {
    // console.log(id);
    setEditId(id);
    handleClickOpen();
    setAction({
      add: false,
      edit: true,
    });
  };
 */

  const resetButton = () => {
    reset();
  };
  const CancelButton = () => {
    clearErrors();
  };

  return (
    <Container>
      <Box>
        <Grid
          container
          sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}
        >
          <Grid>
            <Typography sx={{ fontFamily: "auto" }} variant="h1">
              Employee Leave Request
            </Typography>
          </Grid>

          <Grid>
            <Button variant="contained" onClick={handleAddButton1}>
              New Leave Request
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ pt: 2 }}>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth variant="standard">
              <InputLabel id="demo-simple-select-label">
                Type of Leave
              </InputLabel>
              <Select
                /* {...register("trvlMode")} */
                labelId="demo-simple-select-label"
                name="trvlMode"
                value={leaveType}
                defaultSelected={leaveType}
                label="Type of Leave "
                onChange={subLeaveTypeSelection}
                inputProps={register("trvlMode", {
                  required: true,
                })}
              >
                <MenuItem value="cl">Casual Leave</MenuItem>
                <MenuItem value="sl">Sick Leave</MenuItem>
                <MenuItem value="al">Annual Leave</MenuItem>
              </Select>
              <FormHelperText sx={{ ml: 4 }} error={true}>
                {errors.subPlanType && `${errors.subPlanType.message}`}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl variant="standard" fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                /* {...register("trvlMode")} */
                labelId="demo-simple-select-label"
                name="trvlMode"
                /* value={subPlan} */
                /*   defaultSelected={subPlan} */
                label="Status "
                /* onChange={subPlanType} */
                inputProps={register("trvlMode", {
                  required: true,
                })}
              >
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="reject">Reject</MenuItem>
                <MenuItem value="approved">Approved</MenuItem>
              </Select>
              <FormHelperText sx={{ ml: 4 }} error={true}>
                {errors.subPlanType && `${errors.subPlanType.message}`}
              </FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={3}>
            <TextField
              {...register("fromDate")}
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              name="fromDate"
              label="From Date"
              id="standard-basic"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              {...register("toDate")}
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              name="toDate"
              label="To Date"
              id="standard-basic"
              variant="standard"
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="outlined">Search…</Button>
            <Button sx={{ ml: 4 }} variant="outlined" color="error">
              Clear
            </Button>
          </Grid>
        </Grid>
        <Dialog>
          <form onSubmit={handleSubmit(onAction)}>
            <DialogTitle>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography sx={{ p: 1, fontFamily: "auto" }} variant="h1">
                    {action.add === true
                      ? " Add Travel Request"
                      : action.edit === true
                      ? "Edit Travel Request"
                      : ""}
                  </Typography>
                </Box>
                <Box sx={{ pt: 1 }}>
                  <GridCloseIcon size="large" onClick={CancelButton} />
                </Box>
              </Box>
            </DialogTitle>
            <DialogContent>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={5}
                sx={{ pt: 2 }}
              >
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register("trvlFrom")}
                    type="text"
                    fullWidth
                    name="trvlFrom"
                    id="outlined-basic"
                    label=" Travel From "
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register("trvlTo")}
                    type="text"
                    fullWidth
                    name="trvlTo"
                    id="outlined-basic"
                    label=" Travel To "
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register("trvlPurpose")}
                    type="text"
                    fullWidth
                    name="trvlPurpose"
                    id="outlined-basic"
                    label=" Travel Purpose "
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register("fromDate")}
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    name="fromDate"
                    id="outlined-basic"
                    label="Travel From Date"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register("toDate")}
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    name="toDate"
                    id="outlined-basic"
                    label="Travel To Date"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth size="medium">
                    <InputLabel id="demo-simple-select-label">
                      Travel Type
                    </InputLabel>
                    <Select
                      inputProps={register("trvlType", {
                        required: true,
                      })}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="trvlType"
                      /*   value={memberCategorys} */
                      label=" Travel Type"
                      /*   onChange={memberCategorySelection} */
                    >
                      <MenuItem value="domestic">Domestic</MenuItem>
                      <MenuItem value="international">International</MenuItem>
                    </Select>
                  </FormControl>
                  <FormHelperText sx={{ ml: 4 }} error={true}>
                    {errors.memberCategory &&
                      `${errors.memberCategory.message}`}
                  </FormHelperText>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth size="medium">
                    <InputLabel id="demo-simple-select-label">
                      Travel Mode
                    </InputLabel>
                    <Select
                      /* {...register("trvlMode")} */
                      labelId="demo-simple-select-label"
                      name="trvlMode"
                      /* value={subPlan} */
                      /* defaultSelected={subPlan} */
                      label="Travel Mode "
                      /* onChange={subPlanType} */
                      inputProps={register("trvlMode", {
                        required: true,
                      })}
                    >
                      <MenuItem value="bus">Train</MenuItem>
                      <MenuItem value="flight">Flight</MenuItem>
                      <MenuItem value="bus">Bus</MenuItem>
                    </Select>
                    <FormHelperText sx={{ ml: 4 }} error={true}>
                      {errors.subPlanType && `${errors.subPlanType.message}`}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register("trvlExpenses")}
                    type="number"
                    fullWidth
                    name="trvlExpenses"
                    id="outlined-basic"
                    label=" Travel Expenses "
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    {...register("desc")}
                    type="text"
                    fullWidth
                    multiline
                    rows={2}
                    name="desc"
                    id="outlined-basic"
                    label=" Travel Description"
                    variant="outlined"
                  />
                  {/* <FormHelperText sx={{ ml: 4 }} error={true}>
                    {errors.subPlanPrice && `${errors.subPlanPrice.message}`}
                  </FormHelperText> */}
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Grid
                spacing={3}
                container
                direction="row"
                justifyContent="flex-end"
              >
                <Grid item>
                  <Button
                    color="primary"
                    variant="outlined"
                    onClick={resetButton}
                  >
                    Reset
                  </Button>
                </Grid>
                <Grid sx={{ mr: 3 }} item>
                  <Button variant="contained" type="submit" sx={{ mb: 2 }}>
                    {action.add === true
                      ? "Add"
                      : action.edit === true
                      ? "Update"
                      : ""}
                  </Button>
                </Grid>
              </Grid>
            </DialogActions>
          </form>
        </Dialog>
        <ToastContainer autoClose={4000} hideProgressBar={true} />
      </Box>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          {/*  {loading === true ? <AppLoader /> : ""} */}
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {/*  <TableCell> Title </TableCell> */}
                <TableCell> Applied Date </TableCell>
                {/* <TableCell> Sub Category</TableCell> */}
                <TableCell> Type of Leave </TableCell>
                <TableCell> Leave From Date </TableCell>
                <TableCell> Leave To Date </TableCell>
                <TableCell> No of Days </TableCell>
                <TableCell> Current Status </TableCell>
                {/*  <TableCell> Action </TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {GetLeaveRequestData?.data
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item) => {
                  // console.log('first item', item);
                  return (
                    <TableRow key={item.id}>
                      <TableCell>
                        {moment(item.createdOn).format("YYYY-MM-DD")}
                      </TableCell>
                      <TableCell>{item.leaveType}</TableCell>
                      <TableCell>{item.leaveFrom} </TableCell>
                      <TableCell> {item?.leaveTo} </TableCell>
                      <TableCell> {item?.leaveApplied} </TableCell>
                      <TableCell> {item?.statusCode} </TableCell>
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
            GetLeaveRequestData?.data?.length > 0
              ? GetLeaveRequestData?.data?.length
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
