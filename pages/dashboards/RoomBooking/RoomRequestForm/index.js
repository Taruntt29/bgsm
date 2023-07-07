import {
  Box,
  Button,
  Container,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import React, { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import { useNavigate } from "react-router-dom";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createRoomRequestAction } from "redux/actions/Room";
export default function index() {
  const [locationType, setLocationType] = useState("");
  /* const [value, setValue] = React.useState("female"); */

  const [guestCategories, setGuestCategories] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, control } = useForm({
    /* mode: "onChange",
      resolver: yupResolver(schema), */
  });
  const {
    fields: guestDetails,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "guestDetails",
  });
  const selectedLocation = (e) => {
    setLocationType(e.target.value);
  };
  const selectedGuestCategory = (e) => {
    setGuestCategories(e.target.value);
  };
  const onSubmit = (data) => {
    /* data.outcome = "SUBMIT"; */
    console.log("dataaaa", data);
    createRoomRequestAction(dispatch, data).then(() => {
      navigate("/room/room-request");
    });
  };

  useEffect(() => {
    append();
  }, []);
  return (
    <Container>
      <Box sx={{ mt: 3, mb: 5 }}>
        <Typography sx={{ fontFamily: "auto" }} variant="h1">
          Room Booking Request
        </Typography>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth size="medium">
              <InputLabel id="demo-simple-select-label">
                Select Location
              </InputLabel>
              <Select
                inputProps={register("bookingForLocation", {
                  required: true,
                })}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="trvlType"
                value={locationType}
                label="Select Location"
                onChange={selectedLocation}
              >
                <MenuItem value="delhi">Delhi</MenuItem>
                <MenuItem value="noida">Noida</MenuItem>
              </Select>
            </FormControl>
            {/*  <FormHelperText sx={{ ml: 4 }} error={true}>
              {errors.trvlType && `${errors.trvlType.message}`}
            </FormHelperText> */}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register("numOfGuest")}
              type="number"
              fullWidth
              name="numOfGuest"
              label=" No of Guest"
              id="outlined-basic"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register("checkInDate")}
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              name="checkInDate"
              label=" Check In Date"
              id="outlined-basic"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register("checkOutDate")}
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              name="checkOutDate"
              label="Check Out Date"
              id="outlined-basic"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register("numOfRoomRequired")}
              type="number"
              fullWidth
              name="numOfRoomRequired"
              label="No Of Room Required"
              id="outlined-basic"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth size="medium">
              <InputLabel id="demo-simple-select-label">
                Select Guest Category
              </InputLabel>
              <Select
                inputProps={register("guestCategory", {
                  required: true,
                })}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="guestCategory"
                value={guestCategories}
                label="Select Guest Category"
                onChange={selectedGuestCategory}
              >
                <MenuItem value="Ashramwasi">Ashramwasi</MenuItem>
                <MenuItem value="Member">Member</MenuItem>
              </Select>
            </FormControl>
            {/*  <FormHelperText sx={{ ml: 4 }} error={true}>
              {errors.trvlType && `${errors.trvlType.message}`}
            </FormHelperText> */}
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend" row>
                Conveyance Required ?
              </FormLabel>
              <Controller
                render={({ field }) => (
                  <RadioGroup row aria-label="gender" {...field}>
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                )}
                name="conveyanceRequired"
                control={control}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register("requirement")}
              type="text"
              fullWidth
              name="requirement"
              label="Requirement"
              id="outlined-basic"
              variant="outlined"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography sx={{ fontFamily: "auto" }} variant="h1">
              Guest Details
            </Typography>

            <Button
              sx={{ m: 2 }}
              variant="outlined"
              size="small"
              onClick={() => append()}
            >
              <ControlPointOutlinedIcon style={{ fontSize: "15px" }} /> Row
            </Button>
          </Grid>
          {guestDetails?.map(({ id, guestName, guestId }, index) => {
            return (
              <Grid
                key={id}
                container
                spacing={5}
                columns={{ xs: 6, md: 12 }}
                sx={{ pl: 5 }}
              >
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register(`guestDetails[${index}].guestName`)}
                    defaultValue={guestName}
                    name="guestName"
                    type="text"
                    fullWidth
                    id="outlined-basic"
                    label=" Guest Name *"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register(`guestDetails[${index}].guestId`)}
                    defaultValue={guestId}
                    type="text"
                    name="guestId"
                    fullWidth
                    id="outlined-basic"
                    label=" Guest Id"
                    variant="outlined"
                  />
                </Grid>
                <Grid sx={{ m: 4, pl: 1 }}>
                  <Button variant="outlined" onClick={() => remove(index)}>
                    <RemoveCircleOutlineOutlinedIcon
                      style={{ fontSize: "15px" }}
                    />
                    Row
                  </Button>
                </Grid>
              </Grid>
            );
          })}
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
      <ToastContainer autoClose={4000} hideProgressBar={true} />
    </Container>
  );
}
