import {
  Avatar,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Card,
} from "@mui/material";
import React, { useState } from "react";
import { addVacationAction } from "../../redux/slices/AppSlice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";

export default function AddVacation() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [destination, setDestination] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [price, setPrice] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    switch (name) {
      case "destination":
        return setDestination(value);

      case "description":
        return setDescription(value);

      case "image":
        return setImage(value);

      case "startDate":
        return setStartDate(value);

      case "endDate":
        return setEndDate(value);

      case "price":
        return setPrice(value);
    }
  };
  const goToAdminPage = () => navigate("/AdminPage");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const { meta } = await dispatch(
      addVacationAction({
        destination,
        description,
        image,
        startDate,
        endDate,
        price,
      })
    );

    if (meta.requestStatus === "fulfilled") {
      navigate("/Vacations");
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",

        backgroundImage: "url(/images/pexels-photo-1430677.jpeg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <Avatar sx={{ m: 3, bgcolor: "secondary.main" }}>
        <ConnectingAirportsIcon />
      </Avatar>
      <Typography component="h1" variant="h5" sx={{ color: "test.main" }}>
        Add Vacation
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 5 }}>
        <Grid
          container
          component={Card}
          sx={{
            bgcolor: "test.main",
          }}
        >
          <Grid item xs={12} sx={{ p: "15px" }}>
            <TextField
              color="secondary"
              autoComplete="given-name"
              name="destination"
              required
              fullWidth
              id="destination"
              label="Add Destination"
              autoFocus
              value={destination}
              onChange={handleInputChange}
              inputProps={{ sx: { color: "test" } }}
            />
          </Grid>
          <Grid item xs={12} sx={{ p: "15px" }}>
            <TextField
              required
              color="secondary"
              fullWidth
              id="description"
              label="Add Description"
              name="description"
              value={description}
              onChange={handleInputChange}
              autoComplete="description"
            />
          </Grid>
          <Grid item xs={12} sx={{ p: "15px" }}>
            <TextField
              required
              color="secondary"
              fullWidth
              id="image"
              label="Add Image"
              name="image"
              value={image}
              onChange={handleInputChange}
              autoComplete="Image"
            />
          </Grid>
          <Grid item xs={12} sx={{ p: "15px" }}>
            <TextField
              required
              color="secondary"
              fullWidth
              id="startDate"
              label="Enter Start Date"
              name="startDate"
              value={startDate}
              onChange={handleInputChange}
              autoComplete="Start Date"
            />
          </Grid>
          <Grid item xs={12} sx={{ p: "15px" }}>
            <TextField
              required
              color="secondary"
              fullWidth
              name="endDate"
              label="Enter End Date"
              type="endDate"
              id="endDate"
              value={endDate}
              onChange={handleInputChange}
              autoComplete="new-password"
            />
          </Grid>
          <Grid item xs={12} sx={{ p: "15px" }}>
            <TextField
              required
              color="secondary"
              fullWidth
              name="price"
              label="Enter Price"
              type="price"
              id="price"
              value={price}
              onChange={handleInputChange}
              autoComplete="new-password"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, bgcolor: "secondary.main" }}
        >
          Add
        </Button>
        <Grid container></Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={goToAdminPage}
          sx={{ mt: 3, mb: 2, bgcolor: "secondary.main" }}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
}
