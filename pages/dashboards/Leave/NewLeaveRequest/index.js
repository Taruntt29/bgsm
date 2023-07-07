import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import {
  createLeaveRequestAction,
  getLeaveBalanceAction,
} from "redux/actions/Leave";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function index() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    /*   ,
    setValue,
    resetField,
    clearErrors,
    reset, */

    /*  formState: { errors }, */
    reset,
  } = useForm({
    /* mode: "onChange",
    resolver: yupResolver(schema), */
  });
  const onSubmit = (data) => {
    createLeaveRequestAction(dispatch, data).then(() => {
      reset();
    });
  };
  const GetLeaveBalanceData = useSelector(
    (state) => state.GetLeaveBalanceReducer.GetLeaveBalanceData
  );
  useEffect(() => {
    getLeaveBalanceAction(dispatch);
  }, []);
  return (
    <Container>
      <Box sx={{ mt: 3, mb: 5 }}>
        <Typography variant="h2">New Request Leave</Typography>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} sx={{ p: 5 }}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Type Of Leave</FormLabel>
              <Controller
                rules={{ required: true }}
                control={control}
                name="leaveType"
                render={({ field }) => {
                  console.log(field);
                  return (
                    <RadioGroup row {...field}>
                      <FormControlLabel
                        value="personalLeave"
                        control={<Radio />}
                        label="Personal Leave"
                      />
                      <FormControlLabel
                        value="sickLeave"
                        control={<Radio />}
                        label="Sick Leave"
                      />
                      <FormControlLabel
                        value="onSeva"
                        control={<Radio />}
                        label="On Seva"
                      />
                    </RadioGroup>
                  );
                }}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid></Grid>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register("leaveFrom")}
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              name="leaveFrom"
              label=" Leave From Date"
              id="outlined-basic"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register("leaveTo")}
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              name="leaveTo"
              label="Leave To Date"
              id="outlined-basic"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              /*  {...register("attachment")} */
              type="file"
              fullWidth
              name="attachment"
              InputLabelProps={{ shrink: true }}
              label="Upload File"
              id="outlined-basic"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register("reason")}
              type="text"
              fullWidth
              name="reason"
              label="Leave Reason"
              id="outlined-multiline-static"
              multiline
              rows={1}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" type="submit">
              Submit
            </Button>
            <Button
              sx={{ ml: 6 }}
              variant="outlined"
              color="error"
              onClick={() => navigate(-1)}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
      <ToastContainer />

      <Grid sx={{ pt: 5 }}>
        <TableContainer component={Paper}>
          <Table /* sx={{ minWidth: 650 }}  */ aria-label="caption table">
            {/* <caption>A basic table example with a caption</caption> */}
            <TableHead>
              <TableRow>
                <TableCell>Total Sick Leave</TableCell>
                <TableCell>Total Personal Leave</TableCell>
                <TableCell>Balance Sick Leave</TableCell>
                <TableCell>Balance Personal Leave</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableCell>{GetLeaveBalanceData?.totSickLeave}</TableCell>
              <TableCell>{GetLeaveBalanceData?.totPersonalLeave}</TableCell>
              <TableCell>{GetLeaveBalanceData?.balanceSickLeave}</TableCell>
              <TableCell>{GetLeaveBalanceData?.balancePersonalLeave}</TableCell>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Container>
  );
}
