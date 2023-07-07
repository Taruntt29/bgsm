import React, { useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useFieldArray, useForm } from "react-hook-form";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import { createTravelRequestAction } from "redux/actions/TravelRequest";
import { useDispatch } from "react-redux";

function TravelClaimForm() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, control, handleSubmit } = useForm();

  useEffect(() => {
    travelAppend();
  }, []);
  console.log("iddd->>>>", id);
  const {
    fields: travelFields,
    append: travelAppend,
    remove: travelRemove,
  } = useFieldArray({ control, name: "travelDetails" });
  const travelDetailsAppend = () => {
    travelAppend({
      trvlId: id,
    });
  };
  const {
    fields: hotelsFields,
    append: hotelsAppend,
    remove: hotelsRemove,
  } = useFieldArray({ control, name: "hotelDetails" });
  const hotelDetailsAppend = () => {
    hotelsAppend({
      trvlId: id,
    });
  };
  const {
    fields: foodFields,
    append: foodAppend,
    remove: foodRemove,
  } = useFieldArray({ control, name: "foodDetails" });
  const foodDetailsAppend = () => {
    foodAppend({
      trvlId: id,
    });
  };
  const {
    fields: otherFields,
    append: otherAppend,
    remove: otherRemove,
  } = useFieldArray({ control, name: "otherDetails" });
  const otherDetailsAppend = () => {
    otherAppend({
      trvlId: id,
    });
  };

  const onSubmit = (data) => {
    console.log("data", data);
    createTravelRequestAction(dispatch, data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography sx={{ fontFamily: "auto" }} variant="h1">
            Travel Details
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="outlined" size="small" onClick={travelDetailsAppend}>
            <ControlPointOutlinedIcon style={{ fontSize: "15px" }} /> Row
          </Button>
        </Box>
        {travelFields.map(
          (
            {
              id,
              trvlDate,
              trvlFrom,
              trvltTo,
              othModeOfTravel,
              modeOfTravelName,
              trvlAmt,
              trvlPlace,
              attachmentId,
            },
            index
          ) => {
            return (
              <Box key={id}>
                <Grid
                  container
                  spacing={5}
                  columns={{ xs: 3, md: 12 }}
                  sx={{ pt: 2 }}
                >
                  <Grid item xs={3}>
                    <TextField
                      {...register(`travelDetails[${index}].trvlDate`)}
                      defaultValue={trvlDate}
                      type="date"
                      fullWidth
                      id="outlined-basic"
                      label=" Travel Date *"
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      {...register(`travelDetails[${index}].trvlFrom`)}
                      defaultValue={trvlFrom}
                      type="text"
                      fullWidth
                      id="outlined-basic"
                      label=" Travel From"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      {...register(`travelDetails[${index}].trvltTo`)}
                      defaultValue={trvltTo}
                      type="text"
                      fullWidth
                      id="outlined-basic"
                      label=" Travel To"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <FormControl fullWidth size="medium">
                      <InputLabel id="demo-simple-select-label">
                        Mode Of Travel *
                      </InputLabel>
                      <Select
                        {...register(`travelDetails[${index}].othModeOfTravel`)}
                        defaultValue={othModeOfTravel?.selectedValue ?? ""}
                        // value={props.selectedValue ?? " "}
                        labelId="demo-simple-select-label"
                        label=" Mode Of Travel *"
                      >
                        <MenuItem value="bus">Bus</MenuItem>
                        <MenuItem value="train">Train</MenuItem>
                        <MenuItem value="fligh">Flight</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      {...register(`travelDetails[${index}].modeOfTravelName`)}
                      defaultValue={modeOfTravelName}
                      type="text"
                      fullWidth
                      id="outlined-basic"
                      label="Travel Name"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      {...register(`travelDetails[${index}].trvlPlace`)}
                      defaultValue={trvlPlace}
                      type="text"
                      fullWidth
                      id="outlined-basic"
                      label=" Travel Place"
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={3}>
                    <TextField
                      {...register(`travelDetails[${index}].trvlAmt`)}
                      defaultValue={trvlAmt}
                      type="number"
                      fullWidth
                      id="outlined-basic"
                      label=" Total Amount Rs."
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      {...register(`travelDetails[${index}].attachmentId`)}
                      defaultValue={attachmentId}
                      type="file"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      fullWidth
                      id="outlined-basic"
                      label=" Upload File"
                      variant="outlined"
                    />
                  </Grid>

                  <Grid sx={{ m: 4 }}>
                    <Button
                      variant="outlined"
                      onClick={() => travelRemove(index)}
                    >
                      <RemoveCircleOutlineOutlinedIcon
                        style={{ fontSize: "15px" }}
                      />
                      Row
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            );
          }
        )}

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography sx={{ fontFamily: "auto" }} variant="h1">
            Hotels Details
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="outlined" size="small" onClick={hotelDetailsAppend}>
            <ControlPointOutlinedIcon style={{ fontSize: "15px" }} /> Row
          </Button>
        </Box>

        {hotelsFields.map(
          (
            {
              id,
              trvltFrom,
              trvltTo,
              hotelName,
              cityCode,
              cityName,
              /* otherCity, */
              noOfDays,
              trvlAmt,
              attachmentId,
            },
            index
          ) => {
            return (
              <Box key={id}>
                <Grid
                  container
                  spacing={5}
                  columns={{ xs: 3, md: 12 }}
                  sx={{ pt: 2 }}
                >
                  <Grid item xs={3}>
                    <TextField
                      //ref={register()}
                      {...register(`hotelDetails[${index}].hotelName`)}
                      // name={`travelDetails[${index}].travelDate`}

                      defaultValue={hotelName}
                      type="text"
                      fullWidth
                      id="outlined-basic"
                      label=" Hotel Name *"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      {...register(`hotelDetails[${index}].trvltFrom`)}
                      defaultValue={trvltFrom}
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      fullWidth
                      id="outlined-basic"
                      label=" From Date"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      {...register(`hotelDetails[${index}].trvltTo`)}
                      defaultValue={trvltTo}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      type="date"
                      fullWidth
                      id="outlined-basic"
                      label="  To Date"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <FormControl fullWidth size="medium">
                      <InputLabel id="demo-simple-select-label">
                        City *
                      </InputLabel>
                      <Select
                        {...register(`hotelDetails[${index}].cityName`)}
                        defaultValue={cityName?.selectedValue ?? ""}
                        // value={props.selectedValue ?? " "}
                        labelId="demo-simple-select-label"
                        label=" City Name *"
                      >
                        <MenuItem value="bus">Noida</MenuItem>
                        <MenuItem value="train">Delhi</MenuItem>
                        <MenuItem value="fligh">Jaipur</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      {...register(`hotelDetails[${index}].cityCode`)}
                      defaultValue={cityCode}
                      type="number"
                      fullWidth
                      id="outlined-basic"
                      label="City Code."
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      {...register(`hotelDetails[${index}].noOfDays`)}
                      defaultValue={noOfDays}
                      type="number"
                      fullWidth
                      id="outlined-basic"
                      label="No Of Days."
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      {...register(`hotelDetails[${index}].trvlAmt`)}
                      defaultValue={trvlAmt}
                      type="number"
                      fullWidth
                      id="outlined-basic"
                      label=" Total Amount Rs."
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      {...register(`hotelDetails[${index}].attachmentId`)}
                      defaultValue={attachmentId}
                      type="file"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      fullWidth
                      id="outlined-basic"
                      label=" Upload File"
                      variant="outlined"
                    />
                  </Grid>
                  {/*   <Grid item xs={3}>
                    <TextField
                      {...register(`hotelDetails[${index}].remark`)}
                      defaultValue={remark}
                      type="text"
                      fullWidth
                      id="outlined-basic"
                      label=" Remark"
                      variant="outlined"
                    />
                  </Grid> */}
                  <Grid sx={{ m: 4 }}>
                    <Button
                      variant="outlined"
                      onClick={() => hotelsRemove(index > 1)}
                    >
                      <RemoveCircleOutlineOutlinedIcon
                        style={{ fontSize: "15px" }}
                      />
                      Row
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            );
          }
        )}

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography sx={{ fontFamily: "auto" }} variant="h1">
            Food Details
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="outlined" size="small" onClick={foodDetailsAppend}>
            <ControlPointOutlinedIcon style={{ fontSize: "15px" }} /> Row
          </Button>
        </Box>

        {foodFields.map(
          (
            {
              id,
              restaurantName,
              fhdDate,
              cityCode,
              cityName,
              otherCity,
              noOfDays,
              foodAmt,
              attachmentId,
              /*  invoiceNo, */
            },
            index
          ) => {
            return (
              <Box key={id}>
                <Grid
                  container
                  spacing={5}
                  columns={{ xs: 3, md: 12 }}
                  sx={{ pt: 2 }}
                >
                  <Grid item xs={3}>
                    <TextField
                      {...register(`foodDetails[${index}].restaurantName`)}
                      defaultValue={restaurantName}
                      type="text"
                      fullWidth
                      id="outlined-basic"
                      label=" Restaurant Name *"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      {...register(`foodDetails[${index}].fhdDate`)}
                      defaultValue={fhdDate}
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      fullWidth
                      id="outlined-basic"
                      label=" Date"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      {...register(`foodDetails[${index}].cityCode`)}
                      defaultValue={cityCode}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      type="number"
                      fullWidth
                      id="outlined-basic"
                      label="  City Code"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <FormControl fullWidth size="medium">
                      <InputLabel id="demo-simple-select-label">
                        City Name *
                      </InputLabel>
                      <Select
                        {...register(`foodDetails[${index}].cityName`)}
                        defaultValue={cityName?.selectedValue ?? ""}
                        // value={props.selectedValue ?? " "}
                        labelId="demo-simple-select-label"
                        label=" City Name *"
                      >
                        <MenuItem value="bus">Noida</MenuItem>
                        <MenuItem value="train">Delhi</MenuItem>
                        <MenuItem value="fligh">Jaipur</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      {...register(`foodDetails[${index}].otherCity`)}
                      defaultValue={otherCity}
                      type="text"
                      fullWidth
                      id="outlined-basic"
                      label="Other City."
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      {...register(`foodDetails[${index}].noOfDays`)}
                      defaultValue={noOfDays}
                      type="number"
                      fullWidth
                      id="outlined-basic"
                      label=" No Of Days"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      {...register(`foodDetails[${index}].attachmentId`)}
                      defaultValue={attachmentId}
                      type="file"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      fullWidth
                      id="outlined-basic"
                      label=" Upload File"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      {...register(`foodDetails[${index}].foodAmt`)}
                      defaultValue={foodAmt}
                      type="text"
                      fullWidth
                      id="outlined-basic"
                      label=" food Amount Rs."
                      variant="outlined"
                    />
                  </Grid>
                  <Grid sx={{ m: 4 }}>
                    <Button
                      variant="outlined"
                      onClick={() => foodRemove(index > 1)}
                    >
                      <RemoveCircleOutlineOutlinedIcon
                        style={{ fontSize: "15px" }}
                      />
                      Row
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            );
          }
        )}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography sx={{ fontFamily: "auto" }} variant="h1">
            Other Details
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="outlined" size="small" onClick={otherDetailsAppend}>
            <ControlPointOutlinedIcon style={{ fontSize: "15px" }} /> Row
          </Button>
        </Box>

        {otherFields.map(
          (
            {
              id,
              hotelName,
              formDate,
              toDate,
              city,
              fareAmount,
              totalAmount,
              file,
              remark,
            },
            index
          ) => {
            return (
              <Box key={id}>
                <Grid
                  container
                  spacing={5}
                  columns={{ xs: 3, md: 12 }}
                  sx={{ pt: 2 }}
                >
                  <Grid item xs={3}>
                    <TextField
                      //ref={register()}
                      {...register(`otherDetails[${index}].hotelName`)}
                      // name={`travelDetails[${index}].travelDate`}

                      defaultValue={hotelName}
                      type="text"
                      fullWidth
                      id="outlined-basic"
                      label=" Hotel Name *"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      {...register(`otherDetails[${index}].formDate`)}
                      defaultValue={formDate}
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      fullWidth
                      id="outlined-basic"
                      label=" From Date"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      {...register(`otherDetails[${index}].toDate`)}
                      defaultValue={toDate}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      type="date"
                      fullWidth
                      id="outlined-basic"
                      label="  To Date"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <FormControl fullWidth size="medium">
                      <InputLabel id="demo-simple-select-label">
                        City *
                      </InputLabel>
                      <Select
                        {...register(`otherDetails[${index}].city`)}
                        defaultValue={city?.selectedValue ?? ""}
                        // value={props.selectedValue ?? " "}
                        labelId="demo-simple-select-label"
                        label=" City *"
                      >
                        <MenuItem value="bus">Noida</MenuItem>
                        <MenuItem value="train">Delhi</MenuItem>
                        <MenuItem value="fligh">Jaipur</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      {...register(`otherDetails[${index}].fareAmount`)}
                      defaultValue={fareAmount}
                      type="number"
                      fullWidth
                      id="outlined-basic"
                      label="Fare Rs."
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      {...register(`otherDetails[${index}].totalAmount`)}
                      defaultValue={totalAmount}
                      type="number"
                      fullWidth
                      id="outlined-basic"
                      label=" Total Rs."
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      {...register(`otherDetails[${index}].file`)}
                      defaultValue={file}
                      type="file"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      fullWidth
                      id="outlined-basic"
                      label=" Upload File"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      {...register(`otherDetails[${index}].remark`)}
                      defaultValue={remark}
                      type="text"
                      fullWidth
                      id="outlined-basic"
                      label=" Remark"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid sx={{ m: 4 }}>
                    <Button
                      variant="outlined"
                      onClick={() => otherRemove(index > 1)}
                    >
                      <RemoveCircleOutlineOutlinedIcon
                        style={{ fontSize: "15px" }}
                      />
                      Row
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            );
          }
        )}
        <Box sx={{ mt: 6, display: "flex", justifyContent: "flex-end" }}>
          <Button
            sx={{ mr: 5 }}
            color="primary"
            variant="outlined"
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>
          <Button variant="contained" type="submit">
            Add Details
          </Button>
        </Box>
      </form>
    </div>
  );
}
export default TravelClaimForm;
