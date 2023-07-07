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
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AppSearch from "@crema/core/AppSearchBar";
import {
  createTravelRequestAction,
  deleteTravelRequestAction,
  getTravelRequestAction,
  updateTravelRequestAction,
} from "redux/actions/TravelRequest";
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

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GridCloseIcon } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
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

export default function FrontDesk() {
  const navigate = useNavigate();
  const [action, setAction] = React.useState({
    add: false,
    edit: false,
  });
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [editId, setEditId] = React.useState([]);
  const [searchs, setSearch] = React.useState("");
  const [travelModes, setTravelModes] = React.useState("");
  const [travelTypes, setTravelTypes] = React.useState("");
  const dispatch = useDispatch();

  /*  const loading = useSelector((state) => state.subPlanReducer.loading); */
  const GetTravelRequestData = useSelector(
    (state) => state.travelRequestReducer.GetTravelRequestData
  );
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  React.useEffect(() => {
    getTravelRequestAction(dispatch);
  }, []);
  const {
    register,
    handleSubmit,
    setValue,
    resetField,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const selectedTravelType = (event) => {
    setTravelTypes(event.target.value);
  };
  const selectedTravelMode = (event) => {
    setTravelModes(event.target.value);
  };

  const onAction = (data) => {
    if (action.add === true) {
      createTravelRequestAction(dispatch, data).then(() => {
        getTravelRequestAction(dispatch);
      });
      handleClose();
    } else if (action.edit === true) {
      updateTravelRequestAction(dispatch, editId, data).then(() => {
        getTravelRequestAction(dispatch);
        handleClose();
      });
    }
  };
  // delete icon btn
  const deleteBtnRow = async (id) => {
    const confirmBox = window.confirm("Do you really want to delete?");
    if (confirmBox === true) {
      await deleteTravelRequestAction(dispatch, id);
      getTravelRequestAction(dispatch);
    }
  };
  const handleAddButton1 = () => {
    setTravelModes("");
    setTravelTypes("");

    handleClickOpen();
    setAction({
      add: true,
      edit: false,
    });
  };
  const editButton = (id) => {
    // console.log(id);
    setEditId(id);
    handleClickOpen();
    setAction({
      add: false,
      edit: true,
    });
  };
  React.useEffect(() => {
    if (action.edit === true) {
      const fields = [
        "toDate",
        "fromDate",
        "trvlTo",
        "trvlFrom",
        "trvlPurpose",
        "trvlType",
        "trvlMode",
        "desc",
        "trvlExpenses",
      ];
      GetTravelRequestData?.map((user) => {
        if (user.id === editId) {
          fields.forEach((field) => {
            if (field === "trvlType") {
              setTravelTypes(user[field]);
              setValue("trvlType", user[field]);
            } else if (field === "trvlMode") {
              setTravelModes(user[field]);
              setValue("trvlMode", user[field]);
            } else {
              setValue(field, user[field]);
            }
          });
        }
      });
      // setValue('subPlanTitle', 'Suneel');
    } else if (action.add == true) {
      resetField("toDate");
      resetField("fromDate");
      resetField("trvlTo");
      resetField("trvlFrom");
      resetField("trvlPurpose");
      resetField("trvlType");
      resetField("trvlMode");
      resetField("desc");
      resetField("trvlExpenses");
    }
  }, [action]);
  const resetButton = () => {
    reset();
    setTravelTypes("");
    setTravelModes("");
  };
  const CancelButton = () => {
    handleClose();
    clearErrors();
  };
  const claimButton = () => {
    navigate("/travel/travel-claim-form");
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
                Travel Request
              </Button>
            </Box>
          </Box>
        </Box>

        <Dialog open={open}>
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
                      value={travelTypes}
                      label=" Travel Type"
                      onChange={selectedTravelType}
                    >
                      <MenuItem value="domestic">Domestic</MenuItem>
                      <MenuItem value="international">International</MenuItem>
                    </Select>
                  </FormControl>
                  <FormHelperText sx={{ ml: 4 }} error={true}>
                    {errors.trvlType && `${errors.trvlType.message}`}
                  </FormHelperText>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth size="medium">
                    <InputLabel id="demo-simple-select-label">
                      Travel Mode
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      name="trvlMode"
                      value={travelModes}
                      defaultSelected={travelModes}
                      label="Travel Mode "
                      onChange={selectedTravelMode}
                      inputProps={register("trvlMode", {
                        required: true,
                      })}
                    >
                      <MenuItem value="bus">Train</MenuItem>
                      <MenuItem value="flight">Flight</MenuItem>
                      <MenuItem value="bus">Bus</MenuItem>
                    </Select>
                    <FormHelperText sx={{ ml: 4 }} error={true}>
                      {errors.trvlMode && `${errors.trvlMode.message}`}
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
                <TableCell> Travel From </TableCell>
                <TableCell> Travel To </TableCell>
                <TableCell> Date From </TableCell>
                <TableCell> Date To </TableCell>
                <TableCell> Travel Type </TableCell>
                {/* <TableCell> Sub Category</TableCell> */}
                <TableCell> Travel Mode </TableCell>
                <TableCell> Travel Expenses </TableCell>
                <TableCell> Travel Description </TableCell>
                <TableCell> Status </TableCell>

                <TableCell> Action </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {GetTravelRequestData?.length > 0 &&
                GetTravelRequestData?.filter((item) => {
                  return Object.keys(item).some((key) => {
                    return String(item[key])
                      .toLocaleLowerCase()
                      .includes(String(searchs.toLocaleLowerCase()));
                  });
                })
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((item) => {
                    // console.log('first item', item);
                    /*   status: "P";
                  toDate: "2023-06-03";
                  trvlDtlList: [];
                  trvlExpenses: "32423";
                  trvlFoodList: [];
                  trvlFrom: "wrwerewr";
                  trvlHotelList: [];
                  trvlMode: "flight";
                  trvlOthBillList: [];
                  trvlPurpose: "rwerwe";
                  trvlTo: "rewrewr";
                  trvlType: "domestic";
                  userCode: "OR1011008"; */
                    return (
                      <TableRow key={item.id}>
                        <TableCell sx={{ minWidth: 120, align: "right" }}>
                          {item.trvlFrom}
                        </TableCell>
                        <TableCell sx={{ minWidth: 120, align: "right" }}>
                          {item.trvlTo}
                        </TableCell>
                        <TableCell sx={{ minWidth: 120, align: "right" }}>
                          {item.fromDate}
                        </TableCell>
                        <TableCell sx={{ minWidth: 120, align: "right" }}>
                          {item.toDate}
                        </TableCell>

                        <TableCell>
                          {item.trvlType.charAt(0).toUpperCase() +
                            item.trvlType.slice(1)}
                        </TableCell>
                        {/*   <TableCell sx={{ minWidth: 120, align: "right" }}>
                        {item.trvlMode}
                      </TableCell> */}
                        <TableCell>
                          {item.trvlMode.charAt(0).toUpperCase() +
                            item.trvlMode.slice(1)}
                        </TableCell>
                        <TableCell sx={{ minWidth: 130, align: "right" }}>
                          Rs. {item?.trvlExpenses}
                        </TableCell>
                        <TableCell sx={{ minWidth: 120, align: "right" }}>
                          {item?.desc}
                        </TableCell>
                        <TableCell sx={{ minWidth: 120, align: "right" }}>
                          {item?.status === "P" ? "Pending" : " Approved"}
                        </TableCell>

                        <TableCell>
                          {item.status === "P" ? (
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <Box sx={{ paddingRight: "13px" }}>
                                <Button
                                  variant="outlined"
                                  onClick={() => editButton(item.id)}
                                >
                                  <EditIcon />
                                </Button>
                              </Box>
                              <Box>
                                <DeleteIcon
                                  sx={{ color: "#098FDC" }}
                                  onClick={() => deleteBtnRow(item.id)}
                                />
                              </Box>
                            </Box>
                          ) : (
                            <Box>
                              <Button
                                onClick={claimButton}
                                color="primary"
                                variant="contained"
                              >
                                Claim
                              </Button>
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
            GetTravelRequestData?.length > 0 ? GetTravelRequestData?.length : ""
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
